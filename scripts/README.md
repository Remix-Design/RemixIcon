# RemixIcon Catalog Generator

A TypeScript utility to generate a comprehensive catalog of all [RemixIcon](https://remixicon.com) SVG icons with their names, categories, and suggested usage descriptions. This tool helps developers easily search, categorize and integrate RemixIcon icons into their projects.

## Features

- Recursively scans all icons within the RemixIcon collection
- Automatically categorizes icons based on their directory structure
- Distinguishes between 'fill' and 'line' style variants
- Generates suggested usage descriptions for each icon
- Creates a complete JSON catalog for easy integration with other tools
- Supports incremental updates and caching
- Provides detailed metadata for each icon

## Prerequisites

- [Bun](https://bun.sh) (latest version)
- Node.js 16.x or higher (optional, for development)
- Git (for cloning the repository)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/Remix-Design/remixicon.git
cd scripts
```

2. Install dependencies:
```bash
bun install
```

## Usage

### Generate the Icon Catalog

To generate a fresh catalog of all icons:

```bash
bun run generate-catalog
```

This command will:
1. Run the TypeScript script directly with Bun
2. Recursively scan the icons directory
3. Process and categorize all icons
4. Generate a `icon-catalog.json` file in the root directory

### Development Mode

For development and testing:

```bash
bun run dev
```

This will watch for changes and regenerate the catalog automatically.

## Output Format

The generated JSON file (`icon-catalog.json`) has the following structure:

```json
{
  "icons": [
    {
      "name": "arrow-down-fill",
      "path": "icons/Arrows/arrow-down-fill.svg",
      "category": "Arrows",
      "style": "fill",
      "usage": "filled Arrow Down icon for arrows related functionality",
      "baseName": "arrow-down"
    },
    // ... more icons
  ],
  "totalIcons": 2271,
  "categories": {
    "Arrows": 108,
    "Business": 168,
    // ... more categories with counts
  },
  "lastUpdated": "2023-04-20T14:30:00.000Z"
}
```

## Customization

You can customize the following aspects of the script:

### Output Configuration

- **Output Path**: Change the `outputPath` variable in `icon-catalog.ts`
- **File Format**: Modify the output structure in `types.ts`
- **Compression**: Enable/disable output compression in config



## Acknowledgments

- [RemixIcon](https://remixicon.com) for providing the amazing icon set
- [Bun](https://bun.sh) for the excellent TypeScript runtime 