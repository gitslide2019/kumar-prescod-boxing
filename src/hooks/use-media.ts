import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import type { Database } from '@/lib/supabase';

type MediaItem = Database['public']['Tables']['media_items']['Row'];
type MediaCategory = Database['public']['Tables']['media_categories']['Row'];
type MediaTag = Database['public']['Tables']['media_tags']['Row'];

export function useMedia() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [categories, setCategories] = useState<MediaCategory[]>([]);
  const [tags, setTags] = useState<MediaTag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all media items
  const fetchMediaItems = async (filters?: {
    type?: 'video' | 'image';
    category?: string;
    featured?: boolean;
    public?: boolean;
  }) => {
    try {
      setLoading(true);
      let query = supabase
        .from('media_items')
        .select(`
          *,
          media_categories(name),
          media_items_tags(
            media_tags(name)
          )
        `)
        .order('sort_order', { ascending: true });

      if (filters?.type) {
        query = query.eq('type', filters.type);
      }
      if (filters?.category) {
        query = query.eq('media_categories.name', filters.category);
      }
      if (filters?.featured !== undefined) {
        query = query.eq('is_featured', filters.featured);
      }
      if (filters?.public !== undefined) {
        query = query.eq('is_public', filters.public);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMediaItems(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch media items');
    } finally {
      setLoading(false);
    }
  };

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('media_categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    }
  };

  // Fetch tags
  const fetchTags = async () => {
    try {
      const { data, error } = await supabase
        .from('media_tags')
        .select('*')
        .order('name');

      if (error) throw error;
      setTags(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tags');
    }
  };

  // Get videos for hero section
  const getHeroVideos = async () => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .select('*')
        .eq('type', 'video')
        .eq('is_featured', true)
        .order('sort_order', { ascending: true })
        .limit(5);

      if (error) throw error;
      return data || [];
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch hero videos');
      return [];
    }
  };

  // Get media by category
  const getMediaByCategory = async (categoryName: string) => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .select(`
          *,
          media_categories!inner(name)
        `)
        .eq('media_categories.name', categoryName)
        .eq('is_public', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch media by category');
      return [];
    }
  };

  // Get media by type
  const getMediaByType = async (type: 'video' | 'image') => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .select('*')
        .eq('type', type)
        .eq('is_public', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch media by type');
      return [];
    }
  };

  // Search media by tags
  const searchMediaByTags = async (tagNames: string[]) => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .select(`
          *,
          media_items_tags(
            media_tags!inner(name)
          )
        `)
        .in('media_items_tags.media_tags.name', tagNames)
        .eq('is_public', true)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search media by tags');
      return [];
    }
  };

  // Upload media file to Supabase Storage
  const uploadMediaFile = async (
    file: File,
    bucket: string,
    path: string
  ): Promise<{ url: string; error: string | null }> => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(path);

      return { url: urlData.publicUrl, error: null };
    } catch (err) {
      return { 
        url: '', 
        error: err instanceof Error ? err.message : 'Failed to upload file' 
      };
    }
  };

  // Create new media item
  const createMediaItem = async (mediaData: {
    title: string;
    description?: string;
    type: 'video' | 'image';
    category_id?: string;
    url: string;
    thumbnail_url?: string;
    duration?: number;
    file_size?: number;
    width?: number;
    height?: number;
    is_featured?: boolean;
    is_public?: boolean;
    sort_order?: number;
  }) => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .insert(mediaData)
        .select()
        .single();

      if (error) throw error;
      
      // Refresh media items
      await fetchMediaItems();
      return { data, error: null };
    } catch (err) {
      return { 
        data: null, 
        error: err instanceof Error ? err.message : 'Failed to create media item' 
      };
    }
  };

  // Update media item
  const updateMediaItem = async (
    id: string,
    updates: Partial<MediaItem>
  ) => {
    try {
      const { data, error } = await supabase
        .from('media_items')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      // Refresh media items
      await fetchMediaItems();
      return { data, error: null };
    } catch (err) {
      return { 
        data: null, 
        error: err instanceof Error ? err.message : 'Failed to update media item' 
      };
    }
  };

  // Delete media item
  const deleteMediaItem = async (id: string) => {
    try {
      const { error } = await supabase
        .from('media_items')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Refresh media items
      await fetchMediaItems();
      return { error: null };
    } catch (err) {
      return { 
        error: err instanceof Error ? err.message : 'Failed to delete media item' 
      };
    }
  };

  // Initialize data
  useEffect(() => {
    fetchMediaItems();
    fetchCategories();
    fetchTags();
  }, []);

  return {
    mediaItems,
    categories,
    tags,
    loading,
    error,
    fetchMediaItems,
    getHeroVideos,
    getMediaByCategory,
    getMediaByType,
    searchMediaByTags,
    uploadMediaFile,
    createMediaItem,
    updateMediaItem,
    deleteMediaItem,
  };
} 