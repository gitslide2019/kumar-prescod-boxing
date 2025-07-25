# Deployment Guide - Kumar Prescod Boxing Website

## 🚀 GitHub Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name: `kumar-prescod-boxing`
4. Description: `Professional boxing website for Kumar Prescod`
5. Make it **Private** (recommended for business websites)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Push to GitHub

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kumar-prescod-boxing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. GitHub Pages Deployment

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"

**Note**: For React apps, you'll need to build the project first and deploy the `dist` folder.

## 🌐 Alternative Deployment Options

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

3. Or connect your GitHub repository for automatic deployments

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Initialize Firebase:
```bash
firebase login
firebase init hosting
```

3. Build and deploy:
```bash
npm run build
firebase deploy
```

## 🔧 Environment Variables

Create a `.env` file for production:

```env
# YouTube API Key (if needed for video features)
VITE_YOUTUBE_API_KEY=your_youtube_api_key

# Stripe Keys (for payments)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
VITE_STRIPE_SECRET_KEY=sk_test_...

# PayPal Configuration
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

## 📝 Pre-deployment Checklist

- [ ] Test all features locally
- [ ] Check responsive design on mobile/tablet
- [ ] Verify all links work correctly
- [ ] Test payment integrations
- [ ] Check video loading and performance
- [ ] Validate forms and user interactions
- [ ] Test AI chat assistant
- [ ] Verify image loading and optimization

## 🎯 Custom Domain Setup

### GitHub Pages
1. In repository Settings > Pages
2. Add custom domain in "Custom domain" field
3. Add CNAME record pointing to `YOUR_USERNAME.github.io`

### Vercel
1. Go to project dashboard
2. Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## 🔒 Security Considerations

- Keep API keys secure in environment variables
- Use HTTPS for all production deployments
- Regularly update dependencies
- Monitor for security vulnerabilities
- Backup data regularly

## 📊 Analytics Setup

Consider adding analytics to track website performance:

### Google Analytics
```html
<!-- Add to index.html head section -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

## 🚨 Troubleshooting

### Common Issues

1. **Build fails**: Check for TypeScript errors
2. **Images not loading**: Verify image paths and CORS settings
3. **Videos not playing**: Check YouTube API quotas
4. **Payments not working**: Verify Stripe/PayPal configuration

### Performance Optimization

1. Optimize images (use WebP format)
2. Enable gzip compression
3. Use CDN for static assets
4. Implement lazy loading for images/videos
5. Minify CSS/JS in production

---

**Need help?** Check the project README or create an issue in the repository. 