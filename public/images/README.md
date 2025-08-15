# Assets Organization Guide

This folder contains all images and media assets for Mashter's Portfolio project.

## 📁 Folder Structure

```
public/images/
├── thumbnails/          # Thumbnail images for work cards on /works page
├── general/            # General site images (profile, icons, etc.)
└── works/              # Detailed images for individual work pages
    ├── khanflow/       # Khanflow project images
    ├── mlt-gen-ai/     # MLT GEN AI Partner Bot images  
    ├── sim2real/       # Sim2Real Object Detection images
    └── tech-talk/      # Tech-Talk with me workshop images
```

## 🖼️ Image Guidelines

### Thumbnails (`/thumbnails/`)
- **Size**: 600x400px (recommended)
- **Format**: JPG or PNG
- **Purpose**: Grid cards on works page
- **Naming**: `[project-name]-thumb.jpg`

### Work Detail Images (`/works/[project]/`)
- **Screenshots**: App interfaces, dashboards, results
- **Diagrams**: Architecture, workflow, process flows
- **Logos**: Project branding and partner logos
- **Format**: PNG for screenshots, JPG for photos

### General Images (`/general/`)
- Profile photos
- Site icons
- Background images
- General branding assets

## 📋 Current Projects

1. **Khanflow** - AI scheduling platform
2. **MLT GEN AI Partner Bot** - Financial analysis chatbot
3. **Sim2Real Object Detection** - YOLO + synthetic data
4. **Tech-Talk with me** - Healthcare AI workshops

## 🔗 Usage in Code

Images are referenced from the `/public` folder root:

```javascript
// Thumbnails
import thumbKhanflow from '../public/images/thumbnails/khanflow-thumb.jpg'

// Work detail images  
<WorkImage src="/images/works/khanflow/dashboard-screenshot.png" alt="Khanflow Dashboard" />
```

## 📝 Notes

- All images in `/public` are served statically
- Optimize images for web (use tools like TinyPNG)
- Use descriptive file names
- Keep consistent aspect ratios for thumbnails
