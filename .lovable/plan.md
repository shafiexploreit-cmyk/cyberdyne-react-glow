

# Cyberdyne Technology Ltd — Modern React Redesign

## Overview
A fully modernized, responsive React website for Cyberdyne Technology Ltd with a clean admin panel to manage all content dynamically. The site will use the same content/structure as the original but with a fresh, professional design.

---

## Phase 1: Public Website Pages

### 1. Homepage
- Modern hero section with an auto-sliding carousel showcasing key products (DigiEdu, DigiShop, O'Muhuri, etc.)
- "Welcome to Cyberdyne Technology LTD" intro section with company description
- Top contact bar with phone numbers, email, and social media links
- Scrolling "At a glance" marquee banner
- Services overview grid with cards for each product
- Client testimonials carousel
- Footer with contact info, quick links, and social icons

### 2. Company Page
- About the company section with mission/vision
- Team or company history highlights
- Key stats (7+ years experience, 200+ clients, etc.)

### 3. Services Page
- Grid/list of all services: DigiEdu, DigiShop, O'Muhuri, DigiFAS, O'Doctors, BDVROMON, HRM
- Each service card with image, description, and "View Details" link
- Individual service detail pages with full descriptions

### 4. Clients Page
- Client logos/names display
- Featured testimonials with photos and designations

### 5. Contact Page
- Contact form (name, email, subject, message) that stores submissions in the database
- Office address, phone numbers, email displayed
- Embedded Google Map (optional)

### 6. Demo Links Page
- Links to product demos organized in a clean layout

---

## Phase 2: Backend & Admin Panel

### 7. Authentication
- Admin login page with email/password
- Role-based access (admin role)

### 8. Admin Dashboard
- Overview with stats (number of services, clients, messages)
- Manage **Hero Slides** — add/edit/delete carousel items (image, title, description)
- Manage **Services** — CRUD for services with image upload, title, description
- Manage **Testimonials** — CRUD for client reviews with photo, name, title, quote
- Manage **Contact Submissions** — view and manage messages from the contact form
- Manage **Demo Links** — add/edit/delete demo product links
- Manage **Company Info** — edit about text, contact details, social links

### 9. Database Tables
- `hero_slides` — carousel content
- `services` — service/product listings
- `testimonials` — client reviews
- `contact_submissions` — contact form entries
- `demo_links` — product demo URLs
- `company_info` — editable company details
- `user_roles` — admin role management

### 10. File Storage
- Image uploads for hero slides, services, and testimonials via Supabase Storage

---

## Design Direction
- Clean, modern UI with a professional color palette (navy blue/dark tones with warm accents inspired by the original branding)
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Card-based layouts for services and testimonials
- Modern typography with clear hierarchy

