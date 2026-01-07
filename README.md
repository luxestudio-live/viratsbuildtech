# Virats BuildTech

A professional architecture and interior design firm website built with Next.js, showcasing our portfolio, services, and expertise.

## 🚀 Features

- **Modern Design**: Clean, professional interface with responsive design
- **Service Showcase**: Detailed architecture and interior design services
- **Project Portfolio**: Comprehensive gallery of completed projects
- **Team Profiles**: Meet our experienced team of architects and designers
- **Client Reviews**: Testimonials from satisfied clients
- **Contact Forms**: Easy-to-use contact and inquiry forms
- **Career Opportunities**: Current job openings and application portal

## 🛠️ Technology Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: GitHub Pages

## 📦 Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/luxestudio-live/viratsbuildtech.git
cd viratsbuildtech
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

To create a production build:

```bash
pnpm build
```

The static files will be generated in the `out` directory.

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Manual Deployment Steps

1. Ensure GitHub Pages is enabled in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

2. Push your code to the main branch:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. The GitHub Actions workflow will automatically build and deploy your site.

## 📁 Project Structure

```
viratsbuildtech/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── careers/           # Careers section
│   ├── contact/           # Contact page
│   ├── projects/          # Project portfolio
│   ├── services/          # Services page
│   ├── team/              # Team profiles
│   └── reviews/           # Client reviews
├── components/            # Reusable components
│   ├── ui/               # UI component library
│   ├── footer.tsx        # Footer component
│   └── navigation.tsx    # Navigation component
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## 📝 License

© 2025 Virats BuildTech. All rights reserved.

## 📧 Contact

- Email: hello@viratsbuildtech.com
- Phone: +91 98765 43210
- Address: Bandra-Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India

---

Built with ❤️ by Virats BuildTech
