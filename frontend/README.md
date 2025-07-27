# Portfolio Website - Frontend Only

A modern, responsive portfolio website built with React, featuring:

- ✨ Custom cursor with smooth trailing animation
- 🎨 Beautiful UI with green theme
- 🛡️ Content protection (prevents copying)
- 📱 Fully responsive design
- 🖼️ Image optimization
- ⚡ Smooth animations with Framer Motion
- 🎯 Interactive timeline for projects
- 📧 Email contact form (EmailJS)

## Features

### 🎯 Custom Cursor
- Small solid green circle with white center dot
- Larger semi-transparent trailing ring
- Smooth animation using requestAnimationFrame and lerping
- Responsive hover and click effects

### 🛡️ Content Protection
- Silent prevention of text selection
- Disabled right-click context menu
- Blocked keyboard shortcuts (Ctrl+C, Ctrl+A, F12, etc.)
- Image drag protection
- Developer tools detection

### 🎨 Modern Design
- Clean, professional layout
- Green color scheme (#10b981)
- Smooth page transitions
- Loading animations
- Custom scrollbar

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. **Clone or download the project**
2. **Navigate to the frontend directory**
3. **Install dependencies**
4. **Add your images**
5. **Start the development server**

See detailed instructions below.

## Tech Stack

- **React 19** - UI Framework
- **Framer Motion** - Animations
- **React Router** - Navigation
- **EmailJS** - Contact form
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **Lucide React** - Icons

## Project Structure

```
frontend/
├── public/
│   ├── images/           # Your images go here
│   ├── index.html
│   └── ...
├── src/
│   ├── components/       # Reuseable components
│   ├── pages/           # Page components
│   ├── utils/           # Utility functions
│   └── ...
├── package.json
└── README.md
```

## Customization

### Adding Your Images
Place these files in `public/images/`:
- `robot.png` - Robot image for homepage
- `mit.jpg` - Your profile photo
- `icon.png` - Website favicon
- `banner1.jpg` - Project banner

### Updating Content
- **Personal Info**: Edit `src/pages/About.js`
- **Projects**: Edit `src/pages/Projects.js`
- **Contact**: Update EmailJS config in `src/pages/Contact.js`

### Color Theme
The website uses a green theme. To change colors, update CSS variables in `src/index.css`.

## Deployment

### Build for Production
```bash
yarn build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload the `build` folder

## License

This project is for personal portfolio use.
