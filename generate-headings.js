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

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
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

const FONT_SANS = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const FONT_MONO = "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, monospace";

/**
 * 1. HEADINGS DEFINITIONS
 */
const headings = [
  {
    filename: 'name.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 72" width="680" height="72" fill="none" role="img" aria-label="PAPNEET SWAIN">
  <!-- Subtle Multiverse Terminal Tag -->
  <text x="50%" y="16" fill="#9CA3AF" font-family="${FONT_MONO}" font-size="10.5px" font-weight="600" letter-spacing="3.5px" text-anchor="middle">
    // MULTIVERSE DESIGNATION: EARTH-1610 //
  </text>
  <!-- Primary Red Name -->
  <text x="50%" y="54" fill="#FF3131" font-family="${FONT_SANS}" font-size="36px" font-weight="800" letter-spacing="5px" text-anchor="middle">
    PAPNEET SWAIN
  </text>
  <!-- Framing Ticks -->
  <path d="M 40 38 L 24 38 L 24 54" stroke="#991B1B" stroke-width="1.5" fill="none" />
  <path d="M 640 38 L 656 38 L 656 54" stroke="#991B1B" stroke-width="1.5" fill="none" />
</svg>`
  },
  {
    filename: 'tagline.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 28" width="620" height="28" fill="none" role="img" aria-label="With Great Code Comes Great Responsibility">
  <text x="50%" y="18" fill="#DC2626" font-family="${FONT_SANS}" font-size="13px" font-weight="600" letter-spacing="3px" text-anchor="middle">
    &#x25C6; WITH GREAT CODE COMES GREAT RESPONSIBILITY &#x25C6;
  </text>
</svg>`
  },
  {
    filename: 'about.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 34" width="380" height="34" fill="none" role="img" aria-label="About Me">
  <text x="0" y="24" fill="#991B1B" font-family="${FONT_MONO}" font-size="14px" font-weight="700" letter-spacing="2px">01 //</text>
  <text x="50" y="24" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">ABOUT ME</text>
  <line x1="195" y1="18" x2="360" y2="18" stroke="#252B36" stroke-width="1.2" />
  <polygon points="360,15 366,18 360,21" fill="#DC2626" />
</svg>`
  },
  {
    filename: 'tech-stack.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 34" width="490" height="34" fill="none" role="img" aria-label="Tech Stack and Arsenal">
  <text x="0" y="24" fill="#991B1B" font-family="${FONT_MONO}" font-size="14px" font-weight="700" letter-spacing="2px">02 //</text>
  <text x="50" y="24" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">TECH STACK &amp; ARSENAL</text>
  <line x1="330" y1="18" x2="470" y2="18" stroke="#252B36" stroke-width="1.2" />
  <polygon points="470,15 476,18 470,21" fill="#DC2626" />
</svg>`
  },
  {
    filename: 'languages.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 24" width="220" height="24" fill="none" role="img" aria-label="Languages">
  <text x="0" y="17" fill="#DC2626" font-family="${FONT_MONO}" font-size="12px" font-weight="700">&#x25B8;</text>
  <text x="16" y="17" fill="#FF3131" font-family="${FONT_SANS}" font-size="13.5px" font-weight="700" letter-spacing="2px">LANGUAGES</text>
</svg>`
  },
  {
    filename: 'development.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 24" width="240" height="24" fill="none" role="img" aria-label="Development">
  <text x="0" y="17" fill="#DC2626" font-family="${FONT_MONO}" font-size="12px" font-weight="700">&#x25B8;</text>
  <text x="16" y="17" fill="#FF3131" font-family="${FONT_SANS}" font-size="13.5px" font-weight="700" letter-spacing="2px">DEVELOPMENT</text>
</svg>`
  },
  {
    filename: 'tools.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 24" width="280" height="24" fill="none" role="img" aria-label="Tools and Platforms">
  <text x="0" y="17" fill="#DC2626" font-family="${FONT_MONO}" font-size="12px" font-weight="700">&#x25B8;</text>
  <text x="16" y="17" fill="#FF3131" font-family="${FONT_SANS}" font-size="13.5px" font-weight="700" letter-spacing="2px">TOOLS &amp; PLATFORMS</text>
</svg>`
  },
  {
    filename: 'stats.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 34" width="380" height="34" fill="none" role="img" aria-label="Spider Stats">
  <text x="0" y="24" fill="#991B1B" font-family="${FONT_MONO}" font-size="14px" font-weight="700" letter-spacing="2px">03 //</text>
  <text x="50" y="24" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">SPIDER STATS</text>
  <line x1="220" y1="18" x2="360" y2="18" stroke="#252B36" stroke-width="1.2" />
  <polygon points="360,15 366,18 360,21" fill="#DC2626" />
</svg>`
  },
  {
    filename: 'contributions.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 34" width="490" height="34" fill="none" role="img" aria-label="The Contribution Web">
  <text x="0" y="24" fill="#991B1B" font-family="${FONT_MONO}" font-size="14px" font-weight="700" letter-spacing="2px">04 //</text>
  <text x="50" y="24" fill="#FF3131" font-family="${FONT_SANS}" font-size="21px" font-weight="800" letter-spacing="2.5px">THE CONTRIBUTION WEB</text>
  <line x1="335" y1="18" x2="470" y2="18" stroke="#252B36" stroke-width="1.2" />
  <polygon points="470,15 476,18 470,21" fill="#DC2626" />
</svg>`
  },
  {
    filename: 'footer.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 34" width="620" height="34" fill="none" role="img" aria-label="Your Friendly Neighborhood Developer">
  <text x="50%" y="24" fill="#FF3131" font-family="${FONT_SANS}" font-size="17.5px" font-weight="800" letter-spacing="3.5px" text-anchor="middle">
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
    filename: 'terminal-decoration.svg',
    generate: () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 888 28" width="100%" height="28" fill="none" role="presentation">
  <!-- Terminal Title Bar -->
  <rect x="0.5" y="0.5" width="887" height="27" rx="6" fill="#11151D" stroke="#252B36" stroke-width="1" />
  <!-- Window Controls -->
  <circle cx="18" cy="14" r="4" fill="#FF3131" />
  <circle cx="32" cy="14" r="4" fill="#DC2626" />
  <circle cx="46" cy="14" r="4" fill="#991B1B" />
  <!-- Terminal Prompt Title -->
  <text x="50%" y="18" fill="#9CA3AF" font-family="${FONT_MONO}" font-size="11px" font-weight="600" letter-spacing="1.5px" text-anchor="middle">
    papneet@spider-verse:~ // developer.java
  </text>
  <text x="865" y="18" fill="#252B36" font-family="${FONT_MONO}" font-size="12px" text-anchor="end">&#x2756;</text>
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
  console.log('--- Generating Spider-Verse Design System SVGs ---');
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
