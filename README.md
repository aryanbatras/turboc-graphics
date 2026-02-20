# Turbo C++ Online IDE

A web-based Turbo C++ development environment that runs entirely in your browser using modern web technologies. This project brings the classic DOS-based Turbo C++ compiler to modern devices without any installation requirements.

## 🚀 Features

- **Zero Installation**: Run Turbo C++ directly in your browser
- **Mobile-Friendly**: Custom touch interface for tablets and smartphones
- **Full IDE Experience**: Complete Turbo C++ environment with graphics support
- **Cross-Platform**: Works on any modern browser (Chrome/Chromium recommended)
- **Authentic Experience**: Real DOS environment emulation

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 16.1.6** with React 19.2.3 - Modern React framework for optimal performance
- **TypeScript** for type safety and better development experience
- **Webpack** configuration for bundling

### Core Technology: JS-DOS
The heart of this project is **JS-DOS v6.22**, a JavaScript implementation of DOSBox that enables:
- Full DOS environment emulation in the browser
- Native DOS application execution
- Hardware-level keyboard and mouse input simulation

## 🏗️ Architecture

### Key Components

#### 1. DOS Environment Setup
```javascript
Dos(dosCanvas, {
  wdosboxUrl: "https://v8.js-dos.com/v6.22/dosbox.js",
}).ready((fs, main) => {
  fs.extract("/turbo.jsdos").then(() => {
    main(["-conf", "/dosbox.conf"])
  });
});
```

#### 2. Turbo C++ Integration
- **turbo.jsdos** (1MB): Pre-packaged DOS environment containing complete Turbo C++ installation
- **TURBOC/** directory: Full Turbo C++ suite including:
  - `TC.EXE` (290KB) - Main IDE executable
  - `TCC.EXE` (180KB) - Command-line compiler
  - Complete library files (`CC.LIB`, `CH.LIB`, etc.)
  - Graphics libraries (`BGI.ARC`, `GRAPHICS.LIB`)
  - Standard C headers and libraries

#### 3. Mobile-First Controller System
Created a sophisticated touch interface for mobile devices:

**Arrow Key Controller:**
- Grid-based layout with directional buttons
- Continuous key press simulation with 100ms intervals
- Touch event handling for mobile compatibility

**Action Buttons:**
- **Compile (F9)**: Direct compilation trigger
- **Run**: Smart sequence execution (first time: full menu navigation, subsequent: simplified)
- **Menu (F10)**: Access to IDE menus
- **Enter/Esc/Back**: Essential navigation keys

#### 4. Responsive Design
- **Full viewport coverage**: 100vw × 100vh DOS display
- **Mobile-optimized controls**: Large touch targets (140px × 180px)
- **Gradient styling**: Modern visual design with hover effects
- **Browser compatibility**: Chrome/Chromium optimization with fallback warnings

## 📁 Project Structure

```
public/
├── turbo.jsdos          # DOS environment package
├── dosbox.conf          # Auto-execution configuration
└── TURBOC/             # Complete Turbo C++ suite
    ├── TC.EXE          # IDE executable
    ├── TCC.EXE         # Compiler
    ├── *.LIB           # Runtime libraries
    └── *.H             # Header files

src/
├── pages/
│   ├── _document.tsx   # Main application setup with JS-DOS integration
│   ├── _app.tsx        # App component
│   └── index.tsx       # Home page
└── styles/
    └── globals.css     # Global styles
```

## ⚙️ Configuration System

**dosbox.conf** automates the Turbo C++ launch:
```ini
[autoexec]
@echo off
mount c .
c:
cd TURBOC
unpack BGI.ARC
tc GRAPHICS.C
```

## 🎯 Technical Implementation Details

### Key Event Simulation
Advanced keyboard simulation for mobile:
- **Key codes**: Direct DOM key event simulation
- **Timing control**: Precise 300ms delays for menu navigation
- **State management**: Smart run sequence detection

### Performance Optimizations
- **Canvas rendering**: Hardware-accelerated graphics
- **Lazy loading**: DOS environment loads on-demand
- **Minimal dependencies**: Core Next.js + JS-DOS only
- **Bundle optimization**: Webpack configuration for production

## 💡 Innovation Highlights

### 1. Zero-Installation Development Environment
- No local compiler setup required
- Instant access from any modern browser
- Consistent development environment across devices

### 2. Cross-Platform Compatibility
- Desktop: Full keyboard support
- Mobile: Custom touch interface
- Tablet: Responsive layout adaptation

### 3. Educational Accessibility
- Preserves legacy programming education
- Enables learning C++ on any device
- Maintains authentic Turbo C++ experience

### 4. Modern Web Integration
- Progressive Web App capabilities
- Offline functionality potential
- Cloud-based project storage ready

## 🔧 Technical Challenges Solved

### Mobile Input Mapping
- Translated desktop keyboard shortcuts to touch interfaces
- Implemented continuous key press for navigation
- Created intuitive button layouts for small screens

### Performance Optimization
- Efficient DOS environment packaging
- Optimized canvas rendering pipeline
- Minimal network payload (1MB total)

### Browser Compatibility
- Chromium-specific optimization
- Graceful degradation for other browsers
- Touch event standardization

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔮 Future Enhancement Potential

### Cloud Integration
- Project synchronization across devices
- Collaborative coding features
- Automated cloud backups

### Advanced Features
- Multi-file project support
- Debugging integration
- Code completion and syntax highlighting

### Educational Tools
- Interactive tutorials
- Built-in code examples
- Step-by-step learning modules

## 🌟 Impact

This project successfully bridges the gap between classic DOS-based development and modern web technologies, making C++ education accessible to everyone regardless of their device or technical setup. It preserves the nostalgia and simplicity of Turbo C++ while leveraging the power and reach of modern web browsers.

---

**Built with ❤️ using Next.js, React, TypeScript, and JS-DOS**
