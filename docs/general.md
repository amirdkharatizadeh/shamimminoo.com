# Shamim Minoo Website - Route Documentation

## Overview

This SvelteKit application uses a file-based routing system with consistent patterns for content management across different content types. All routes follow a similar structure using dynamic imports of markdown files with frontmatter metadata.

## Route Structure

### 1. Concerts Routes (`/concerts`)

**Purpose**: Manage concert listings and individual concert details

#### `/concerts` - Concert Listing Page
- **File**: `src/routes/concerts/+page.svelte` + `src/routes/concerts/+page.ts`
- **Content Source**: `contents/conserts/*.md` files
- **Data Structure**: Uses `Concert` interface from `$lib/contents.ts`
- **Features**:
  - Lists all concerts (upcoming and past)
  - Sorts upcoming concerts by date (chronological)
  - Sorts past concerts by date (reverse chronological)
  - Filters for featured concerts
  - Uses reusable components: `PageHero`, `ContentSection`, `FeaturedContent`, `SectionCard`

#### `/concerts/[slug]` - Individual Concert Page
- **File**: `src/routes/concerts/[slug]/+page.svelte` + `src/routes/concerts/[slug]/+page.ts`
- **Content Source**: `contents/conserts/{slug}.md`
- **Features**:
  - Detailed concert information with program, venue, tickets
  - Renders markdown content using `<svelte:component this={data.component} />`
  - Status badges (upcoming/past/cancelled)
  - Ticket purchase integration

#### Concert Interface Properties:
```typescript
{
  slug: string
  title: string
  date: string
  time?: string
  venue: string
  location: string
  image?: string
  description: string
  program?: string[]
  tickets?: string
  status: 'upcoming' | 'past' | 'cancelled'
  featured?: boolean
  component?: any // Svelte component for rendered markdown
}
```

---

### 2. News Routes (`/news`)

**Purpose**: Manage news articles and press releases

#### `/news` - News Listing Page
- **File**: `src/routes/news/+page.svelte` + `src/routes/news/+page.ts`
- **Content Source**: `contents/news/*.md` files
- **Data Structure**: Uses `NewsArticle` interface from `$lib/contents.ts`
- **Features**:
  - Lists all news articles sorted by date (newest first)
  - Featured articles section
  - Category filtering
  - Recent articles section (first 6)
  - Uses reusable components: `PageHero`, `ContentSection`, `FeaturedContent`, `NewsCard`

#### `/news/[slug]` - Individual News Article Page
- **File**: `src/routes/news/[slug]/+page.svelte` + `src/routes/news/[slug]/+page.ts`
- **Content Source**: `contents/news/{slug}.md`
- **Features**:
  - Full article content with author, date, read time
  - Category badges with color coding
  - Tag system
  - Social sharing functionality
  - Renders markdown using `<svelte:component this={data.component} />`

#### NewsArticle Interface Properties:
```typescript
{
  slug: string
  title: string
  date: string
  category: string
  image?: string
  excerpt: string
  featured?: boolean
  author?: string
  readTime?: string
  tags?: string[]
  component?: any // Svelte component for rendered markdown
}
```

---

### 3. Pages Routes (`/p`)

**Purpose**: Static content pages (About, Biography, Contact, etc.)

#### `/p/[slug]` - Static Content Pages
- **File**: `src/routes/p/[slug]/+page.svelte` + `src/routes/p/[slug]/+page.ts`
- **Content Source**: `contents/pages/{slug}.md`
- **Data Structure**: Uses `Page` interface from `$lib/contents.ts`
- **Features**:
  - Static content pages with consistent layout
  - Category badges (Biography, Professional, Contact, About, Press)
  - Print functionality
  - Breadcrumb navigation
  - Image support with fallback
  - Read time indicators
  - Tag system
  - Renders markdown using `<svelte:component this={data.component} />`

#### Common Static Pages:
- `/p/about` - About page
- `/p/biography` - Professional biography
- `/p/contact` - Contact information
- `/p/press` - Press kit and materials

