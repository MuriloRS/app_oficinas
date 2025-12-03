# MechSearch

**MechSearch** is a modern web platform designed to connect customers with auto repair shops and certified automotive professionals. The application allows users to find, filter, and contact mechanics quickly and efficiently, simplifying the search process for automotive services.

## 📋 About the Product

MechSearch is a complete solution that provides an intuitive experience for finding nearby auto repair shops. The platform connects customers with automotive professionals through a modern and responsive interface, enabling advanced search, detailed profile viewing, and direct contact with shops.

### Key Benefits

- **Local Networking**: Find mechanics in your area with detailed location and contact information
- **Transparent Pricing**: Compare prices and request quotes from multiple mechanics before deciding
- **Easy Scheduling**: Schedule online consultations and manage your service history in one place

## 🏗️ Architecture

The application was developed following a modern and scalable architecture, utilizing best practices from the React and Next.js ecosystem.

### Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI Library**: React 19.2.0
- **Styling**: TailwindCSS 4 + CSS Modules
- **Backend/Database**: Supabase (PostgreSQL)
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod
- **UI Components**: Radix UI + Shadcn/ui
- **Maps**: Google Maps JavaScript API
- **Build Tool**: Turbopack

### Architectural Patterns

- **Feature-Based Structure**: Organization by features instead of file types
- **Server Components**: Use of Next.js Server Components when possible
- **Client Components**: Interactive components marked with `"use client"`
- **Custom Hooks**: Reusable logic extracted into custom hooks
- **Type Safety**: TypeScript throughout the application with well-defined types

## 🚀 Key Features

### 🔍 Advanced Filter System

MechSearch offers a robust filter system that allows users to find exactly what they're looking for. Filters are implemented with a flexible architecture that supports multiple operators and conditions.

1. **Text Search**

   - Search across multiple fields simultaneously (name, address, description, shop type)
   - Operator: `text_search` with case-insensitive search
   - Partial search in any part of the text

2. **Rating Filter**

   - Filter by minimum rating (e.g., only shops with 4+ stars)
   - Operator: `gte` (greater than or equal)
   - Values from 1 to 5 stars

3. **Services Filter**

   - Multiple selection of offered services
   - Supports more than 30 different service types:
     - General mechanics, Auto electrical, Suspension and steering
     - Tire shop and tires, Car audio, Auto center
     - Motorcycle shop, Electric and hybrid cars
     - And many more...
   - Operator: `or_ilike` (search for any of the selected services)

4. **Neighborhood Filter**

   - Filter by geographic location
   - Case-insensitive search in the address field
   - Operator: `ilike` for partial search

5. **Shop Name Filter**
   - Specific search by shop name
   - Operator: `ilike` for partial and case-insensitive search

#### Filter Interface

- **Desktop**: Fixed sidebar with filter form
- **Mobile**: Drawer that opens over the content
- **Validation**: Form validation with Zod
- **State**: State management with React Hook Form
- **Clear Filters**: Button to reset all applied filters

### 📞 Contact System

MechSearch offers multiple ways to directly contact shops, facilitating communication between customers and mechanics.

#### Contact Features

1. **Contact Button**

   - Available on mechanic cards and details page
   - Opens a modal dialog with contact options
   - Displayed only when contact information is available

2. **Phone**

   - Direct link for phone calls (`tel:`)
   - Automatic number formatting
   - Opens the device's phone application

3. **WhatsApp**

   - Direct link to WhatsApp Web/App
   - Pre-formatted message: "Hello! I would like to schedule a service at the shop."
   - Automatic number cleaning (removes non-numeric characters)
   - Opens in a new tab/window

4. **Email**
   - Direct link to email client (`mailto:`)
   - Pre-filled subject: "Service Scheduling"
   - Pre-formatted message body
   - Opens the device's default email client

### 🎯 Other Key Features

- **Mechanics Search**: Quick search with paginated results
- **Shop Details**: Complete page with detailed information
  - Photo gallery
  - Ratings and reviews
  - Offered services
  - Map location
  - Opening hours
- **Google Maps Integration**: Location visualization and navigation
- **Rating System**: View ratings and reviews
- **Favorites**: Save favorite shops (localStorage)
- **Shop Registration**: Multi-step form for registering new shops
- **Pagination**: Navigation between result pages
- **Responsiveness**: Fully responsive design for mobile and desktop

## 🛠️ Technologies and Dependencies

### Main Dependencies

```json
{
  "next": "15.1.6",
  "react": "19.2.0",
  "typescript": "^5",
  "@supabase/supabase-js": "^2.58.0",
  "@tanstack/react-query": "^5.90.2",
  "@googlemaps/js-api-loader": "^1.16.10",
  "tailwindcss": "^4.1.11",
  "react-hook-form": "^7.62.0",
  "zod": "^4.1.1"
}
```

## 📦 Installation and Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Google Maps API Key (optional, for map features)

## 📝 Available Scripts

- `npm run dev`: Starts development server with Turbopack
- `npm run build`: Creates production build
- `npm start`: Starts production server
- `npm run lint`: Runs ESLint
- `npm run analyze`: Analyzes bundle size

## 📄 License

This project is private and proprietary.

---

**MechSearch** - Connecting you with the right automotive professionals 🚗🔧
