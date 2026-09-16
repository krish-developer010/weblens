# WebLens - Webpage Data Extractor

A modern, premium SaaS frontend for extracting and analyzing webpage data. Built with React, Vite, and Tailwind CSS.

![WebLens](https://img.shields.io/badge/React-18.3-blue?style=flat-square) ![Vite](https://img.shields.io/badge/Vite-5.0-green?style=flat-square) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3-06B6D4?style=flat-square)

## Features

✨ **Premium UI/UX**
- Dark theme with modern aesthetic
- Smooth animations and transitions
- Fully responsive (desktop, tablet, mobile)
- Glass morphism effects
- Professional typography and spacing

📊 **Data Extraction Dashboard**
- URL validation and input
- Real-time loading states
- Comprehensive statistics cards
- Page metadata viewer
- Heading hierarchy display
- Content extraction
- Link analysis (internal/external)
- Image gallery with metadata
- Structured JSON viewer with syntax highlighting

🎯 **User Interactions**
- Copy to clipboard functionality
- Download as JSON/CSV
- Smooth scrolling to results
- Example URL placeholder
- Error states and validation
- Mobile-friendly navigation

## Tech Stack

- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Icons**: Lucide React
- **JavaScript**: ES Modules

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Sticky navigation with mobile menu
│   ├── Hero.jsx                # Main hero section with heading
│   ├── HeroVisual.jsx          # Visual representation of extraction flow
│   ├── UrlInput.jsx            # URL input with validation
│   ├── FeatureCards.jsx        # 6 feature cards
│   ├── HowItWorks.jsx          # 3-step timeline
│   ├── StatsCards.jsx          # Statistics display
│   ├── PageOverview.jsx        # Page metadata
│   ├── HeadingsSection.jsx     # Heading hierarchy
│   ├── ContentSection.jsx      # Extracted paragraphs
│   ├── LinksSection.jsx        # Internal/external links table
│   ├── ImagesSection.jsx       # Image gallery
│   ├── JsonViewer.jsx          # JSON viewer with copy/download
│   ├── LoadingState.jsx        # Loading animation
│   ├── EmptyState.jsx          # Empty state message
│   └── Footer.jsx              # Footer with links
├── pages/
│   └── Home.jsx                # Main page component
├── data/
│   └── mockData.js             # Mock data and extract function
├── App.jsx                     # Root component
├── main.jsx                    # React entry point
└── index.css                   # Tailwind and global styles
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/krish-developer010/weblens.git
   cd weblens
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Usage

### Basic Flow

1. **Enter a URL**: Paste any public webpage URL in the input field
   - Example: `https://example.com/article`
   - Or click "Try an example" for a preset URL

2. **Click Extract Data**: The application will:
   - Validate the URL format
   - Show a loading state with animated messages
   - Simulate data extraction (1.5-2 seconds)
   - Display comprehensive results

3. **View Results**: Explore extracted data across multiple sections:
   - Statistics (words, links, images, headings)
   - Page metadata and overview
   - Content hierarchy and structure
   - All links (internal and external)
   - Image gallery with alt text and URLs
   - Structured JSON representation

4. **Export Data**: 
   - Copy JSON to clipboard
   - Download as JSON file
   - Copy individual content sections
   - Copy individual URLs

## Mock Data

The application uses comprehensive mock data to demonstrate all features:

- **URL**: `https://example.com/article`
- **Title**: "Artificial Intelligence Is Changing the Way We Build Software"
- **Author**: John Smith
- **Stats**: 1,284 words, 24 links, 18 images, 12 headings
- **Content**: 5 full paragraphs of realistic AI/dev content
- **Links**: 24 total (12 internal, 12 external)
- **Images**: 18 images with alt text and URLs
- **Headings**: 12 headings with proper H1-H3 hierarchy

## Backend Integration

The frontend is ready for backend integration. The extraction logic is abstracted in `src/data/mockData.js`:

```javascript
// Current mock implementation
export async function extractData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 1500)
  })
}
```

### To Connect to FastAPI Backend:

Replace the `extractData` function with:

```javascript
export async function extractData(url) {
  const response = await fetch('http://localhost:8000/extract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  })
  
  if (!response.ok) {
    throw new Error('Extraction failed')
  }
  
  return response.json()
}
```

The UI components will work without modification.

## Design Features

### Dark Theme
- Very dark background (`#0a0a0a`)
- Subtle borders and dividers
- Blue accent color for interactions
- Purple gradients for emphasis

### Responsive Design
- Mobile-first approach
- Hamburger menu on small screens
- Grid adjustments for tablets
- Optimized typography for all sizes

### Interactions
- Smooth hover animations
- Button loading states
- Error validation with feedback
- Loading animation with rotating messages
- Copy-to-clipboard with confirmation
- Auto-scroll to results

### Performance
- Lightweight dependencies
- CSS-based animations (no heavy JS libraries)
- Efficient component structure
- Optimized re-renders

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit `tailwind.config.js` to customize the dark theme colors:

```javascript
colors: {
  dark: {
    50: '#f8f8f8',
    900: '#0a0a0a',
    // ...
  },
}
```

### Mock Data
Edit `src/data/mockData.js` to change example data:

```javascript
export const mockData = {
  url: 'your-url',
  title: 'your-title',
  // ...
}
```

### Extract Function
Implement real backend logic in `extractData()` function in `src/data/mockData.js`.

## Common Issues

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles Not Loading
```bash
# Rebuild Tailwind CSS
npm run dev
# The dev server will automatically recompile CSS
```

## Performance Tips

1. **Lazy load images**: Use image lazy loading attribute
2. **Code splitting**: Vite automatically handles code splitting
3. **Minimize bundle**: Build with `npm run build`
4. **Cache strategy**: Configure caching headers for production

## Accessibility

- Semantic HTML throughout
- ARIA labels on buttons and icons
- Keyboard navigation support
- Color contrast compliance
- Focus states on interactive elements

## Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Download as CSV
- [ ] Search within results
- [ ] URL history
- [ ] Saved extractions
- [ ] Comparison mode
- [ ] Real-time API integration
- [ ] User authentication
- [ ] Advanced filtering options

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project however you like.

## Author

**Krish Aggarwal**
- GitHub: [@krish-developer010](https://github.com/krish-developer010)
- Email: krishaggarwal843@gmail.com

## Support

For issues or questions:
1. Check the FAQ section
2. Review existing GitHub issues
3. Create a new issue with detailed information

---

**Built with ❤️ for developers who care about clean, modern interfaces.**
