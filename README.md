# Mariyam Khatoon — Teacher Portfolio

<p align="center">
  <strong>A refined editorial portfolio website for an educator, designed around clarity, personality, and thoughtful interaction.</strong>
</p>

<p align="center">
  <a href="https://mariyam-portfolio-two.vercel.app/">
    <strong>🌐 Live Website</strong>
  </a>
</p>

---

## Overview

**Mariyam Portfolio** is a modern personal portfolio website created for **Mariyam Khatoon**, an educator and teacher.

The website focuses on presenting an educator's identity, academic background, teaching philosophy, experience, feedback, and contact information through an editorial-inspired visual experience.

Rather than following a conventional portfolio template, the interface uses:

- Large editorial typography
- Minimal monochrome styling
- Maroon visual accents
- Structured grid layouts
- Subtle motion
- Smooth scrolling
- Interactive elements
- Responsive layouts
- Accessible form interactions

The project also includes a backend service for handling contact and feedback submissions.

---

## ✨ Live Website

### Portfolio

🌐 **https://mariyam-portfolio-two.vercel.app/**

The frontend is deployed using **Vercel**.

The backend is deployed separately and provides the API services required for the contact and feedback forms.

---

## 🎯 Project Goals

The main goal of the project was to create a portfolio that feels:

- Personal
- Elegant
- Editorial
- Professional
- Modern
- Easy to navigate
- Responsive across devices

The design intentionally avoids the typical "template portfolio" appearance.

Instead, the experience is built around typography, whitespace, rhythm, grid systems, and restrained motion.

---

## 🖥️ Main Sections

### Home

The landing section introduces Mariyam through a large editorial typographic composition.

It establishes the visual identity of the portfolio immediately using:

- Oversized typography
- Maroon accent color
- Editorial spacing
- Motion-based entrance animations
- Interactive visual elements

---

### About

A dedicated section introducing Mariyam's background, personality, and approach to education.

The layout uses editorial typography and structured content blocks to keep the information easy to scan while maintaining the visual character of the website.

---

### Education

The education section presents academic information using a structured editorial layout.

The focus is on hierarchy and readability rather than a conventional timeline component.

---

### Feedback

The feedback section presents testimonials in a horizontal editorial card layout.

Cards use subtle hover interactions while keeping the overall interface minimal.

---

### Contact

The contact section provides visitors with a direct way to start a conversation.

It includes:

- Name field
- Email field
- Subject field
- Message field
- Form validation
- Backend email delivery

---

## 🎨 Design System

The visual identity is intentionally restrained.

### Color Palette

| Color | Hex | Usage |
|---|---|---|
| Maroon | `#4D0000` | Primary accent |
| Dark Maroon | `#320000` | Dark accent |
| White | `#FFFFFF` | Main surfaces |
| Off White | `#F7F7F5` | Section backgrounds |
| Black | `#0B0B0B` | Strong contrast |
| Ink | `#151515` | Primary typography |
| Gray | `#8A8A8A` | Muted information |
| Dark Gray | `#4B4B4B` | Secondary typography |
| Border | `#DEDEDB` | Editorial rules |

---

## 🧩 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- GSAP
- `@gsap/react`
- Lenis
- Axios
- TanStack React Query

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Resend
- Helmet
- CORS
- Express Rate Limit
- dotenv

### Deployment

- Vercel — Frontend
- Render — Backend

---

## ✨ Motion & Interaction

Motion is used to support the content rather than distract from it.

The frontend uses **GSAP** for:

- Section entrance animations
- Typography reveals
- Scroll-triggered animations
- Staggered content reveals
- Interactive elements

**Lenis** is used to create a smoother scrolling experience.

Animations also respect the user's system preference for reduced motion.

```text
prefers-reduced-motion
        ↓
Reduced animation
        ↓
Content remains immediately visible
