# Modern Portfolio Website

A stunning, modern portfolio website built with React, Vite, and Tailwind CSS featuring dynamic animations, scroll effects, and responsive design.

## Features

### 🎨 Design System
- **Dark Theme**: Professional dark color scheme with teal and amber accents
- **Glass Morphism**: Modern glass effects with backdrop blur
- **Responsive Design**: Fully responsive across all devices
- **Typography**: Clean, modern font stack

### ✨ Animations & Interactions
- **Scroll-triggered animations**: Elements animate as you scroll
- **Parallax effects**: Dynamic background elements
- **Hover effects**: Smooth transitions and micro-interactions
- **Typewriter effect**: Animated text in hero section
- **Carousel/slider**: Auto-advancing testimonials

### 📱 Sections
1. **Hero Section**: 
   - Typewriter effect for name and title
   - Floating particles and gradient orbs
   - Interactive skills and social links
   - Animated scroll indicator

2. **About Section**:
   - Personal information with animated skills bars
   - Achievements showcase
   - Interests and passions display
   - Call-to-action card

3. **Experience Section**:
   - Animated timeline with work history
   - Key achievements and technologies
   - Skills overview and statistics
   - Current focus indicators

4. **Projects Section**:
   - Filterable project categories
   - Featured projects with hover overlays
   - Project details with technologies
   - Interactive project cards

5. **Testimonials Section**:
   - Auto-advancing carousel
   - Client ratings and feedback
   - Statistics display
   - Navigation controls

6. **Contact Section**:
   - Web3Forms integration for email delivery
   - Contact information display
   - Social media links
   - Form validation and status messages

### 🛠️ Technical Stack
- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animations**: CSS animations, Intersection Observer API
- **Form Handling**: Web3Forms API
- **Build Tool**: Vite

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd portfolio_website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Web3Forms**:
   - Get your access key from [Web3Forms](https://web3forms.com/)
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/sections/Contact.jsx` with your actual key

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

### Customization

#### Branding
- Update the name in `src/layout/Navbar.jsx` (line 45)
- Modify colors in `src/index.css` theme section
- Update personal information in each section

#### Content
- Replace placeholder images in `src/sections/Projects.jsx`
- Update project information and descriptions
- Modify testimonials and client information
- Adjust skills and experience details

#### Styling
- Modify CSS variables in `src/index.css`
- Adjust animation timings and effects
- Customize responsive breakpoints

## Performance Optimizations

- **Lazy Loading**: Images and components load on demand
- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Animations**: CSS transforms for smooth performance
- **Intersection Observer**: Efficient scroll-based animations
- **Minimal Dependencies**: Only essential libraries included

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- Intersection Observer API support

## Deployment

### Static Hosting
```bash
npm run build
# Deploy the 'dist' folder to your hosting service
```

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## Contact

For questions or support:
- Email: pratham@example.com (update in Contact section)
- LinkedIn: linkedin.com/in/pratham (update in Contact section)
- GitHub: github.com/pratham (update in Contact section)

---

Built with ❤️ using modern web technologies