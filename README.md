# RakshaSetu - Smart Tourist Safety System

![RakshaSetu](https://img.shields.io/badge/Version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

**Powered by GISP (Geo-Intelligent Shield Protocol)**

A Next.js prototype for an AI-driven, blockchain-secured platform for real-time tourist safety monitoring and incident response. Built for ELP College Project under SDG 9 & SDG 11.

---

## Features

### Tourist Panel
- **Digital ID Card** - Blockchain-based DID verification
- **Live Location Tracking** - Real-time GPS monitoring
- **Risk Score Indicator** - AI-powered safety assessment
- **Panic Shield Button** - Emergency alert system
- **Alert History** - Personal incident tracking

### Authority Panel
- **Live Map View** - Track all tourists in real-time
- **Active Alerts Panel** - Monitor critical incidents
- **E-FIR Generator** - Automated incident reports
- **System Logs** - Blockchain & AI event tracking
- **Analytics Dashboard** - Risk trends and statistics

---

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 3.4
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Language**: TypeScript

---

## Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd RakshaSetu
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Demo Credentials

### Tourist Login
- **Email**: `amaan@tourist.com`
- **Password**: `tourist123`

### Authority Login
- **Email**: `officer@authority.com`
- **Password**: `authority123`

---

## Project Structure

```
RakshaSetu/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── login/
│   │   └── page.tsx            # Login page
│   ├── tourist/
│   │   └── dashboard/
│   │       └── page.tsx        # Tourist dashboard
│   └── authority/
│       └── dashboard/
│           └── page.tsx        # Authority dashboard
├── components/
│   ├── Navbar.tsx              # Top navigation bar
│   ├── Sidebar.tsx             # Side menu
│   ├── Card.tsx                # Reusable card component
│   ├── AlertTable.tsx          # Alert display table
│   └── MapView.tsx             # Map visualization
├── data/
│   ├── tourists.json           # Mock tourist data
│   ├── alerts.json             # Mock alerts
│   ├── systemLogs.json         # Mock system logs
│   └── users.json              # Mock login credentials
├── styles/
│   └── globals.css             # Global styles
├── public/
│   └── images/                 # Static images
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript config
└── package.json                # Dependencies
```

---

## Features Breakdown

### Landing Page
- Modern gradient background with animated elements
- Feature showcase cards
- System statistics
- Call-to-action buttons

### Login System
- Role-based authentication (Tourist/Authority)
- Mock credential validation
- Persistent session storage
- Responsive design

### Tourist Dashboard
- **Digital ID Card** with QR code placeholder
- **Live location map** with mock GPS data
- **Risk assessment gauge** with color-coded levels
- **Panic button** with pulse animation
- **Alert history table** with filtering
- Responsive sidebar navigation

### Authority Dashboard
- **Dark theme** professional interface
- **Live map tracking** with multiple tourist markers
- **Real-time statistics** cards
- **Alert trend charts** (Line & Bar charts)
- **Status distribution** (Pie chart)
- **E-FIR generator** with modal popup
- **Blockchain logs** with verification badges
- **System health indicators**

### UI/UX Highlights
- **Smooth animations** using Framer Motion
- **Toast notifications** for user feedback
- **Responsive design** (mobile, tablet, desktop)
- **Loading skeletons** for better UX
- **Hover effects** and micro-interactions
- **Color-coded severity** indicators
- **Professional data visualization**

---

## Mock Data

All data is stored in the `/data` folder as JSON files:

- **tourists.json**: 5 sample tourists with locations and risk scores
- **alerts.json**: 5 sample alerts with different severities
- **systemLogs.json**: 8 blockchain and AI events
- **users.json**: Login credentials for demo

---

## Customization

### Colors (tailwind.config.js)
```javascript
colors: {
  navy: '#001F3F',      // Primary dark
  danger: '#E63946',    // Alert red
  light: '#F1FAEE',     // Background
  gray: '#A8A8A8',      // Secondary
  teal: '#14B8A6',      // Accent
}
```

### Environment Variables (.env.local)
```env
NEXT_PUBLIC_APP_NAME=RakshaSetu
NEXT_PUBLIC_APP_VERSION=1.0.0
```

---

## Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## Roadmap

### Phase 1 (Current - Prototype)
- ✅ Frontend UI/UX
- ✅ Mock data simulation
- ✅ Role-based dashboards
- ✅ Responsive design

### Phase 2 (Future)
- [ ] Backend API integration
- [ ] Real authentication system
- [ ] Live GPS tracking
- [ ] Actual blockchain integration
- [ ] AI risk assessment model
- [ ] Push notifications
- [ ] SMS/Email alerts
- [ ] Multi-language support

---

## Technologies Explained

### GISP (Geo-Intelligent Shield Protocol)
Mock AI protocol for:
- Location risk assessment
- Geofencing and boundary detection
- Predictive safety scoring
- Anomaly detection

### Blockchain Integration (Planned)
- Decentralized Identity (DID)
- Immutable incident records
- Transparent audit trails
- Smart contract automation

---

## Presentation Tips

1. **Start with landing page** - Show the welcome screen
2. **Login as Tourist** - Demonstrate tourist features
3. **Trigger panic button** - Show real-time alerts
4. **Logout and login as Authority** - Show authority panel
5. **Generate E-FIR** - Demonstrate report generation
6. **Show system logs** - Highlight blockchain verification

---

## Known Limitations

- This is a **frontend prototype only** - no backend
- Authentication is **mock-based** (not secure)
- Map is a **static visualization** (not real Google Maps)
- GPS coordinates are **hardcoded**
- Blockchain logs are **simulated**
- AI risk scores are **static values**

---

## Troubleshooting

### npm install fails
```bash
# Clear cache and retry
npm cache clean --force
npm install
```

### Port 3000 already in use
```bash
# Run on different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

---

## Credits

- **Project**: RakshaSetu
- **Purpose**: ELP College Project
- **SDG Goals**: SDG 9 (Innovation) & SDG 11 (Sustainable Cities)
- **Built by**: [Your Name/Team]
- **Year**: 2025

---

## License

MIT License - Free for educational use

---

## Support

For issues or questions:
- Check the code comments
- Review mock data in `/data` folder
- Inspect browser console for errors

---

**🚀 Ready to present!**

The prototype is fully functional and demo-ready. Use the provided credentials to explore both tourist and authority panels.

---

## Screenshots

*(Add screenshots here after running the app)*

- Landing Page
- Login Screen
- Tourist Dashboard
- Authority Dashboard
- E-FIR Generator

---

**Built with ❤️ for Smart Tourism Safety**
