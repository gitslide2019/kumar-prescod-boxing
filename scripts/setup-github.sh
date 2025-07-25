#!/bin/bash

# Kumar Prescod Boxing - GitHub Setup Script

echo "🥊 Setting up Kumar Prescod Boxing Website for GitHub..."

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory."
    exit 1
fi

# Get GitHub username
echo "📝 Enter your GitHub username:"
read github_username

# Get repository name
echo "📝 Enter repository name (default: kumar-prescod-boxing):"
read repo_name
repo_name=${repo_name:-kumar-prescod-boxing}

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin "https://github.com/$github_username/$repo_name.git"
else
    echo "🔗 Adding remote origin..."
    git remote add origin "https://github.com/$github_username/$repo_name.git"
fi

# Rename branch to main
echo "🔄 Renaming branch to main..."
git branch -M main

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/$github_username/$repo_name"
echo "2. Click 'Settings' tab"
echo "3. Scroll to 'Pages' section"
echo "4. Select 'Deploy from a branch'"
echo "5. Choose 'main' branch and '/ (root)' folder"
echo "6. Click 'Save'"
echo ""
echo "🌐 Your site will be available at:"
echo "https://$github_username.github.io/$repo_name"
echo ""
echo "💡 For better deployment, consider using Vercel or Netlify!"
echo "   Check DEPLOYMENT.md for detailed instructions." 