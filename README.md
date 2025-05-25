# 💬 Discuss - Where Ideas Come to Life

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=auth0&logoColor=white" alt="NextAuth.js" />
</div>

<div align="center">
  <h3>🚀 A modern discussion platform built with Next.js, featuring GitHub authentication and nested commenting system</h3>
</div>

---

## ✨ Features

### 🔐 **Authentication**
- **GitHub OAuth Integration** - Seamless sign-in with GitHub accounts
- **Session Management** - Secure user sessions with NextAuth.js
- **User Profiles** - Rich user information and avatars

### 💬 **Discussion System**
- **Topic Creation** - Users can create engaging discussion topics
- **Nested Comments** - Multi-level comment threads for deeper conversations
- **Real-time Interactions** - Dynamic commenting and engagement
- **Rich Text Support** - Enhanced posting capabilities

### 🎨 **Beautiful UI/UX**
- **Custom Theme** - Stunning eggplant & purple color palette
- **Responsive Design** - Perfect on desktop, tablet, and mobile
- **Smooth Animations** - Engaging micro-interactions throughout
- **Modern Components** - Built with shadcn/ui components

### 🔍 **Discovery**
- **Search functionality** - Find topics and discussions easily
- **Trending Topics** - Discover what's popular in the community
- **Top Posts** - See the most engaging discussions
- **Community Stats** - Live metrics and member activity

---

## 🎨 Design System

Our beautiful **Eggplant & Purple** theme creates a premium, engaging experience:

```css
/* Color Palette */
--background: #1E1B2E       /* Deep eggplant background */
--text: #EDE9FE            /* Lavender white text */
--accent: #8B5CF6          /* Violet-500 accent */
--comment-bg: #2A2438      /* Comment background */
--borders: #3F3C5B         /* Dividers and borders */
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- GitHub OAuth App (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruv0050/discuss.git
   cd discuss
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   DATABASE_URL=your-database-url
   ```

4. **Database Setup**
   ```bash
   # Run database migrations
   npm run db:migrate
   
   # Seed initial data (optional)
   npm run db:seed
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Visit [http://localhost:3000](http://localhost:3000) to see your app! 🎉

---

## 🏗️ Tech Stack

### **Frontend**
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **Lucide React** - Modern icon system

### **Authentication**
- **NextAuth.js** - Complete authentication solution
- **GitHub Provider** - OAuth integration

### **Backend** (assumed)
- **Prisma** - Database ORM
- **PostgreSQL** - Robust database solution
- **Server Actions** - Next.js server-side functions

---

## 🤝 Contributing

We love contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### **Development Guidelines**
- Follow TypeScript best practices
- Maintain the existing design system
- Add tests for new features
- Update documentation as needed

---
## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Vercel** - For the amazing deployment platform  
- **GitHub** - For authentication and hosting
- **Next.js Team** - For the incredible React framework
- **Tailwind CSS** - For the utility-first CSS framework
