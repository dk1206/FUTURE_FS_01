# Dobbali Karthik - Portfolio

A modern, professional, and highly creative personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Dark/Light Theme Toggle**: Seamless theme switching with local storage persistence
- **Glassmorphism Effects**: Modern glass-like UI components
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Fully responsive across all devices
- **Interactive Elements**: Hover effects, scroll animations, and micro-interactions
- **Modern Typography**: Clean and professional typography
- **SEO Optimized**: Structured for search engines

## Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite

## Sections

1. **Hero**: Animated introduction with CTA buttons
2. **About**: Personal information and contact details
3. **Skills**: Animated progress bars for technical and soft skills
4. **Projects**: Interactive project cards with hover effects
5. **Experience**: Professional experience timeline
6. **Education**: Educational background with timeline
7. **Certifications**: Professional certifications
8. **Contact**: Contact form and information
9. **Footer**: Social links and quick navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── LoadingAnimation.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── copilot-instructions.md
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Customization

### Theme Colors

Update the color palette in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      },
    },
  },
}
```

### Content

Edit the content in the respective component files in `src/components/`.

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Navbar.jsx`

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Dobbali Karthik
- Email: karthikdobbali12@gmail.com
- Phone: +91 91347244903
- LinkedIn: [https://www.linkedin.com/in/karthik-dobbali-7a5b87337](https://www.linkedin.com/in/karthik-dobbali-7a5b87337)