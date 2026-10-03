/**
 * generate-headings.js
 * 
 * Standalone Node.js generator for Spider-Verse developer identity SVGs.
 * Generates transparent heading typography and minimal geometric interface visuals.
 *
 * Palette:
 * - PRIMARY RED: #FF3131
 * - SOFT RED: #DC2626
 * - DEEP RED: #991B1B
 * - PRIMARY TEXT: #F0F0F0
 * - SECONDARY TEXT: #9CA3AF
 * - SUBTLE BORDER: #252B36
 * - DARK BG: #11151D / #0D1117
 */

const fs = require('fs');
const path = require('path');

const HEADINGS_DIR = path.join(__dirname, 'assets', 'headings');
const VISUALS_DIR = path.join(__dirname, 'assets', 'visuals');

[HEADINGS_DIR, VISUALS_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const FONT_SANS = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const FONT_MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";

/**
 * 1. HEADINGS DEFINITIONS
 * Simplified: Clean, normal headings without numbers, lines, or arrow decorations.
 * Hero: Preserves name typography and red corner brackets; tagline without diamonds.
 */
const headings = [
  {
    filename: 'name.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 52" width="680" height="52" fill="none" role="img" aria-label="PAPNEET SWAIN">
  <!-- Primary Red Name -->
  <text x="50%" y="38" fill="#FF3131" font-family="${FONT_SANS}" font-size="36px" font-weight="800" letter-spacing="5px" text-anchor="middle">
    PAPNEET SWAIN
  </text>
  <!-- Red Corner Brackets -->
  <path d="M 40 22 L 24 22 L 24 38" stroke="#991B1B" stroke-width="1.5" fill="none" />
  <path d="M 640 22 L 656 22 L 656 38" stroke="#991B1B" stroke-width="1.5" fill="none" />
</svg>`
  },
  {
    filename: 'tagline.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 26" width="580" height="26" fill="none" role="img" aria-label="With Great Code Comes Great Responsibility">
  <text x="50%" y="18" fill="#DC2626" font-family="${FONT_SANS}" font-size="13px" font-weight="600" letter-spacing="3px" text-anchor="middle">
    WITH GREAT CODE COMES GREAT RESPONSIBILITY
  </text>
</svg>`
  },
  {
    filename: 'about.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 30" width="180" height="30" fill="none" role="img" aria-label="About Me">
  <text x="0" y="22" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">ABOUT ME</text>
</svg>`
  },
  {
    filename: 'tech-stack.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 30" width="360" height="30" fill="none" role="img" aria-label="Tech Stack and Arsenal">
  <text x="0" y="22" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">TECH STACK &amp; ARSENAL</text>
</svg>`
  },
  {
    filename: 'languages.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 22" width="150" height="22" fill="none" role="img" aria-label="Languages">
  <text x="0" y="16" fill="#FF3131" font-family="${FONT_SANS}" font-size="13.5px" font-weight="700" letter-spacing="2px">LANGUAGES</text>
</svg>`
  },
  {
    filename: 'development.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 170 22" width="170" height="22" fill="none" role="img" aria-label="Development">
  <text x="0" y="16" fill="#FF3131" font-family="${FONT_SANS}" font-size="13.5px" font-weight="700" letter-spacing="2px">DEVELOPMENT</text>
</svg>`
  },
  {
    filename: 'tools.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 22" width="230" height="22" fill="none" role="img" aria-label="Tools and Platforms">
  <text x="0" y="16" fill="#FF3131" font-family="${FONT_SANS}" font-size="13.5px" font-weight="700" letter-spacing="2px">TOOLS &amp; PLATFORMS</text>
</svg>`
  },
  {
    filename: 'stats.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 30" width="210" height="30" fill="none" role="img" aria-label="Spider Stats">
  <text x="0" y="22" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">SPIDER STATS</text>
</svg>`
  },
  {
    filename: 'contributions.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 30" width="350" height="30" fill="none" role="img" aria-label="The Contribution Web">
  <text x="0" y="22" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">THE CONTRIBUTION WEB</text>
</svg>`
  },
  {
    filename: 'footer.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 30" width="580" height="30" fill="none" role="img" aria-label="Your Friendly Neighborhood Developer">
  <text x="50%" y="21" fill="#FF3131" font-family="${FONT_SANS}" font-size="17.5px" font-weight="800" letter-spacing="3.5px" text-anchor="middle">
    YOUR FRIENDLY NEIGHBORHOOD DEVELOPER
  </text>
</svg>`
  }
];

/**
 * 2. VISUAL ASSETS DEFINITIONS
 */
const visuals = [
  {
    filename: 'web-divider.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 888 20" width="100%" height="20" fill="none" role="separator">
  <!-- Left Hairline -->
  <line x1="0" y1="10" x2="390" y2="10" stroke="#252B36" stroke-width="1" />
  <line x1="330" y1="10" x2="390" y2="10" stroke="#991B1B" stroke-width="1" stroke-opacity="0.8" />
  
  <!-- Center Web Nexus -->
  <circle cx="444" cy="10" r="3" fill="#FF3131" />
  <polygon points="444,3 451,10 444,17 437,10" stroke="#DC2626" stroke-width="1" fill="none" />
  <polygon points="444,0 458,10 444,20 430,10" stroke="#252B36" stroke-width="0.8" fill="none" stroke-dasharray="2,2" />
  
  <!-- Right Hairline -->
  <line x1="498" y1="10" x2="558" y2="10" stroke="#991B1B" stroke-width="1" stroke-opacity="0.8" />
  <line x1="498" y1="10" x2="888" y2="10" stroke="#252B36" stroke-width="1" />
</svg>`
  },
  {
    filename: 'status-bar.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 30" width="460" height="30" fill="none" role="img" aria-label="Developer Status Indicators">
  <!-- Badge 1: STATUS -->
  <rect x="0.5" y="0.5" width="220" height="29" rx="4" fill="#11151D" stroke="#252B36" stroke-width="1" />
  <circle cx="16" cy="15" r="3.5" fill="#FF3131" />
  <text x="28" y="19" fill="#9CA3AF" font-family="${FONT_MONO}" font-size="10.5px" font-weight="600" letter-spacing="1px">STATUS:</text>
  <text x="80" y="19" fill="#F0F0F0" font-family="${FONT_MONO}" font-size="10.5px" font-weight="700" letter-spacing="1px">ON THE GRIND</text>

  <!-- Badge 2: UNIVERSE -->
  <rect x="230.5" y="0.5" width="229" height="29" rx="4" fill="#11151D" stroke="#252B36" stroke-width="1" />
  <polygon points="246,11 250,15 246,19 242,15" fill="#DC2626" />
  <text x="258" y="19" fill="#9CA3AF" font-family="${FONT_MONO}" font-size="10.5px" font-weight="600" letter-spacing="1px">UNIVERSE:</text>
  <text x="325" y="19" fill="#FF3131" font-family="${FONT_MONO}" font-size="10.5px" font-weight="700" letter-spacing="1px">SPIDER-VERSE</text>
</svg>`
  },
  {
    filename: 'footer-decoration.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 20" width="320" height="20" fill="none" role="presentation">
  <line x1="0" y1="10" x2="120" y2="10" stroke="#252B36" stroke-width="1" />
  <polygon points="120,7 126,10 120,13" fill="#991B1B" />
  <circle cx="160" cy="10" r="2.5" fill="#FF3131" />
  <polygon points="200,7 194,10 200,13" fill="#991B1B" />
  <line x1="200" y1="10" x2="320" y2="10" stroke="#252B36" stroke-width="1" />
</svg>`
  }
];

function generate() {
  console.log('--- Generating Clean Spider-Verse Heading SVGs ---');
  let headingCount = 0;
  for (const item of headings) {
    const filePath = path.join(HEADINGS_DIR, item.filename);
    const content = item.generate();
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Created assets/headings/${item.filename}`);
    headingCount++;
  }

  let visualCount = 0;
  for (const item of visuals) {
    const filePath = path.join(VISUALS_DIR, item.filename);
    const content = item.generate();
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Created assets/visuals/${item.filename}`);
    visualCount++;
  }

  console.log(`Successfully generated ${headingCount} headings and ${visualCount} visual SVGs.`);
}

if (require.main === module) {
  try {
    generate();
  } catch (err) {
    console.error('Error during SVG generation:', err);
    process.exit(1);
  }
}

module.exports = { generate, headings, visuals };
