/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - White & Black Theme
        primary: '#000000',        // Black text
        secondary: '#6B6B6B',      // Gray text
        danger: '#E63946',         // Red accent (panic, alerts)
        accent: '#2563EB',         // Blue accent (links, hover)
        border: '#E5E7EB',         // Light gray borders
        background: '#FFFFFF',     // White background

        // Legacy colors (for gradual migration)
        navy: '#000000',
        light: '#FFFFFF',
        gray: '#6B6B6B',
        teal: '#2563EB',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(230, 57, 70, 0.7)',
          },
          '50%': {
            opacity: '.8',
            boxShadow: '0 0 40px rgba(230, 57, 70, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}
