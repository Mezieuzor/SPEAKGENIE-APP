🚀 🚀 🚀SPEAKGENIE APPLICATION🚀 🚀 🚀 


Language Learning App - Home Screen
A modern, interactive language learning application built with Next.js, featuring gamification elements, peer practice, AI conversations, and audio stories.
🚀 How to Run This Project
Prerequisites

Node.js 18.x or higher
pnpm package manager

Installation & Setup

Clone the repository

bashgit clone <repository-url>
cd <project-directory>

Install dependencies

bashnpm install
# or
yarn install
# or
pnpm install

Run the development server

bashnpm run dev
# or
yarn dev
# or
pnpm dev

Open in browser
Navigate to http://localhost:3000

Build for Production
bashnpm run build
npm start
<img width="863" height="801" alt="Screenshot 2025-12-14 4 32 04 PM" src="https://github.com/user-attachments/assets/8cd36dc2-5dbc-4704-bea0-49713b9d910c" />
<img width="863" height="378" alt="Screenshot 2025-12-14 4 32 21 PM" src="https://github.com/user-attachments/assets/022ce571-ed3b-4166-8e74-926300ef60fb" />

🎯 Key Features

🔧 Assumptions Made
Technical Assumptions

Next.js 13+ with App Router: Uses the modern App Router architecture
TypeScript: Entire codebase uses TypeScript for type safety
Tailwind CSS: All styling uses Tailwind utility classes
shadcn/ui: UI components built with shadcn/ui library
Client Components: Interactive components use "use client" directive

Data Assumptions

Static Images: All images are stored in the /public folder
Mock Data: Audio stories, practice sessions, and AI characters use hardcoded data
XP Calculation: XP progress (80/300) and total XP (242) are static values
User Level: Current level (L3) and next level (L4) are hardcoded

Feature Assumptions

Authentication: No authentication system implemented (displays "Lorenzo" by default)
API Integration: No backend API calls (ready for integration)
Dark Mode: Toggle only changes icon state (actual theme switching not implemented)
Routing: Uses Next.js Link components for navigation (routes must exist)
Responsive Design: Optimized primarily for mobile/tablet viewports


🎨 Styling & Design

Color Scheme:

Primary: Green (#22c55e)
Secondary: Blue, Orange, Purple accents
Background: Light gray (#f9fafb)


Typography: Default Next.js font stack with custom sizing
Icons: Lucide React icon library
Animations: Smooth transitions on hover and interactions

🔮 Future Enhancements

Authentication: Implement user login/signup
Backend Integration: Connect to API for dynamic data
Dark Mode: Full theme implementation
Real-time Features: WebRTC for peer calls
Progress Persistence: Save user progress to database
Audio Player: Functional audio story playback
Gamification: Achievement system, leaderboards
Localization: Multi-language support

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
