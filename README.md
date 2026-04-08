# Wall Calendar

A beautiful, interactive wall calendar application built with modern web technologies. This app provides an elegant calendar interface with date selection, note-taking capabilities, and a nostalgic wall calendar design.

## Features

- **Interactive Calendar Grid**: Navigate through months with smooth animations
- **Date Range Selection**: Select single dates or date ranges
- **Notes Panel**: Add and edit notes for selected dates
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **TypeScript**: Fully typed for better development experience
- **Fast Development**: Powered by Vite for instant hot reloading

## Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Framer Motion** - Animation library for smooth transitions
- **Lucide React** - Beautiful icons

### State Management & Routing
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **React Hook Form** - Form handling with validation

### Utilities
- **date-fns** - Modern JavaScript date utility library
- **Zod** - TypeScript-first schema validation
- **Class Variance Authority** - Component variant management

### Development Tools
- **ESLint** - Code linting
- **Vitest** - Unit testing framework
- **Playwright** - End-to-end testing
- **PostCSS** - CSS processing

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 20.20.2 or higher) - JavaScript runtime
- **npm** or **yarn** or **pnpm** - Package manager

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wall-calendar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## Deployment

### Netlify Deployment

This project is configured for easy deployment on Netlify:

1. **Connect your repository** to Netlify
2. **Build settings** (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy**

The project includes:
- `netlify.toml` - Configuration file for Netlify
- `public/_redirects` - Handles client-side routing for React Router

### Troubleshooting Deployment

If your deployed site shows blank:

1. **Check build logs** in Netlify dashboard
2. **Verify publish directory** is set to `dist`
3. **Ensure Node.js version** matches (20.20.2)
4. **Check for routing issues** - the `_redirects` file handles SPA routing

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains the production build
# Upload the contents of dist/ to your hosting provider
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/
│   ├── calendar/
│   │   ├── CalendarGrid.tsx      # Calendar date grid component
│   │   ├── CalendarHeader.tsx    # Month/year header with navigation
│   │   ├── CalendarHero.tsx      # Hero image for each month
│   │   ├── NotesPanel.tsx        # Notes input and display
│   │   ├── SpiralBinding.tsx     # Decorative spiral binding
│   │   └── WallCalendar.tsx      # Main calendar component
│   ├── ui/                       # shadcn/ui components
│   └── NavLink.tsx
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useCalendar.ts            # Calendar state management hook
├── lib/
│   ├── calendarUtils.ts          # Calendar utility functions
│   └── utils.ts                  # General utilities
├── pages/
│   ├── Index.tsx                 # Main page
│   └── NotFound.tsx              # 404 page
├── App.tsx                       # Main app component
├── main.tsx                      # App entry point
└── index.css                     # Global styles
```

## Usage

1. **Navigate Months**: Use the arrow buttons in the header to move between months
2. **Select Dates**: Click on dates to select them. Hold Shift to select date ranges
3. **Add Notes**: Select a date or range and type notes in the panel below
4. **Clear Selection**: Click the "Clear" button to deselect dates

## Development

### Code Style

This project uses ESLint for code linting. Run `npm run lint` to check for issues.

### Testing

Tests are written with Vitest. Run `npm run test` for unit tests and `npm run test:watch` for continuous testing.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) for the component library
- Icons from [Lucide](https://lucide.dev/)
- Date utilities from [date-fns](https://date-fns.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wall-calendar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/
│   ├── calendar/
│   │   ├── CalendarGrid.tsx      # Calendar date grid component
│   │   ├── CalendarHeader.tsx    # Month/year header with navigation
│   │   ├── CalendarHero.tsx      # Hero image for each month
│   │   ├── NotesPanel.tsx        # Notes input and display
│   │   ├── SpiralBinding.tsx     # Decorative spiral binding
│   │   └── WallCalendar.tsx      # Main calendar component
│   ├── ui/                       # shadcn/ui components
│   └── NavLink.tsx
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useCalendar.ts            # Calendar state management hook
├── lib/
│   ├── calendarUtils.ts          # Calendar utility functions
│   └── utils.ts                  # General utilities
├── pages/
│   ├── Index.tsx                 # Main page
│   └── NotFound.tsx              # 404 page
├── App.tsx                       # Main app component
├── main.tsx                      # App entry point
└── index.css                     # Global styles
```

## Usage

1. **Navigate Months**: Use the arrow buttons in the header to move between months
2. **Select Dates**: Click on dates to select them. Hold Shift to select date ranges
3. **Add Notes**: Select a date or range and type notes in the panel below
4. **Clear Selection**: Click the "Clear" button to deselect dates

## Development

### Code Style

This project uses ESLint for code linting. Run `npm run lint` to check for issues.

### Testing

Tests are written with Vitest. Run `npm run test` for unit tests and `npm run test:watch` for continuous testing.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) for the component library
- Icons from [Lucide](https://lucide.dev/)
- Date utilities from [date-fns](https://date-fns.org/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)