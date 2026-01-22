# Concrete Landing Page

A modern, responsive landing page for a concrete services company built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading times and optimized for SEO
- **Interactive Components**: Smooth scrolling, animations, and interactive forms
- **Accessible**: Following WCAG guidelines for accessibility

## Sections

1. **Hero Section**: Eye-catching hero with call-to-action buttons
2. **Features**: Showcase of services and company benefits
3. **Testimonials**: Customer reviews and social proof
4. **Contact Form**: Interactive form for customer inquiries
5. **Footer**: Company information and quick links

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (React framework)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/seaninsd94/Concrete-Landing.git
cd Concrete-Landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
Concrete-Landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Hero.tsx         # Hero section with navigation
│       ├── Features.tsx     # Features and services section
│       ├── Testimonials.tsx # Customer testimonials
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer component
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── CLAUDE.md              # AI assistant guide
└── README.md              # This file
```

## Customization

### Changing Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize your primary colors here
      },
    },
  },
}
```

### Updating Content

- **Hero Section**: Edit `src/components/Hero.tsx`
- **Features**: Modify the `features` array in `src/components/Features.tsx`
- **Testimonials**: Update the `testimonials` array in `src/components/Testimonials.tsx`
- **Contact Info**: Edit contact details in `src/components/Contact.tsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation links if needed

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

- **Netlify**: Configure build command as `npm run build` and publish directory as `.next`
- **AWS/Azure/GCP**: Use Docker or build and deploy the `.next` folder

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Performance

This landing page is optimized for performance:

- Server-side rendering with Next.js
- Optimized images and fonts
- Minimal JavaScript bundle size
- Lazy loading for images
- CSS optimization with Tailwind

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, please contact:
- Email: info@concrete.com
- Phone: (123) 456-7890

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

**Note**: This is a template project. Customize the content, colors, and images to match your brand.
