# Addis's Graphics Design Portfolio

A vibrant, creative portfolio website for a graphics designer built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 Creative and vibrant design with gradient themes
- 📱 Fully responsive layout optimized for showcasing visual work
- ⚡ Fast performance with Next.js
- 🎯 Smooth scrolling navigation
- 💼 Portfolio showcase with project categories
- 🛠️ Design tools and skills with progress bars
- 🎪 Services section highlighting design offerings
- 📧 Contact section with design-focused social links (Dribbble, Behance, Instagram)
- 🌟 Creative animations and hover effects
- 🎭 Professional graphics designer branding

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Icons:** Heroicons (SVG)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Personal Information
Update the content in `src/app/page.tsx`:
- Hero section text
- About section description
- Skills and proficiency levels
- Project details and links
- Contact information

### Styling
Modify colors and theme in `tailwind.config.js`:
- Primary and secondary colors
- Typography settings
- Animation timings

### Projects
Add your projects in the `projects` array:
```javascript
{
  title: 'Your Project Name',
  description: 'Project description...',
  tags: ['React', 'Node.js', 'MongoDB'],
  link: 'https://your-project-link.com',
  image: '/path/to/image.jpg'
}
```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

## Project Structure

```
addis-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       └── Navigation.tsx
├── public/
├── tailwind.config.js
├── next.config.js
└── package.json
```

## License

This project is open source and available under the [MIT License](LICENSE).
