# Quick Start Guide

## 🚀 Get WebLens Running in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm run dev
```

The app will automatically open at `http://localhost:5173`

### Step 3: Try It Out!

1. Click **"Try an example"** to populate a sample URL
2. Click **"Extract Data"** button
3. Watch the loading animation (simulates 1.5-2 second extraction)
4. Explore the results dashboard with all extracted data

---

## 📋 What to Try

### Feature Demonstrations

**1. URL Input & Validation**
- Try entering an invalid URL - see error validation
- Click "Try an example" - auto-fills with sample URL
- Try copying a link URL from the results

**2. Loading State**
- Watch rotating loading messages
- Animated spinner
- Simulated extraction (1.5-2 seconds)

**3. Results Dashboard**
- **Statistics Cards**: See word count, links, images, headings
- **Page Overview**: Complete metadata display
- **Page Structure**: Hierarchical heading display
- **Content**: Extracted paragraphs with copy button
- **Links**: Internal/External links in a table
- **Images**: Responsive grid of images with metadata
- **JSON Viewer**: Full structured data with syntax highlighting

**4. Export Features**
- Copy JSON to clipboard
- Download JSON file
- Copy individual content sections
- Copy specific URLs from links table

**5. Responsive Design**
- Resize browser window to test tablet/mobile views
- Hamburger menu appears on small screens
- Tables scroll horizontally on mobile
- Images stack in single column on mobile

---

## 🛠️ Available Commands

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 📁 Project Structure

```
weblens/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── UrlInput.jsx
│   │   ├── FeatureCards.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── StatsCards.jsx
│   │   ├── PageOverview.jsx
│   │   ├── HeadingsSection.jsx
│   │   ├── ContentSection.jsx
│   │   ├── LinksSection.jsx
│   │   ├── ImagesSection.jsx
│   │   ├── JsonViewer.jsx
│   │   ├── LoadingState.jsx
│   │   ├── EmptyState.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx         # Main page component
│   ├── data/
│   │   └── mockData.js      # Mock data + extractData function
│   ├── App.jsx              # Root component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + Tailwind
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies
├── .eslintrc.cjs            # ESLint rules
├── .prettierrc              # Prettier formatting
├── .gitignore               # Git ignore rules
└── README.md                # Full documentation
```

---

## 🎨 UI/UX Highlights

### Design
- ✨ Premium dark theme with subtle gradients
- 🎯 Modern, minimal aesthetic inspired by Linear, Vercel, Raycast
- 📱 Fully responsive (mobile, tablet, desktop)
- ✅ Accessibility-first approach

### Components
- 🧭 Sticky navigation with mobile menu
- 🎪 Hero section with gradient text
- 📊 Statistics cards with icons
- 📑 Comprehensive metadata display
- 🔗 Link analysis with type badges
- 🖼️ Responsive image gallery
- 💾 JSON viewer with copy/download
- ⏳ Animated loading states

### Interactions
- ✏️ URL validation with error messages
- 📋 Copy to clipboard with confirmation
- 💿 Download extracted data as JSON
- 🔄 Smooth scrolling to results
- ⌨️ Keyboard support (Enter to extract)
- 🎬 Smooth animations and transitions

---

## 🔌 Backend Integration

The frontend is ready for backend integration. No changes needed to UI components!

### Current: Mock Data

```javascript
// src/data/mockData.js
export async function extractData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 1500)
  })
}
```

### Future: FastAPI Backend

Just replace the function:

```javascript
export async function extractData(url) {
  const response = await fetch('http://localhost:8000/extract', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  })
  
  if (!response.ok) throw new Error('Extraction failed')
  return response.json()
}
```

---

## 🐛 Troubleshooting

### Port 5173 Already in Use

```bash
npm run dev -- --port 3000
```

### Styles Not Loading

```bash
rm -rf node_modules
npm install
npm run dev
```

### Images Not Loading

Images use Unsplash URLs. Check:
- Internet connection
- Unsplash availability
- Browser console for errors

---

## 💡 Tips

1. **Explore All Sections**: Scroll through the entire results dashboard
2. **Try Copy Buttons**: Test copy functionality on different elements
3. **Download JSON**: Get the extracted data as a JSON file
4. **Responsive Testing**: Resize browser or use DevTools to test mobile
5. **Try Different URLs**: The mock function accepts any URL format

---

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React Icons](https://lucide.dev)

---

## 🎯 Next Steps

After exploring:

1. **Connect Backend**: Replace `extractData()` with real API calls
2. **Add Authentication**: Implement user login/signup
3. **Save History**: Store extraction history in database
4. **Advanced Features**: Filtering, comparison, scheduling
5. **Deploy**: Push to production with Vercel, Netlify, or your platform

---

**Happy exploring! 🚀**
