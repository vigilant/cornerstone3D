/**
 * Script to generate an llms.txt file following the specification
 * This script generates a single llms.txt file in the build directory
 * with links to all the markdown files that have been copied to the /docs/llm directory
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Base docs directory
const baseDocsDir = path.join(__dirname, '../docs');
// Output directory for LLM markdown files
const llmDir = path.join(__dirname, '../build/docs/llm');
// Output file path for llms.txt
const outputFilePath = path.join(__dirname, '../build/llms.txt');

// Get all subdirectories to create sections
async function getDirectorySections() {
  const directories = new Set();

  // Find all subdirectories that contain markdown files
  const markdownFiles = await glob(`${llmDir}/**/*.md`);

  markdownFiles.forEach((filePath) => {
    // Get the relative directory from the llm dir
    const relativePath = path.relative(llmDir, filePath);
    const dirPath = path.dirname(relativePath);

    // Add to set if it's not in the root
    if (dirPath !== '.') {
      // Get the top-level directory
      const topDir = dirPath.split(path.sep)[0];
      directories.add(topDir);
    }
  });

  return Array.from(directories).sort();
}

// Generate links for a specific section
async function generateSectionLinks(section) {
  const sectionPath = path.join(llmDir, section);
  const links = [];

  // Get all markdown files for this section
  const markdownFiles = await glob(`${sectionPath}/**/*.md`);

  for (const filePath of markdownFiles) {
    // Get the relative path from the llm dir
    const relativePath = path.relative(llmDir, filePath);

    // Read the file to extract title
    const content = fs.readFileSync(filePath, 'utf8');

    // Try to extract title from frontmatter or first heading
    let title = '';
    const frontmatterTitleMatch = content.match(/title:\s*([^\n]+)/);
    const firstHeadingMatch = content.match(/# ([^\n]+)/);

    if (frontmatterTitleMatch) {
      title = frontmatterTitleMatch[1].trim();
      // Remove quotes if present
      title = title.replace(/^["'](.*)["']$/, '$1');
    } else if (firstHeadingMatch) {
      title = firstHeadingMatch[1].trim();
    } else {
      // Use filename as fallback
      title = path.basename(filePath, '.md');
    }

    // Get summary from frontmatter if available
    let summary = '';
    const summaryMatch = content.match(/summary:\s*([^\n]+)/);
    if (summaryMatch) {
      summary = summaryMatch[1].trim();
      // Remove quotes if present
      summary = summary.replace(/^["'](.*)["']$/, '$1');
    }

    // Create URL for the file (relative to site root)
    const url = `/docs/llm/${relativePath}`;

    // Add to links
    links.push({
      title,
      url,
      summary,
    });
  }

  return links.sort((a, b) => a.title.localeCompare(b.title));
}

// Generate the full llms.txt content
async function generateLlmsTxt() {
  let content = '';

  // Add title
  content += '# Cornerstone3D\n\n';

  // Add description blockquote
  content +=
    '> Cornerstone3D is a modern, high-performance JavaScript library for medical imaging, designed for building web-based medical imaging applications. It provides tools for rendering, manipulating, and analyzing medical images in various formats including DICOM.\n\n';

  // Add general information
  content +=
    'Cornerstone3D is a complete rewrite of the original Cornerstone library, with a focus on 3D rendering and improved performance. It includes a suite of tools for annotation, segmentation, and manipulation of medical images.\n\n';
  content += 'The documentation is organized into the following sections:\n\n';

  // Get all sections
  const sections = await getDirectorySections();

  // Process each section
  for (const section of sections) {
    // Get all links for this section
    const links = await generateSectionLinks(section);

    if (links.length > 0) {
      // Add section header
      content += `## ${section.charAt(0).toUpperCase() + section.slice(1)}\n\n`;

      // Add links for this section
      for (const link of links) {
        content += `- [${link.title}](https://cornerstonejs.org${link.url})`;
        if (link.summary) {
          content += `: ${link.summary}`;
        }
        content += '\n';
      }

      content += '\n';
    }
  }

  // Write the llms.txt file
  fs.writeFileSync(outputFilePath, content);
  console.log(`Generated llms.txt file at ${outputFilePath}`);
}

// Run the script
generateLlmsTxt();
