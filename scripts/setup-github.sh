#!/bin/bash

# Kumar Prescod Boxing - GitHub Setup Script
echo "🥊 Setting up Kumar Prescod Boxing GitHub repository..."

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Please install it first: https://cli.github.com/"
    echo ""
    echo "Alternatively, you can:"
    echo "1. Go to https://github.com/new"
    echo "2. Create a new repository named 'kumar-prescod-boxing'"
    echo "3. Run: git remote add origin https://github.com/YOUR_USERNAME/kumar-prescod-boxing.git"
    echo "4. Run: git push -u origin main"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ You are not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

# Get current username
USERNAME=$(gh api user --jq .login)
echo "✅ Authenticated as: $USERNAME"

# Create the repository
echo "📦 Creating repository: kumar-prescod-boxing"
gh repo create kumar-prescod-boxing \
    --public \
    --description "Professional boxing website for Kumar Prescod - 9x National Champion from Oakland, CA" \
    --homepage "https://$USERNAME.github.io/kumar-prescod-boxing" \
    --source=. \
    --remote=origin \
    --push

if [ $? -eq 0 ]; then
    echo "✅ Repository created successfully!"
    echo "🌐 View your repository at: https://github.com/$USERNAME/kumar-prescod-boxing"
    echo ""
    echo "🚀 Next steps:"
    echo "1. Set up GitHub Pages (if desired):"
    echo "   - Go to Settings > Pages"
    echo "   - Source: Deploy from a branch"
    echo "   - Branch: main, folder: / (root)"
    echo ""
    echo "2. Set up environment variables:"
    echo "   - Go to Settings > Secrets and variables > Actions"
    echo "   - Add your Supabase keys and other environment variables"
    echo ""
    echo "3. Deploy to Vercel/Netlify:"
    echo "   - Connect your GitHub repository"
    echo "   - Set build command: npm run build"
    echo "   - Set output directory: dist"
else
    echo "❌ Failed to create repository."
    echo "Please create it manually at: https://github.com/new"
fi 