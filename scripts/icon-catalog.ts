/**
 * Icon Catalog Generator
 * This script reads all SVG icons from the RemixIcon icons directory and generates a JSON catalog
 * with details about each icon's name, category, and suggested usage.
 */

import * as fs from 'fs';
import * as path from 'path';

// Define interface for tags data structure
interface TagsData {
    [category: string]: {
        [iconName: string]: string;
    };
}

// Define interface for icon information
interface IconInfo {
  name: string;          // Icon name without file extension
  path: string;          // Relative path to the icon 
  category: string;      // Category based on directory
  style: 'fill' | 'line'; // Style of the icon
  usage: string;         // Suggested usage of the icon
  baseName: string;      // Base name without style suffix
  tags: string[];        // Tags from tags.json
}

// Define interface for the output JSON
interface IconCatalog {
  icons: IconInfo[];
  totalIcons: number;
  categories: { [key: string]: number }; // Categories with icon count
  lastUpdated: string;
}

// Load tags data from tags.json
function loadTags(): TagsData {
  try {
    const tagsPath = path.resolve(__dirname, '../tags.json');
    const tagsContent = fs.readFileSync(tagsPath, 'utf-8');
    const tagsData = JSON.parse(tagsContent);
    // Remove _comment field if it exists
    delete tagsData._comment;
    return tagsData;
  } catch (error) {
    console.warn('Warning: Could not load tags.json:', error);
    return {};
  }
}

/**
 * Cleans a category name for better readability
 * @param category Raw directory name
 * @returns Cleaned category name
 */
function cleanCategoryName(category: string): string {
  // Replace & with 'and', handle spaces, etc.
  return category.replace(/&/g, 'and').replace(/\s+/g, ' ').trim();
}

/**
 * Gets tags for an icon from tags.json data
 * @param baseName Base icon name
 * @param category Icon category
 * @param tagsData Tags data from tags.json
 * @returns Array of tags
 */
function getIconTags(baseName: string, category: string, tagsData: TagsData): string[] {
  try {
    const categoryTags = tagsData[category];
    if (categoryTags && categoryTags[baseName]) {
      return categoryTags[baseName].split(',').map(tag => tag.trim());
    }
  } catch (error) {
    console.warn(`Warning: Could not get tags for ${category}/${baseName}`);
  }
  return [];
}

/**
 * Generates a descriptive usage for an icon based on its name, category and tags
 * @param baseName Base icon name
 * @param category Icon category
 * @param style Icon style
 * @param tags Icon tags
 * @returns Generated usage description
 */
function generateUsage(baseName: string, category: string, style: 'fill' | 'line', tags: string[]): string {
  // Format base name by replacing hyphens with spaces and capitalizing words
  const formattedName = baseName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const styleDesc = style === 'fill' ? 'filled' : 'outlined';
  const cleanCategory = cleanCategoryName(category);
  
  // Include first few English tags in the usage description if available
  const englishTags = tags.filter(tag => /^[a-zA-Z\s]+$/.test(tag)).slice(0, 3);
  const tagDesc = englishTags.length > 0 ? ` (${englishTags.join(', ')})` : '';
  
  return `${styleDesc} ${formattedName} icon for ${cleanCategory.toLowerCase()} related functionality${tagDesc}`;
}

/**
 * Processes an icon file to extract its information
 * @param filePath Relative path to the icon file
 * @param category Category based on directory name
 * @param tagsData Tags data from tags.json
 * @returns Icon information object
 */
function processIcon(filePath: string, category: string, tagsData: TagsData): IconInfo {
  const fileName = path.basename(filePath);
  const fileNameWithoutExt = fileName.replace('.svg', '');
  
  // Determine if it's a fill or line style icon
  const style = fileNameWithoutExt.endsWith('-fill') ? 'fill' : 'line';
  
  // Extract the base name (without -fill or -line suffix)
  const baseName = fileNameWithoutExt.replace(/-fill$/, '').replace(/-line$/, '');
  
  // Get tags from tags.json
  const tags = getIconTags(baseName, category, tagsData);
  
  // Generate usage suggestion
  const usage = generateUsage(baseName, category, style, tags);
  
  return {
    name: fileNameWithoutExt,
    path: filePath.replace(/\\/g, '/'), // Ensure forward slashes for consistency
    category,
    style,
    usage,
    baseName,
    tags
  };
}

/**
 * Recursively scans a directory for SVG files
 * @param dir Directory to scan
 * @param iconsRoot Root directory of icons (for calculating relative paths)
 * @param tagsData Tags data from tags.json
 * @returns Array of icon information objects
 */
function scanDirectory(dir: string, iconsRoot: string, tagsData: TagsData): IconInfo[] {
  const result: IconInfo[] = [];
  const files = fs.readdirSync(dir);
  
  // Get category name from directory path
  const category = path.basename(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively scan subdirectories
      result.push(...scanDirectory(filePath, iconsRoot, tagsData));
    } else if (file.endsWith('.svg')) {
      // Process SVG files
      const relativePath = path.relative(iconsRoot, filePath);
      result.push(processIcon(relativePath, category, tagsData));
    }
  });
  
  return result;
}

/**
 * Main function to generate the icon catalog
 * @param iconsRoot Path to the icons root directory
 * @param outputPath Path where to save the JSON output
 */
function generateIconCatalog(iconsRoot: string, outputPath: string): void {
  console.log(`Scanning RemixIcon icons in: ${iconsRoot}`);
  
  // Load tags data
  const tagsData = loadTags();
  
  // Scan all directories for icons
  const icons = scanDirectory(iconsRoot, path.dirname(iconsRoot), tagsData);
  
  // Count icons per category
  const categoryCount: { [key: string]: number } = {};
  icons.forEach(icon => {
    if (!categoryCount[icon.category]) {
      categoryCount[icon.category] = 0;
    }
    categoryCount[icon.category]++;
  });
  
  // Create catalog object
  const catalog: IconCatalog = {
    icons,
    totalIcons: icons.length,
    categories: categoryCount,
    lastUpdated: new Date().toISOString()
  };
  
  // Write to JSON file
  fs.writeFileSync(outputPath, JSON.stringify(catalog, null, 2));
  
  console.log(`RemixIcon catalog generated with ${icons.length} icons across ${Object.keys(categoryCount).length} categories`);
  console.log(`Catalog saved to: ${outputPath}`);
}

// Script execution point
const iconsRoot = path.resolve(__dirname, '../icons');
const outputPath = path.resolve(__dirname, '../icon-catalog.json');

try {
  generateIconCatalog(iconsRoot, outputPath);
} catch (error) {
  console.error('Error generating icon catalog:', error);
  process.exit(1);
} 