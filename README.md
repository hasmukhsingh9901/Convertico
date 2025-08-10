# ZestNexus Stack - Convertico Frontend

A modern React application built with the ZestNexus stack featuring a multi-step form with beautiful UI and comprehensive functionality.

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Ant Design** - UI component library
- **TailwindCSS** - Utility-first CSS framework
- **Jotai** - Atomic state management
- **Vite** - Fast build tool and dev server
- **React Hook Form** - Form handling
- **Jest + Testing Library** - Unit testing

## ✨ Features

- 🎨 **Beautiful UI** - Modern design with Ant Design components
- 🌙 **Dark/Light Mode** - Toggle between themes with system preference detection
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔄 **Multi-step Form** - Smooth step-by-step form navigation
- 📊 **State Management** - Jotai atoms for efficient state handling
- 🧪 **Testing Ready** - Jest and React Testing Library setup
- ⚡ **Fast Development** - Vite for lightning-fast builds

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Run tests:**
   ```bash
   npm test
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── StepForm/       # Multi-step form components
│   ├── ThemeToggle.tsx # Theme switcher
│   └── ThemeProvider.tsx # Theme context provider
├── store/              # Jotai state management
│   ├── formStore.ts    # Form state atoms
│   └── themeStore.ts   # Theme state atoms
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── assets/             # Static assets
└── __tests__/          # Test files
```

## 🎯 Key Features Implementation

### State Management with Jotai
- Atomic state management for better performance
- Form data persistence across steps
- Theme state with localStorage persistence

### Dark/Light Mode
- System preference detection
- Manual toggle with beautiful UI
- TailwindCSS dark mode classes
- Persistent theme selection

### Form Handling
- Multi-step form with validation
- React Hook Form integration
- Smooth navigation between steps
- Form data persistence

### Testing Setup
- Jest configuration for TypeScript
- React Testing Library for component testing
- Sample test files included

## 🚀 Deployment

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Render
1. Create a new Static Site
2. Connect your repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 🧪 Testing

The project includes a comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

## 🎨 Customization

### Styling
- TailwindCSS classes for custom styling
- Ant Design theme customization in `main.tsx`
- Custom CSS components in `index.css`

### Adding New Steps
1. Create a new component in `components/StepForm/`
2. Add it to the steps array in `App.tsx`
3. Update the FormData interface in `types/index.ts`

### State Management
- Add new atoms in the store files
- Use `useAtom` hook to access state
- Follow Jotai patterns for derived state

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using the ZestNexus Stack
