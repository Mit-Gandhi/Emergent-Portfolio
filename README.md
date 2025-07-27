# Portfolio Website

A modern, responsive portfolio website built with React, featuring:

## Features
- **Interactive Design**: Custom cursor, smooth animations, and dynamic loading screens
- **Contact Form**: EmailJS integration for direct messaging
- **Project Timeline**: Animated project showcase with smooth scrolling
- **Content Protection**: Silent content protection to prevent unauthorized copying
- **Responsive Design**: Optimized for all device sizes

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Build Tool**: Create React App with CRACO

## Getting Started

### Prerequisites
- Node.js 16+ and Yarn

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production
```bash
yarn build
```

## Project Structure
```
frontend/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   ├── pages/       # Page components
│   ├── utils/       # Utility functions
│   └── styles/      # CSS files
└── package.json
```

## Contact Form Setup
The contact form uses EmailJS for email functionality. To set up:
1. Create an EmailJS account
2. Configure your email service and template
3. Update the service ID and template ID in `src/pages/Contact.js`

## Features Included
- **Home**: Interactive robot display with welcome message
- **About**: Personal information and experience timeline
- **Projects**: Animated project showcase with GitHub links
- **Contact**: Functional contact form with EmailJS integration

This is a frontend-only application with no backend dependencies.
