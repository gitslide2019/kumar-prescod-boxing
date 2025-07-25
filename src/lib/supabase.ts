import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price: number;
          image_url: string | null;
          category: string;
          in_stock: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          price: number;
          image_url?: string | null;
          category: string;
          in_stock?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          price?: number;
          image_url?: string | null;
          category?: string;
          in_stock?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      orders: {
        Row: {
          id: string;
          user_id: string;
          total_amount: number;
          status: string;
          payment_intent_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          total_amount: number;
          status?: string;
          payment_intent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          total_amount?: number;
          status?: string;
          payment_intent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id: string;
          quantity: number;
          price: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string;
          quantity?: number;
          price?: number;
          created_at?: string;
        };
      };
      sponsorships: {
        Row: {
          id: string;
          sponsor_name: string;
          package_type: string;
          amount: number;
          status: string;
          contact_email: string;
          message: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          sponsor_name: string;
          package_type: string;
          amount: number;
          status?: string;
          contact_email: string;
          message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          sponsor_name?: string;
          package_type?: string;
          amount?: number;
          status?: string;
          contact_email?: string;
          message?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      tickets: {
        Row: {
          id: string;
          event_name: string;
          event_date: string;
          venue: string;
          price: number;
          available: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          event_name: string;
          event_date: string;
          venue: string;
          price: number;
          available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          event_name?: string;
          event_date?: string;
          venue?: string;
          price?: number;
          available?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      ticket_purchases: {
        Row: {
          id: string;
          user_id: string;
          ticket_id: string;
          quantity: number;
          total_amount: number;
          payment_intent_id: string | null;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          ticket_id: string;
          quantity: number;
          total_amount: number;
          payment_intent_id?: string | null;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          ticket_id?: string;
          quantity?: number;
          total_amount?: number;
          payment_intent_id?: string | null;
          status?: string;
          created_at?: string;
        };
      };
      chat_messages: {
        Row: {
          id: string;
          user_id: string | null;
          message: string;
          response: string | null;
          is_ai: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          message: string;
          response?: string | null;
          is_ai?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          message?: string;
          response?: string | null;
          is_ai?: boolean;
          created_at?: string;
        };
      };
    };
  };
} 