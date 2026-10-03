/**
 * generate-headings.js
 * Generates transparent SVGs for GitHub profile headings with Spider-Man red typography.
 */

const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'assets', 'headings');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

/**
 * Creates SVG markup with transparent background and red typography.
 */
function createSvg({
  text,
  width,
  height,
  fontSize,
  fontWeight = 700,
  letterSpacing = '2px',
  color = '#FF3131',
  align = 'start', // 'start' or 'middle'
  fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  ariaLabel
}) {
  const x = align === 'middle' ? '50%' : '0';
  const escapedText = escapeXml(text);
  const label = escapeXml(ariaLabel || text);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" fill="none" role="img" aria-label="${label}">
  <text
    x="${x}"
    y="52%"
    fill="${color}"
    font-family="${fontFamily}"
    font-size="${fontSize}px"
    font-weight="${fontWeight}"
    letter-spacing="${letterSpacing}"
    text-anchor="${align}"
    dominant-baseline="middle"
  >${escapedText}</text>
</svg>
`;
}

const headings = [
  {
    filename: 'name.svg',
    text: 'PAPNEET SWAIN',
    width: 460,
    height: 48,
    fontSize: 34,
    fontWeight: 800,
    letterSpacing: '4px',
    color: '#FF3131',
    align: 'middle',
    ariaLabel: 'PAPNEET SWAIN'
  },
  {
    filename: 'tagline.svg',
    text: 'WITH GREAT CODE COMES GREAT RESPONSIBILITY',
    width: 580,
    height: 28,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: '3px',
    color: '#DC2626', // Softer crimson accent for tagline
    align: 'middle',
    ariaLabel: 'With Great Code Comes Great Responsibility'
  },
  {
    filename: 'about.svg',
    text: 'ABOUT ME',
    width: 200,
    height: 32,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '2.5px',
    color: '#FF3131',
    align: 'start',
    ariaLabel: 'About Me'
  },
  {
    filename: 'tech-stack.svg',
    text: 'TECH STACK & ARSENAL',
    width: 380,
    height: 32,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '2.5px',
    color: '#FF3131',
    align: 'start',
    ariaLabel: 'Tech Stack and Arsenal'
  },
  {
    filename: 'languages.svg',
    text: 'LANGUAGES',
    width: 160,
    height: 24,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '2px',
    color: '#FF3131',
    align: 'start',
    ariaLabel: 'Languages'
  },
  {
    filename: 'development.svg',
    text: 'DEVELOPMENT',
    width: 180,
    height: 24,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '2px',
    color: '#FF3131',
    align: 'start',
    ariaLabel: 'Development'
  },
  {
    filename: 'tools.svg',
    text: 'TOOLS & PLATFORMS',
    width: 240,
    height: 24,
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: '2px',
    color: '#FF3131',
    align: 'start',
    ariaLabel: 'Tools and Platforms'
  },
  {
    filename: 'stats.svg',
    text: 'SPIDER STATS',
    width: 240,
    height: 32,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '2.5px',
    color: '#FF3131',
    align: 'start',
    ariaLabel: 'Spider Stats'
  },
  {
    filename: 'contributions.svg',
    text: 'THE CONTRIBUTION WEB',
    width: 380,
    height: 32,
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: '2.5px',
    color: '#FF3131',
    align: 'start',
    ariaLabel: 'The Contribution Web'
  },
  {
    filename: 'footer.svg',
    text: 'YOUR FRIENDLY NEIGHBORHOOD DEVELOPER',
    width: 540,
    height: 32,
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: '3px',
    color: '#FF3131',
    align: 'middle',
    ariaLabel: 'Your Friendly Neighborhood Developer'
  }
];

function generate() {
  console.log('Generating heading SVGs into assets/headings/ ...');
  let count = 0;
  for (const item of headings) {
    const filePath = path.join(OUTPUT_DIR, item.filename);
    const content = createSvg(item);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Created ${item.filename}`);
    count++;
  }
  console.log(`Successfully generated ${count} heading SVGs.`);
}

if (require.main === module) {
  generate();
}

module.exports = { generate, headings, createSvg };
