# Syntropy Engineering Solutions - Deployment Instructions

## 🚀 Fix for Deployed Site Issue

The deployed site at https://syntropygh.com/ is showing content shifted to the left due to CSS caching/versioning issues. This document provides step-by-step instructions to fix the problem.

## 📋 Problem Summary
- **Issue**: Content appears shifted to the left on deployed site
- **Cause**: Outdated CSS file being served due to caching
- **Solution**: Upload updated CSS file and clear caches

## 📁 Files to Upload

### 1. CSS File (CRITICAL)
**File**: `css/style.css`
**Location on server**: `/css/style.css` (relative to website root)

**Action**: Replace the existing CSS file with the updated version

### 2. HTML File (Optional - if needed)
**File**: `index.html`
**Location on server**: `/index.html` (website root)

**Action**: Only upload if you want to ensure the latest HTML changes are deployed

## 🔧 Step-by-Step Deployment

### Step 1: Access Your Hosting Control Panel
1. Log in to your hosting provider's control panel
2. Navigate to file manager or FTP access
3. Locate your website's root directory

### Step 2: Upload Updated CSS File
1. **Backup existing CSS** (optional but recommended):
   - Download current `/css/style.css` to your computer
   - Rename it to `style.css.backup` on the server

2. **Upload new CSS file**:
   - Navigate to `/css/` directory
   - Upload the new `style.css` file
   - Confirm it replaces the existing file

### Step 3: Clear Caches
1. **Clear browser cache**:
   - Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
   - Select "Cached images and files"
   - Click "Clear data"

2. **Clear server cache** (if applicable):
   - Check your hosting provider for cache clearing options
   - Clear any CDN cache if you're using a CDN service
   - Clear WordPress cache if using WordPress

### Step 4: Verify Deployment
1. Visit https://syntropygh.com/ in a new browser window
2. Check that:
   - Content is properly centered (not shifted left)
   - About Us title has correct styling (40px, orange color)
   - All sections display correctly
   - Responsive design works on mobile

## 🧪 Testing Checklist

- [ ] Content is centered on desktop
- [ ] About Us title displays correctly (40px, #FE5D37 color)
- [ ] Navigation menu works properly
- [ ] Contact form is aligned correctly
- [ ] Mobile responsiveness works
- [ ] All images load properly
- [ ] No layout shifts or positioning issues

## 🚨 Troubleshooting

### If content is still shifted left:
1. **Force refresh browser**: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)
2. **Check CSS file path**: Ensure CSS is in correct location (`/css/style.css`)
3. **Verify file upload**: Confirm the new CSS file was uploaded successfully
4. **Clear all caches**: Browser, server, and CDN caches

### If CSS doesn't load:
1. **Check file permissions**: CSS file should be readable (644 permissions)
2. **Verify file integrity**: Ensure CSS file uploaded completely
3. **Check browser console**: Look for CSS loading errors

### If changes don't appear:
1. **Wait a few minutes**: Some hosting providers have delayed cache clearing
2. **Try incognito mode**: Browsers cache more aggressively in normal mode
3. **Test from different device**: Rules out local caching issues

## 📞 Support

If you continue to experience issues after following these instructions:

1. **Check browser developer tools**:
   - Open Developer Tools (F12)
   - Go to Network tab
   - Reload page and check if CSS file loads (status 200)
   - Look for any CSS-related errors

2. **Contact your hosting provider**:
   - Ask them to clear server-side caches
   - Verify the CSS file is in the correct location
   - Check for any server configuration issues

## ✅ Success Criteria

After completing these steps, your deployed site should:
- ✅ Display content properly centered
- ✅ Show About Us title with correct styling
- ✅ Have consistent layout across all sections
- ✅ Work responsively on all devices
- ✅ Load all CSS files successfully

## 📝 Notes

- The local development version is working perfectly
- This is purely a deployment/caching issue
- The updated CSS file contains all necessary fixes
- No changes needed to JavaScript or other files