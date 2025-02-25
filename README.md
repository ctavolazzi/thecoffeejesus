# TheCoffeeJesus Website

This is a minimalist splash page for thecoffeejesus.com.

## Structure

The website has been simplified to a single page with:

- Home page with hero image
- Minimal about section
- Ko-fi support button

## Removed Content

The following elements have been removed from the website:

- All pages except for index.html (about, blog, coffee, contact, etc.)
- Johnny Autoseed references and component
- The Multiverse School section and links
- Buy My Time component (booking links)
- Projects, Games, Blog, and Archive directories
- Hamburger menu and mobile navigation (simplified to just the logo/brand link)
- Newsletter signup ("Join the Congregation") section
- Mission statement with "Connect, Grow, Transform" icons
- Social media links
- Personal references and Adobe mentions
- First-person language

## Components

The website uses the following web components:

- `hero-element`: Displays the main hero image
- `navbar`: Simplified navigation bar with just the brand name

## Design Changes

- Reduced header size (from 12vw to 6vw)
- Simplified the about section to a single sentence
- Removed all personal references and links

## Maintenance

If you need to update the site:

1. The main content is in `index.html`
2. Component JavaScript files are in the `/components` directory
3. Static assets are in the `/static` directory
4. Styling uses a combination of Tailwind CSS and custom styles

## Hosting

The site is statically hosted and can be deployed through your existing hosting service.

## Development

To run the site locally:

```bash
# If you have a simple HTTP server installed
npx http-server .

# Or with Python
python -m http.server
```

Visit `http://localhost:8080` (or the port shown in your terminal) to view the site.