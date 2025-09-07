# Trevor Kunz - AI/Data Science Portfolio

A modern, responsive portfolio website built with Next.js 14, showcasing AI and data science projects with interactive animations and a sleek dark theme.

## 🚀 Features

- **Modern Design**: Dark theme with blue/purple gradient accents
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth transitions using Framer Motion
- **Performance Optimized**: Built with Next.js 14 and Tailwind CSS
- **SEO Friendly**: Comprehensive metadata and semantic HTML
- **Accessible**: Proper contrast ratios and keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (planned)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/tskunz/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── ProjectCard.tsx   # Individual project cards
│   ├── Skills.tsx        # Skills/tech stack section
│   └── Footer.tsx        # Footer with contact info
├── lib/
│   └── data.ts           # Project data and personal info
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Background**: Dark gradient from slate-950 to slate-900
- **Primary**: Blue (#0ea5e9) to Purple (#a855f7) gradients
- **Text**: Various shades of slate for hierarchy
- **Accents**: Cyan and violet for highlights

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable slate colors
- **Code**: Monospace font for technical content

### Components
- **Cards**: Glass morphism effect with backdrop blur
- **Buttons**: Gradient backgrounds with hover effects
- **Icons**: Lucide React icons with consistent styling

## 📱 Sections

1. **Hero**: Introduction with animated background elements
2. **About**: Personal story, education, and interests
3. **Projects**: Featured AI/ML projects with live demos
4. **Skills**: Technical capabilities organized by category
5. **Footer**: Contact information and social links

## 🔧 Customization

### Updating Personal Information
Edit `/lib/data.ts` to update:
- Personal details
- Project information
- Skills and technologies
- Social media links

### Adding New Projects
Add project objects to the `projects` array in `/lib/data.ts`:

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  status: "In Development" | "Planning" | "Research" | "Complete",
  description: "Brief description",
  techStack: ["Technology", "Stack"],
  features: ["Feature 1", "Feature 2"],
  demoUrl: "https://demo.com",
  githubUrl: "https://github.com/user/repo",
  category: "AI/ML" | "Data Science" | "Web Development" | "Research"
}
```

### Modifying Styles
- Global styles: `/app/globals.css`
- Tailwind config: `/tailwind.config.ts`
- Component-specific styles: Within each component file

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: tkunz@smu.edu
- **GitHub**: [tskunz](https://github.com/tskunz)
- **LinkedIn**: [trevor-kunz](https://linkedin.com/in/trevor-kunz)

---

Built with ❤️ using Next.js and modern web technologies.
