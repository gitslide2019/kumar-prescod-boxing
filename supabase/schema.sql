-- Kumar Prescod Boxing Website Database Schema
-- Run this in your Supabase SQL editor

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media categories table
CREATE TABLE IF NOT EXISTS public.media_categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media items table (for videos and photos)
CREATE TABLE IF NOT EXISTS public.media_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    type TEXT NOT NULL CHECK (type IN ('video', 'image')),
    category_id UUID REFERENCES public.media_categories(id) ON DELETE SET NULL,
    url TEXT NOT NULL,
    thumbnail_url TEXT,
    duration INTEGER, -- for videos (in seconds)
    file_size INTEGER, -- in bytes
    width INTEGER, -- for images/videos
    height INTEGER, -- for images/videos
    is_featured BOOLEAN DEFAULT false,
    is_public BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media tags table
CREATE TABLE IF NOT EXISTS public.media_tags (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Media items tags junction table
CREATE TABLE IF NOT EXISTS public.media_items_tags (
    media_item_id UUID REFERENCES public.media_items(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES public.media_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (media_item_id, tag_id)
);

-- Products table (merchandise)
CREATE TABLE IF NOT EXISTS public.products (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url TEXT,
    category TEXT NOT NULL DEFAULT 'merchandise',
    in_stock BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'shipped', 'delivered', 'cancelled')),
    payment_intent_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sponsorships table
CREATE TABLE IF NOT EXISTS public.sponsorships (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    sponsor_name TEXT NOT NULL,
    package_type TEXT NOT NULL CHECK (package_type IN ('training-camp', 'fight-sponsor', 'equipment-sponsor', 'career-sponsor')),
    amount DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'paid', 'rejected')),
    contact_email TEXT NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tickets table
CREATE TABLE IF NOT EXISTS public.tickets (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    event_name TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    venue TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Ticket purchases table
CREATE TABLE IF NOT EXISTS public.ticket_purchases (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    ticket_id UUID REFERENCES public.tickets(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_intent_id TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chat messages table (for AI assistant)
CREATE TABLE IF NOT EXISTS public.chat_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.users(id) ON DELETE SET NULL,
    message TEXT NOT NULL,
    response TEXT,
    is_ai BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON public.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON public.order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_products_category ON public.products(category);
CREATE INDEX IF NOT EXISTS idx_products_in_stock ON public.products(in_stock);
CREATE INDEX IF NOT EXISTS idx_sponsorships_status ON public.sponsorships(status);
CREATE INDEX IF NOT EXISTS idx_tickets_event_date ON public.tickets(event_date);
CREATE INDEX IF NOT EXISTS idx_ticket_purchases_user_id ON public.ticket_purchases(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_user_id ON public.chat_messages(user_id);
CREATE INDEX IF NOT EXISTS idx_media_items_type ON public.media_items(type);
CREATE INDEX IF NOT EXISTS idx_media_items_category ON public.media_items(category_id);
CREATE INDEX IF NOT EXISTS idx_media_items_featured ON public.media_items(is_featured);
CREATE INDEX IF NOT EXISTS idx_media_items_public ON public.media_items(is_public);
CREATE INDEX IF NOT EXISTS idx_media_items_sort ON public.media_items(sort_order);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sponsorships_updated_at BEFORE UPDATE ON public.sponsorships FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_tickets_updated_at BEFORE UPDATE ON public.tickets FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_media_items_updated_at BEFORE UPDATE ON public.media_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sponsorships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_items_tags ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "Users can view own profile" ON public.users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.users FOR UPDATE USING (auth.uid() = id);

-- Media categories are publicly readable
CREATE POLICY "Media categories are publicly readable" ON public.media_categories FOR SELECT USING (true);

-- Media items policies
CREATE POLICY "Public media items are publicly readable" ON public.media_items FOR SELECT USING (is_public = true);
CREATE POLICY "Authenticated users can view all media" ON public.media_items FOR SELECT USING (auth.uid() IS NOT NULL);
CREATE POLICY "Admin users can manage media" ON public.media_items FOR ALL USING (auth.uid() IN (
    SELECT id FROM public.users WHERE email IN ('admin@kumarprescod.com', 'kumar@kumarprescod.com')
));

-- Media tags are publicly readable
CREATE POLICY "Media tags are publicly readable" ON public.media_tags FOR SELECT USING (true);

-- Media items tags are publicly readable
CREATE POLICY "Media items tags are publicly readable" ON public.media_items_tags FOR SELECT USING (true);

-- Products are publicly readable
CREATE POLICY "Products are publicly readable" ON public.products FOR SELECT USING (true);

-- Orders policies
CREATE POLICY "Users can view own orders" ON public.orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own orders" ON public.orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own orders" ON public.orders FOR UPDATE USING (auth.uid() = user_id);

-- Order items policies
CREATE POLICY "Users can view own order items" ON public.order_items FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.orders WHERE id = order_id AND user_id = auth.uid())
);
CREATE POLICY "Users can create own order items" ON public.order_items FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.orders WHERE id = order_id AND user_id = auth.uid())
);

