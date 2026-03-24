# Syntropy

A modern web application built with Next.js that integrates the Boafo Accessibility Widget to enhance web accessibility.

## Project Overview

Syntropy is a Next.js-based web application that leverages React and modern web technologies to deliver a seamless user experience. The project incorporates the Boafo Accessibility Widget to ensure the application is accessible to all users, including those with disabilities.

### Key Features

- **Next.js Framework**: Built on Next.js for server-side rendering and optimal performance
- **React 19**: Utilizes the latest React features
- **Tailwind CSS**: Modern utility-first CSS framework for styling
- **TypeScript**: Type-safe development environment
- **Boafo Accessibility Widget**: Integrated accessibility features for enhanced user experience

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **pnpm** (package manager)
- **Git** (version control)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/GROW-YAI/syntropy.git
cd syntropy
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using pnpm:
```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of the project:

```bash
cp .env.example .env
```

Or create it manually and add the following:

```env
# Boafo Accessibility Widget API Key
NEXT_PUBLIC_BOAFO_API_KEY=your_api_key_here
```

**Important**: Replace `your_api_key_here` with your actual Boafo widget API key.

### 4. Run the Development Server

Using npm:
```bash
npm run dev
```

Or using pnpm:
```bash
pnpm run dev
```

The application will be available at `http://localhost:3000` (or the port specified by your browser-sync configuration).

## Obtaining Boafo Widget Keys

The Boafo Accessibility Widget requires an API key to function properly. Follow these steps to obtain your API key:

### Step 1: Visit the Boafo Website

Go to the official Boafo Accessibility Widget website or contact the Boafo team to request access.

### Step 2: Create an Account

- Sign up for an account on the Boafo platform
- Complete the registration process
- Verify your email address if required

### Step 3: Generate API Key

- Log in to your Boafo dashboard
- Navigate to the API Keys or Settings section
- Click on "Generate New API Key" or similar option
- Copy the generated API key

### Step 4: Add to Environment Variables

Add the API key to your `.env` file:

```env
NEXT_PUBLIC_BOAFO_API_KEY=boafo_your_generated_key
```

**Note**: The `NEXT_PUBLIC_` prefix is required for Next.js to expose this variable to the client-side code.

### Security Best Practices

- **Never commit your `.env` file** to version control (it's already in `.gitignore`)
- Keep your API keys confidential
- Rotate keys periodically for security
- Use different keys for development and production environments

## Project Structure

```
syntropy/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   │   ├── BoafoWidgetInitializer.tsx  # Boafo widget initialization
│   │   └── features/       # Feature components
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── assets/                 # Static assets (images, etc.)
├── css/                    # CSS files
├── js/                     # JavaScript files
├── src/                    # Source files
│   └── types/              # TypeScript type definitions
├── api/                    # API related files
├── .env                    # Environment variables (not in git)
├── .gitignore              # Git ignore file
├── package.json            # Project dependencies
├── next.config.js          # Next.js configuration
└── tsconfig.json           # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start the development server with browser-sync
- `npm run dv` - Alias for development server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary. All rights reserved.

## Support

For support or questions about the Boafo Accessibility Widget, please contact the Boafo team or refer to their official documentation.

---

**Note**: This project uses the Boafo Accessibility Widget to ensure compliance with web accessibility standards and provide an inclusive user experience.