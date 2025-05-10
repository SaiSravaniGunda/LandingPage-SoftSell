# SoftSell - Software License Resale Landing Page

A modern landing page for a software license resale marketplace, built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Responsive single-page layout
- Hero section with CTA
- 3-step "How It Works" section
- Testimonials section
- Contact form
- Light/Dark mode toggle
- Chatbot with OpenAI integration (simulated)

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- OpenAI API (for chat)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

## Environment Variables

To enable the OpenAI chatbot functionality, create a `.env` file in the root directory and add your OpenAI API key:

```
VITE_OPENAI_API_KEY=your_api_key_here
```

## License

MIT
