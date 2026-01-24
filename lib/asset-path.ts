const basePath = process.env.BASE_PATH || ''

export function assetPath(path: string): string {
  // Don't add basePath if it's already there, if it's an external URL, or if it's empty
  if (!path || path.startsWith('http') || path.startsWith('//')) {
    return path
  }
  
  // Check if basePath is already at the start
  if (basePath && path.startsWith(basePath)) {
    return path
  }
  
  // Add basePath to relative paths
  if (basePath && path.startsWith('/')) {
    return `${basePath}${path}`
  }
  
  return path
}

// Helper function for style attributes that may contain image URLs
export function resolveImageUrl(url: string): string {
  return assetPath(url)
}
