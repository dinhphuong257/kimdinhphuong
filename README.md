# Amélie Laurent - Designer Portfolio

A fully functional portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features dynamic data models, route-based navigation, project filtering, and a working contact form.

## Features

- **Dynamic Data Models** - Profile, experience, and projects data stored in TypeScript files
- **Route-based Navigation** - Overview, Projects, About, and Contact pages with active state highlighting
- **Project Filtering** - Filter projects by tags with debounced search
- **Project Detail Pages** - Case study pages with Problem/Process/Solution/Outcome sections
- **Contact Form** - Full validation with API route (placeholder for email service)
- **Video Call Modal** - Calendly/Zoom integration placeholder
- **Responsive Design** - Mobile hamburger menu, desktop sidebar
- **Accessibility** - Semantic HTML, ARIA attributes, keyboard navigation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd designer-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home/Overview page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── contact/
│   │   └── page.tsx       # Contact page
│   ├── projects/
│   │   ├── page.tsx       # Projects list with filters
│   │   └── [id]/
│   │       └── page.tsx   # Project detail page
│   └── api/
│       └── contact/
│           └── route.ts   # Contact form API endpoint
├── components/            # React components
│   ├── LayoutShell.tsx    # Shared layout wrapper
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── TopShell.tsx       # Top browser bar UI
│   ├── ProfileHeader.tsx  # Profile hero section
│   ├── AboutSection.tsx   # Bio and details section
│   ├── ExperienceCards.tsx# Experience cards
│   ├── RecentWorkGrid.tsx # Featured projects grid
│   ├── ProjectCard.tsx    # Project card component
│   ├── ProjectFilters.tsx # Tag filters and search
│   ├── ContactForm.tsx    # Contact form with validation
│   ├── VideoCallModal.tsx # Video call scheduling modal
│   └── Toast.tsx          # Toast notifications
└── data/                  # Data models
    ├── profile.ts         # Profile data (name, bio, skills, etc.)
    ├── experience.ts      # Work experience data
    └── projects.ts        # Portfolio projects data
```

## Customization

### Edit Profile Data

Update `src/data/profile.ts`:

```typescript
export const profileData: ProfileData = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline...",
  location: {
    city: "Your City",
    country: "Your Country",
    countryCode: "us", // ISO 3166-1 alpha-2 code
  },
  avatar: "https://your-avatar-url.jpg",
  email: "your@email.com",
  // ... more fields
};
```

### Edit Experience Data

Update `src/data/experience.ts`:

```typescript
export const experiences: ExperienceItem[] = [
  {
    id: "company-id",
    company: "Company Name",
    role: "Your Role",
    startDate: "Jan 2020",
    endDate: null, // null for current position
    location: "City, Country",
    description: "What you did...",
    highlights: ["Achievement 1", "Achievement 2"],
    tags: ["Skill 1", "Skill 2"],
    logoColor: "bg-blue-600",
    website: "https://company.com",
  },
  // ... more experiences
];
```

### Edit Projects Data

Update `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "project-slug",
    title: "Project Title",
    summary: "Brief description...",
    role: "Your Role",
    year: 2024,
    thumbnail: "", // Optional: image URL
    thumbnailGradient: "bg-gradient-to-br from-blue-100 to-cyan-100",
    tags: ["Product Design", "UI Design"],
    featured: true, // Show on homepage
    problem: "The problem you solved...",
    process: "Your design process...",
    solution: "What you created...",
    outcome: "The results achieved...",
    images: [], // Optional: gallery images
  },
  // ... more projects
];
```

### Available Project Tags

Tags are defined in `src/data/projects.ts`:

- Product Design
- UI Design
- UX Research
- Webflow Dev
- Brand Identity
- Design Systems
- Mobile App
- Dashboard

## Email Service Integration

The contact form uses a placeholder email function. To integrate a real email service:

### Option 1: Resend

```bash
npm install resend
```

Update `src/app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(data: ContactFormData): Promise<boolean> {
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'your@email.com',
    subject: `New inquiry from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Project Type:</strong> ${data.projectType}</p>
      <p><strong>Budget:</strong> ${data.budgetRange || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  });
  return true;
}
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

Update the API route similarly with SendGrid's API.

### Environment Variables

Create `.env.local`:

```env
RESEND_API_KEY=re_xxxxxxxxxxxx
# or
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Pattern**: Untitled UI style
- **Icons**: Inline SVG

## License

This project is for educational/portfolio purposes. Feel free to customize for your own use.
