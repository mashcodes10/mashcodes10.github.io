# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages with automatic deployment via GitHub Actions.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Node.js 18+ installed

## 🛠️ Local Testing (Complete)

✅ **All tests have been successfully completed:**

### 1. Build Tests
```bash
npm run build  # ✅ Passed - Static export successful
npm run lint   # ✅ Passed - No linting errors  
```

### 2. Static Export Test
```bash
# ✅ All pages exported as static HTML:
# - / (homepage)
# - /works (projects page)
# - /posts (radar page) 
# - /campus (campus involvement)
# - /contact (contact page)
# - /works/* (all individual project pages)
```

### 3. File Structure Verification
```bash
out/               # ✅ Static files generated
├── index.html     # ✅ Homepage
├── works/         # ✅ Projects
├── posts/         # ✅ Radar  
├── campus/        # ✅ Campus
├── contact/       # ✅ Contact
├── images/        # ✅ All assets
├── _next/         # ✅ Next.js chunks
└── .nojekyll      # ✅ GitHub Pages config
```

## 🚀 GitHub Deployment Steps

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. **Repository name**: `mashcodes10.github.io` (IMPORTANT: This exact format for personal site)
3. **Visibility**: Public (required for GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license

### Step 2: Initialize Local Git Repository

```bash
# In your project directory (/Users/md.mashiurrahmankhan/Downloads/craftzdog-homepage)
git init
git add .
git commit -m "Initial commit: Complete portfolio setup"
```

### Step 3: Connect to GitHub Repository

```bash
# Personal GitHub Pages repository
git remote add origin https://github.com/mashcodes10/mashcodes10.github.io.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push to main

### Step 5: Configure Repository Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

### Step 6: Enable GitHub Pages with Actions

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save the settings

**Important**: The updated workflow includes proper permissions configuration to avoid deployment errors.

## 🔄 GitHub Actions Workflow

The `.github/workflows/deploy.yml` file will automatically:

1. **Trigger on**: Push to main branch
2. **Install dependencies**: `npm ci`
3. **Run tests**: `npm run lint` and `npm run build`
4. **Build static site**: Generate `/out` directory
5. **Deploy**: Push to `gh-pages` branch
6. **Serve**: GitHub Pages serves from `gh-pages` branch

## 🌐 Your Live Portfolio

After deployment (usually 2-5 minutes), your portfolio will be available at:

```
https://mashcodes10.github.io/
```

**Format**: `https://[username].github.io/` (Personal GitHub Pages site)

## 🔧 Future Updates

To update your portfolio:

```bash
# Make your changes
git add .
git commit -m "Update: Description of changes"
git push origin main
```

The GitHub Action will automatically rebuild and redeploy your site!

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at your GitHub Pages URL
- [ ] All pages are accessible (Home, Works, Radar, Campus, Contact)
- [ ] All project pages work correctly
- [ ] Images load properly
- [ ] Dark/light mode toggle works
- [ ] All links function correctly
- [ ] Mobile responsiveness works

## 🐛 Troubleshooting

### Permission Denied Error (403)
If you see `Permission to [repo] denied to github-actions[bot]`:

1. **Check Repository Settings**:
   - Go to **Settings** → **Actions** → **General**
   - Set **Workflow permissions** to **Read and write permissions**
   - Enable **Allow GitHub Actions to create and approve pull requests**

2. **Verify Pages Configuration**:
   - Go to **Settings** → **Pages**
   - Ensure **Source** is set to **GitHub Actions**

3. **Check Workflow Permissions**:
   - Ensure your workflow file includes proper permissions:
   ```yaml
   permissions:
     contents: read
     pages: write
     id-token: write
   ```

### Build Fails
- Check GitHub Actions tab for error details
- Ensure all dependencies are in `package.json`
- Verify no syntax errors locally

### Images Not Loading
- Check image paths are relative (starting with `/`)
- Ensure all images are in the repository
- Verify `.nojekyll` file exists in output

### 404 Errors
- Wait 5-10 minutes after first deployment
- Check repository settings → Pages is enabled
- Verify GitHub Actions completed successfully

## 📞 Support

If you encounter any issues:
1. Check the GitHub Actions logs
2. Ensure repository is public
3. Verify GitHub Pages is enabled
4. Check file paths and image references

---

**Ready to deploy!** 🚀 Your portfolio is fully configured and tested for GitHub Pages deployment.
