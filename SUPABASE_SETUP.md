# Supabase Setup Guide - Kumar Prescod Boxing Website

## 🚀 Quick Setup

### 1. Create Supabase Project

1. Go to [Supabase](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `kumar-prescod-boxing`
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users
5. Click "Create new project"

### 2. Get Your API Keys

1. Go to **Settings** → **API**
2. Copy your:
   - **Project URL** (ends with `.supabase.co`)
   - **anon public** key

### 3. Set Environment Variables

Create a `.env` file in your project root:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Set Up Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the entire content from `supabase/schema.sql`
3. Paste and run the SQL script
4. This will create all tables, indexes, and sample data

## 📊 Database Tables

### Core Tables

| Table | Purpose | Key Features |
|-------|---------|--------------|
| `users` | User profiles | Extends Supabase auth |
| `media_categories` | Media organization | Categories for videos/photos |
| `media_items` | Videos and photos | Complete media management |
| `media_tags` | Media tagging | Search and filtering |
| `media_items_tags` | Tag relationships | Many-to-many tagging |
| `products` | Merchandise items | E-commerce catalog |
| `orders` | Customer orders | Payment tracking |
| `order_items` | Order line items | Quantity tracking |
| `sponsorships` | Sponsorship requests | Business partnerships |
| `tickets` | Event tickets | Fight night sales |
| `ticket_purchases` | Ticket orders | Event management |
| `chat_messages` | AI chat history | Customer support |

### Sample Data Included

- **5 Products**: T-shirts, gloves, hoodies, caps, posters
- **1 Event**: August 16th fight at Oakland Marriott
- **Sample pricing**: $19.99 - $89.99 range
- **5 Media Categories**: fights, training, journey, interviews, highlights
- **10 Media Tags**: knockout, training, oakland, champion, professional, etc.
- **8 Media Items**: 4 videos + 4 photos with proper metadata

## 🔐 Security Features

### Row Level Security (RLS)
- Users can only access their own data
- Products and tickets are publicly readable
- Sponsorships require authentication
- Chat messages are user-scoped

### Authentication
- Email/password signup
- Social login (Google, GitHub)
- Magic link authentication
- Session management

## 🛠️ Integration Points

### 1. Authentication Hook

```typescript
import { useAuth } from '@/hooks/use-auth';

const { user, signIn, signOut } = useAuth();
```

### 2. Database Operations

```typescript
import { supabase } from '@/lib/supabase';

// Get products
const { data: products } = await supabase
  .from('products')
  .select('*')
  .eq('in_stock', true);

// Create order
const { data: order } = await supabase
  .from('orders')
  .insert({
    user_id: user.id,
    total_amount: 99.99,
    status: 'pending'
  });
```

### 3. Real-time Subscriptions

```typescript
// Listen for new chat messages
const subscription = supabase
  .channel('chat_messages')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'chat_messages'
  }, (payload) => {
    console.log('New message:', payload.new);
  })
  .subscribe();
```

## 📱 Features Enabled

### E-commerce
- ✅ Product catalog
- ✅ Shopping cart
- ✅ Order management
- ✅ Payment integration
- ✅ Inventory tracking

### Event Management
- ✅ Ticket sales
- ✅ Event details
- ✅ Purchase tracking
- ✅ Capacity management

### Sponsorship
- ✅ Package management
- ✅ Application forms
- ✅ Status tracking
- ✅ Contact management

### Media Management
- ✅ Video and photo storage
- ✅ Category organization
- ✅ Tagging system
- ✅ Featured content
- ✅ Public/private control
- ✅ Sort ordering

### Customer Support
- ✅ AI chat assistant
- ✅ Message history
- ✅ User authentication
- ✅ Real-time messaging

## 🔧 Advanced Configuration

### 1. Storage Buckets

Create storage buckets for:
- `merchandise-images` - Product photos
- `user-avatars` - Profile pictures
- `event-media` - Fight photos/videos
- `training-media` - Training session photos/videos
- `journey-media` - Behind-the-scenes content
- `interviews-media` - Interview recordings

### 2. Edge Functions

Deploy edge functions for:
- Payment webhooks
- Email notifications
- AI chat processing
- Analytics tracking

### 3. Database Functions

```sql
-- Get user's order history
CREATE OR REPLACE FUNCTION get_user_orders(user_uuid UUID)
RETURNS TABLE (
  order_id UUID,
  total_amount DECIMAL,
  status TEXT,
  created_at TIMESTAMP
) AS $$
BEGIN
  RETURN QUERY
  SELECT o.id, o.total_amount, o.status, o.created_at
  FROM public.orders o
  WHERE o.user_id = user_uuid
  ORDER BY o.created_at DESC;
END;
$$ LANGUAGE plpgsql;
```

## 📈 Analytics & Monitoring

### 1. Dashboard Views

```sql
-- Sales analytics
CREATE VIEW sales_analytics AS
SELECT 
  DATE(created_at) as sale_date,
  COUNT(*) as total_orders,
  SUM(total_amount) as revenue
FROM public.orders
WHERE status = 'paid'
GROUP BY DATE(created_at)
ORDER BY sale_date DESC;
```

### 2. Performance Monitoring

- Database query performance
- Real-time connection metrics
- Storage usage tracking
- API rate limiting

## 🚨 Troubleshooting

### Common Issues

1. **RLS Policy Errors**
   - Check user authentication
   - Verify policy conditions
   - Test with different user roles

2. **Real-time Not Working**
   - Enable real-time in dashboard
   - Check channel subscriptions
   - Verify table permissions

3. **Storage Upload Fails**
   - Check bucket permissions
   - Verify file size limits
   - Test with different file types

### Debug Commands

```sql
-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE schemaname = 'public';

-- Monitor active connections
SELECT * FROM pg_stat_activity
WHERE datname = current_database();
```

## 🔄 Deployment Checklist

- [ ] Supabase project created
- [ ] Environment variables set
- [ ] Database schema deployed
- [ ] Sample data inserted
- [ ] RLS policies tested
- [ ] Authentication configured
- [ ] Storage buckets created
- [ ] Real-time enabled
- [ ] Edge functions deployed (if needed)

## 📞 Support

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Community**: [github.com/supabase/supabase](https://github.com/supabase/supabase)
- **Discord**: [discord.supabase.com](https://discord.supabase.com)

---

**Your Supabase backend is now ready to power Kumar Prescod's boxing website! 🥊** 