-- Sponsorships are publicly readable but only authenticated users can create
CREATE POLICY "Sponsorships are publicly readable" ON public.sponsorships FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create sponsorships" ON public.sponsorships FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- Tickets are publicly readable
CREATE POLICY "Tickets are publicly readable" ON public.tickets FOR SELECT USING (true);

-- Ticket purchases policies
CREATE POLICY "Users can view own ticket purchases" ON public.ticket_purchases FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create own ticket purchases" ON public.ticket_purchases FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Chat messages policies
CREATE POLICY "Users can view own chat messages" ON public.chat_messages FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);
CREATE POLICY "Users can create chat messages" ON public.chat_messages FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Insert sample media categories
INSERT INTO public.media_categories (name, description) VALUES
('fights', 'Fight videos and photos'),
('training', 'Training sessions and workouts'),
('journey', 'Personal journey and behind-the-scenes'),
('interviews', 'Interviews and media appearances'),
('highlights', 'Best moments and highlights');

-- Insert sample media tags
INSERT INTO public.media_tags (name) VALUES
('knockout'),
('training'),
('oakland'),
('champion'),
('professional'),
('amateur'),
('team-usa'),
('nationals'),
('elite'),
('motivation');

-- Insert sample media items (videos)
INSERT INTO public.media_items (title, description, type, category_id, url, thumbnail_url, duration, is_featured, sort_order) VALUES
('Kumar Prescod 2023 Nationals Fight 1', 'Championship fight from 2023 Nationals', 'video', 
 (SELECT id FROM public.media_categories WHERE name = 'fights'),
 'https://www.youtube.com/embed/hlAeye4eW4o?autoplay=1&loop=1&playlist=hlAeye4eW4o',
 'https://img.youtube.com/vi/hlAeye4eW4o/maxresdefault.jpg', 180, true, 1),

('Kumar Prescod Elite Training From Nationals', 'Elite training session showcasing skills', 'video',
 (SELECT id FROM public.media_categories WHERE name = 'training'),
 'https://www.youtube.com/embed/m5ZvGaWKrrQ?autoplay=1&loop=1&playlist=m5ZvGaWKrrQ',
 'https://img.youtube.com/vi/m5ZvGaWKrrQ/maxresdefault.jpg', 240, true, 2),

('The Young Raw One - Journey Documentary', 'Documentary about Kumar''s journey', 'video',
 (SELECT id FROM public.media_categories WHERE name = 'journey'),
 'https://www.youtube.com/embed/YKGBDJJjCxo?autoplay=1&loop=1&playlist=YKGBDJJjCxo',
 'https://img.youtube.com/vi/YKGBDJJjCxo/maxresdefault.jpg', 600, true, 3),

('Skyler Mauller vs Kumar Prescod (Pro Debut KO)', 'Professional debut knockout victory', 'video',
 (SELECT id FROM public.media_categories WHERE name = 'fights'),
 'https://www.youtube.com/embed/abEB1TwZPko?autoplay=1&loop=1&playlist=abEB1TwZPko',
 'https://img.youtube.com/vi/abEB1TwZPko/maxresdefault.jpg', 120, true, 4);

