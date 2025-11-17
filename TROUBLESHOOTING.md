# RakshaSetu - Troubleshooting Guide

## Common Issues and Solutions

### 1. TailwindCSS Error (FIXED ✅)

**Error Message:**
```
Error: It looks like you're trying to use `tailwindcss` directly as a PostCSS plugin
```

**Solution:**
This has been fixed! The project now uses TailwindCSS 3.4.1 which is stable and compatible.

**What was changed:**
- Downgraded from TailwindCSS 4.x to 3.4.1
- Updated `globals.css` to use `@tailwind` directives
- Configured `postcss.config.js` correctly

---

### 2. Port Already in Use

**Error Message:**
```
Port 3000 is in use
```

**Solution:**
Next.js automatically uses the next available port (3001, 3002, etc.)
Just use the URL shown in the terminal.

---

### 3. Module Not Found Errors

**Solution:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

### 4. Build Errors

**Solution:**
```bash
# Clean build cache
rm -rf .next
npm run dev
```

---

### 5. TypeScript Errors

**Solution:**
The project is configured correctly. If you see TypeScript errors:
```bash
# Restart your IDE/editor
# Or rebuild the project
npm run build
```

---

### 6. Styles Not Loading

**Symptoms:**
- Page loads but no colors/styling
- Everything looks plain/unstyled

**Solution:**
1. Check that `app/globals.css` has the TailwindCSS directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Restart the dev server:
   ```bash
   Ctrl+C (to stop)
   npm run dev
   ```

---

### 7. Data Not Loading

**Symptoms:**
- Empty dashboards
- No tourists/alerts shown

**Solution:**
Check that JSON files exist in `/data` folder:
- tourists.json
- alerts.json
- systemLogs.json
- users.json

All files should be present and contain valid JSON.

---

### 8. Login Not Working

**Symptoms:**
- Can't login with provided credentials
- Redirects to login page

**Solution:**
Use exact credentials:
- Tourist: `amaan@tourist.com` / `tourist123`
- Authority: `officer@authority.com` / `authority123`

**Note:** Credentials are case-sensitive!

---

### 9. Animations Not Working

**Symptoms:**
- No smooth transitions
- Static/jerky movements

**Solution:**
Framer Motion is installed. If animations don't work:
```bash
npm install framer-motion@latest
npm run dev
```

---

### 10. Charts Not Displaying

**Symptoms:**
- Empty chart containers
- Console errors about Recharts

**Solution:**
```bash
npm install recharts
npm run dev
```

---

## Development Tips

### Hot Reload Not Working
```bash
# Hard refresh browser
Ctrl+Shift+R (Windows/Linux)
Cmd+Shift+R (Mac)
```

### Clear Browser Cache
```bash
# Open DevTools (F12)
# Right-click refresh button
# Select "Empty Cache and Hard Reload"
```

### Check Console for Errors
Press F12 to open browser DevTools and check the Console tab for any JavaScript errors.

---

## Environment Setup

### Verify Node.js Version
```bash
node --version
# Should be 18.x or higher
```

### Verify npm Version
```bash
npm --version
# Should be 9.x or higher
```

### Check Package Installation
```bash
npm list
# Should show all packages installed
```

---

## Performance Issues

### Slow Initial Load
This is normal for the first load. Turbopack is compiling the pages.
Subsequent loads will be faster.

### Memory Issues
If you get out of memory errors:
```bash
# Increase Node memory limit
$env:NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
```

---

## Browser Compatibility

### Recommended Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+

### Known Issues
- Safari < 14: Some CSS features may not work
- IE 11: Not supported (use modern browser)

---

## Quick Fixes Checklist

Before asking for help, try these:

- [ ] Stop and restart dev server
- [ ] Clear browser cache and hard reload
- [ ] Delete `.next` folder and restart
- [ ] Run `npm install` again
- [ ] Check browser console for errors
- [ ] Verify you're on the correct port
- [ ] Check that all JSON files exist in `/data`
- [ ] Verify Node.js version is 18+

---

## Still Having Issues?

1. **Check the logs:**
   Look at the terminal where `npm run dev` is running

2. **Read error messages carefully:**
   They usually tell you what's wrong

3. **Google the error:**
   Most errors have solutions online

4. **Check Next.js docs:**
   https://nextjs.org/docs

5. **Check TailwindCSS docs:**
   https://tailwindcss.com/docs

---

## File Structure Issues

### Missing Files
All required files should be in place. If something is missing:

```
RakshaSetu/
├── app/                    ✓ Required
├── components/             ✓ Required
├── data/                   ✓ Required
├── package.json            ✓ Required
├── tailwind.config.js      ✓ Required
├── tsconfig.json          ✓ Required
└── postcss.config.js      ✓ Required
```

---

## Getting Help

If you still have issues:

1. Note the exact error message
2. Note what you were doing when it happened
3. Check if the issue happens on a fresh install
4. Document the steps to reproduce

---

## Success Indicators

Your setup is working correctly if:

✅ `npm run dev` starts without errors
✅ Browser loads http://localhost:3001 (or shown port)
✅ Landing page displays with animations
✅ Login page loads
✅ Can login with demo credentials
✅ Dashboards show data and charts
✅ No console errors in browser DevTools

---

## Current Status: ✅ WORKING

The application is currently configured correctly and running!

- TailwindCSS: 3.4.1 ✅
- Next.js: 16.0.1 ✅
- All dependencies installed ✅
- Dev server running on port 3001 ✅

---

**Last Updated:** November 1, 2025
**Status:** All issues resolved
