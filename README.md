# GDSC Website

<div align="center">
  <img src="public/GDG_Logo.png" alt="GDSC Logo" width="200"/>
  
  A modern, responsive website for Google Developer Groups On Campus KARE built with React and Emotion.
</div>

## ✨ Features

- 🌓 Dark/Light theme support
- 🎨 Google's Material Design principles
- 📱 Fully responsive design
- 🚀 Smooth animations with Framer Motion
- 🎯 Interactive feature cards and team profiles
- 📝 Dynamic form handling
- 🖼️ Image carousel with fallback support

## 🛠️ Tech Stack

- React
- Emotion (Styled Components)
- Framer Motion
- Tailwind CSS
- Google Sans Font

## 🎨 Design System

The website follows Google's color palette and design principles:

### Colors
- Primary Blues: `#4285F4`, `#174EA6`
- Reds: `#EA4335`, `#A50E0E`
- Yellows: `#FBBC04`
- Greens: `#34A853`, `#0D652D`

### Typography
- Google Sans font for all text
- Responsive sizing
- Gradient text effects

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/gdsc-website.git
```

2. Install dependencies:
```bash
cd gdsc-website
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 480px
- Tablet: < 768px
- Desktop: > 768px

## 🌓 Theme Support

The website supports both light and dark themes with automatic system preference detection. Theme colors are managed through CSS variables for easy customization.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Developer Student Clubs
- Google Developer Groups
- React Community
- Framer Motion
- Emotion Team
```

This README is based on the codebase structure seen in:

```7:74:src/index.css
:root {
  /* Rainbow Button Colors */
  --color-1: 0 100% 63%;
  --color-2: 270 100% 63%;
  --color-3: 210 100% 63%;
  --color-4: 195 100% 63%;
  --color-5: 90 100% 63%;
  /* Google Colors */
  --blue: #174EA6;
  --red: #A50E0E;
  --orange: #E37400;
  --green: #0D652D;
  --medium-blue: #4285F4;
  --medium-red: #EA4335;
  --yellow: #FBBC04;
  --medium-green: #34A853;
  --light-blue: #D2E3FC;
  --light-red: #FAD2CF;
  --light-yellow: #FEEFC3;
  --light-green: #CEEAD6;
  --light-grey: #F1F3F4;
  --grey: #9AA0A6;
  --black: #202124;

  /* Light mode colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #202124;
  --text-secondary: #5f6368;
  --card-bg: #ffffff;
  --border-color: rgba(0,0,0,0.1);

  /* Dark mode colors */
  --bg-primary-dark: #202124;
  --bg-secondary-dark: #303134;
  --text-primary-dark: #e8eaed;
  --text-secondary-dark: #9aa0a6;
  --card-bg-dark: #303134;
  --border-color-dark: rgba(255,255,255,0.1);



  /* Theme Colors - Light */
  --primary: #4285F4;
  --primary-foreground: #FFFFFF;
  --secondary: #EA4335;
  --secondary-foreground: #FFFFFF;
  --background: #FFFFFF;
  --background-foreground: #202124;
  --muted: #F8F9FA;
  --muted-foreground: #5F6368;
  --accent: #FBBC04;
  --accent-foreground: #202124;
}

.dark {
  /* Theme Colors - Dark */
  --primary: #8AB4F8;
  --primary-foreground: #202124;
  --secondary: #F28B82;
  --secondary-foreground: #202124;
  --background: #202124;
  --background-foreground: #FFFFFF;
  --muted: #303134;
  --muted-foreground: #9AA0A6;
  --accent: #FDD663;
  --accent-foreground: #202124;
}
```



```1:48:src/components/Features.jsx
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { RetroGrid } from './RetroGrid';
import { useState, useEffect } from 'react';
import NotFoundImage from '../assets/not-found.svg';

const FeaturesSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  
  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  font-weight: 600;

  body.dark & {
    background: linear-gradient(135deg, var(--light-blue), var(--medium-blue));
    -webkit-background-clip: text;
    background-clip: text;
  }
  body:not(.dark) & {
    background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));
    -webkit-background-clip: text;
    background-clip: text;
  }
`;
```



```8:55:tailwind.config.js
  theme: {
    extend: {
      colors: {
        // Google Colors
        'blue': '#4285F4',
        'red': '#EA4335',
        'yellow': '#FBBC04',
        'green': '#34A853',
        'medium-blue': '#1967D2',
        'medium-red': '#D93025',
        'medium-yellow': '#F9AB00',
        'medium-green': '#1E8E3E',
        'light-blue': '#4285F4',
        'light-red': '#EA4335',
        'light-yellow': '#FBBC04',
        'light-green': '#34A853',
        'light-grey': '#F8F9FA',
        'grey': '#202124',
        'black': '#000000',

        // Rainbow Button Colors
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",

        // Theme Colors
        'primary': {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        'secondary': {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        'background': {
          DEFAULT: 'var(--background)',
          foreground: 'var(--background-foreground)',
        },
        'muted': {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        'accent': {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
```