-- Insert sample media items (photos)
INSERT INTO public.media_items (title, description, type, category_id, url, thumbnail_url, width, height, is_featured, sort_order) VALUES
('Heavy Bag Training Fundamentals', 'Kumar working on heavy bag technique', 'image',
 (SELECT id FROM public.media_categories WHERE name = 'training'),
 '/images/training/training-1.jpeg', '/images/training/training-1.jpeg', 1920, 1080, false, 5),

('Professional Fight Promo', 'Professional fight promotional photo', 'image',
 (SELECT id FROM public.media_categories WHERE name = 'fights'),
 '/images/fights/fight-promo.jpeg', '/images/fights/fight-promo.jpeg', 1920, 1080, false, 6),

('Kumar Prescod About Photo', 'Professional headshot for about section', 'image',
 (SELECT id FROM public.media_categories WHERE name = 'journey'),
 '/images/fights/kumar-about-photo.png', '/images/fights/kumar-about-photo.png', 800, 600, true, 7),

('Boxing Journey 1', 'Early days of Kumar''s boxing journey', 'image',
 (SELECT id FROM public.media_categories WHERE name = 'journey'),
 '/images/journey/journey-1.jpeg', '/images/journey/journey-1.jpeg', 1920, 1080, false, 8);

-- Link media items to tags
INSERT INTO public.media_items_tags (media_item_id, tag_id) VALUES
-- Fight videos
((SELECT id FROM public.media_items WHERE title LIKE '%Fight 1%'), (SELECT id FROM public.media_tags WHERE name = 'champion')),
((SELECT id FROM public.media_items WHERE title LIKE '%Fight 1%'), (SELECT id FROM public.media_tags WHERE name = 'nationals')),
((SELECT id FROM public.media_items WHERE title LIKE '%Pro Debut%'), (SELECT id FROM public.media_tags WHERE name = 'knockout')),
((SELECT id FROM public.media_items WHERE title LIKE '%Pro Debut%'), (SELECT id FROM public.media_tags WHERE name = 'professional')),

-- Training videos
((SELECT id FROM public.media_items WHERE title LIKE '%Elite Training%'), (SELECT id FROM public.media_tags WHERE name = 'training')),
((SELECT id FROM public.media_items WHERE title LIKE '%Elite Training%'), (SELECT id FROM public.media_tags WHERE name = 'elite')),

-- Journey content
((SELECT id FROM public.media_items WHERE title LIKE '%Young Raw One%'), (SELECT id FROM public.media_tags WHERE name = 'motivation')),
((SELECT id FROM public.media_items WHERE title LIKE '%Young Raw One%'), (SELECT id FROM public.media_tags WHERE name = 'oakland')),

-- Training photos
((SELECT id FROM public.media_items WHERE title LIKE '%Heavy Bag%'), (SELECT id FROM public.media_tags WHERE name = 'training')),
((SELECT id FROM public.media_items WHERE title LIKE '%About Photo%'), (SELECT id FROM public.media_tags WHERE name = 'champion'));

-- Insert sample data
INSERT INTO public.products (name, description, price, category, image_url) VALUES
('Kumar Prescod Official T-Shirt', 'Premium cotton t-shirt with Kumar Prescod logo', 29.99, 'clothing', '/images/merch/tshirt.jpg'),
('Kumar Prescod Boxing Gloves', 'Professional boxing gloves signed by Kumar', 89.99, 'equipment', '/images/merch/gloves.jpg'),
('Kumar Prescod Hoodie', 'Comfortable hoodie with embroidered logo', 49.99, 'clothing', '/images/merch/hoodie.jpg'),
('Kumar Prescod Cap', 'Adjustable cap with embroidered logo', 24.99, 'accessories', '/images/merch/cap.jpg'),
('Kumar Prescod Poster', 'High-quality poster 24x36 inches', 19.99, 'posters', '/images/merch/poster.jpg');

-- Insert sample ticket
INSERT INTO public.tickets (event_name, event_date, venue, price) VALUES
('Kumar Prescod vs TBA', '2025-08-16 20:00:00+00', 'Oakland Marriott City Center', 75.00);

-- Create a function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, full_name, avatar_url)
    VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'avatar_url');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create user profile on signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 