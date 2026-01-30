# 🚀 Deployment Guide - GitHub Pages

## Prerequisites
- GitHub account (tonnygol)
- Git installed on your computer

## Step-by-Step Deployment Instructions

### 1. Initialize Git Repository
```bash
cd c:\Users\Tonny\Desktop\portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Keep it **Public**
4. **DO NOT** initialize with README (you already have code)
5. Click "Create repository"

### 3. Push Code to GitHub
```bash
git branch -M main
git remote add origin https://github.com/tonnygol/portfolio.git
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository: https://github.com/tonnygol/portfolio
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. Save (if needed)

### 5. Trigger Deployment
The GitHub Actions workflow will automatically run when you push code.

Check deployment status:
- Go to **Actions** tab in your repository
- You should see "Deploy to GitHub Pages" workflow running
- Wait for it to complete (green checkmark)

### 6. Access Your Live Site! 🎉
Your portfolio will be live at:
```
https://tonnygol.github.io/portfolio/
```

## Future Updates

To update your portfolio:
```bash
# Make your changes, then:
git add .
git commit -m "Update portfolio"
git push
```

The site will automatically redeploy within 1-2 minutes!

## Troubleshooting

**If the site doesn't load:**
1. Check Actions tab for any errors
2. Verify GitHub Pages is enabled in Settings > Pages
3. Make sure the workflow completed successfully
4. Wait a few minutes - deployment can take 2-5 minutes

**If you see a 404 error:**
- Make sure you're accessing `/portfolio/` (with the slash at the end)
- Check that `base: '/portfolio/'` is in vite.config.js

## Custom Domain (Optional)

To use a custom domain like `tonnygolubitsky.com`:
1. Buy the domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your domain's DNS settings, add a CNAME record pointing to `tonnygol.github.io`
3. In GitHub Settings > Pages, add your custom domain
4. Wait for DNS propagation (24-48 hours)