#### Page Interface Properties:
```typescript
{
  slug: string
  title: string
  date: string
  category: string
  image?: string
  excerpt: string
  featured?: boolean
  author?: string
  readTime?: string
  tags?: string[]
  component?: any // Svelte component for rendered markdown
}
```

---

### 4. Videos Routes (`/videos`)

**Purpose**: Video gallery with YouTube integration

#### `/videos` - Video Gallery Page
- **File**: `src/routes/videos/+page.svelte` + `src/routes/videos/+page.ts`
- **Content Source**: `contents/videos/*.md` files
- **Data Structure**: Uses `Video` interface from `$lib/contents.ts`
- **Features**:
  - Video listing with YouTube thumbnail integration
  - Featured video section
  - Category browsing (Performance, Masterclass, Cultural, Interview)
  - Recent videos section
  - YouTube channel integration
  - Video request form
  - Uses reusable components: `PageHero`, `ContentSection`, `FeaturedContent`, `VideoCard`

#### `/videos/[slug]` - Individual Video Page
- **File**: `src/routes/videos/[slug]/+page.svelte` + `src/routes/videos/[slug]/+page.ts`
- **Content Source**: `contents/videos/{slug}.md`
- **Features**:
  - YouTube iframe embedding with start time support
  - Video metadata display (date, duration, venue, category)
  - Start time indicators for performances
  - Social sharing (Twitter, Facebook, clipboard)
  - Composer and arrangement information
  - Tag system
  - YouTube channel subscription prompts
  - Renders markdown using `<svelte:component this={data.component} />`

#### Video Interface Properties:
```typescript
{
  slug: string
  title: string
  date: string
  category: string
  youtubeId: string
  startTime?: number
  duration?: string
  image?: string
  excerpt: string
  featured?: boolean
  venue?: string
  location?: string
  composer?: string
  arrangement?: string
  readTime?: string
  tags?: string[]
  component?: any // Svelte component for rendered markdown
}
```

---

## Common Patterns

### 1. Page Loader Pattern
All dynamic routes follow this pattern in their `+page.ts` files:
```typescript
export async function load({ params }) {
  try {
    const module = await import(`../../../../contents/{type}/${params.slug}.md`)
    
    const item: Interface = {
      slug: params.slug,
      ...module.metadata,
      component: module.default
    }

    return {
      [itemName]: item,
      component: module.default,
      frontmatter: module.metadata
    }
  } catch (e) {
    throw error(404, 'Not found')
  }
}
```

### 2. Content Rendering Pattern
All pages render markdown content using:
```svelte
<svelte:component this={data.component} />
```

### 3. Reusable Components
All routes use consistent reusable components:
- `PageHero` - Hero sections with titles, breadcrumbs, and metadata
- `ContentSection` - Consistent content wrappers with variants
- `FeaturedContent` - Large featured content blocks
- `StatusBadge` - Category and status indicators
- Specific card components: `NewsCard`, `VideoCard`, `SectionCard`

### 4. Content Directory Structure
```
contents/
├── conserts/     # Concert markdown files
├── news/         # News article markdown files  
├── pages/        # Static page markdown files
└── videos/       # Video markdown files
```

### 5. Frontmatter Structure
All markdown files include YAML frontmatter with metadata:
```yaml
---
title: "Content Title"
date: "YYYY-MM-DD"
category: "Category Name"
excerpt: "Brief description"
featured: true/false
# Additional properties specific to content type
---
```

## Data Flow

1. **Route Access**: User navigates to route (e.g., `/videos/debussy-danses`)
2. **Page Loader**: `+page.ts` dynamically imports corresponding markdown file
3. **Frontmatter Parsing**: Metadata extracted from YAML frontmatter
4. **Component Creation**: Markdown content compiled to Svelte component
5. **Data Return**: Structured data object returned to page component
6. **Page Rendering**: `+page.svelte` renders using reusable components
7. **Content Display**: Markdown rendered via `<svelte:component>`

This architecture provides:
- **Consistency**: All content types follow same patterns
- **Type Safety**: TypeScript interfaces ensure data structure
- **Maintainability**: Reusable components across all routes
- **Scalability**: Easy to add new content types or items
- **Performance**: Dynamic imports with SvelteKit optimizations