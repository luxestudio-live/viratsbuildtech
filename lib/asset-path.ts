const basePath = process.env.BASE_PATH || ''

export function assetPath(path: string): string {
  // Don't add basePath if it's already there or if it's an external URL
  if (!path || path.startsWith('http') || path.startsWith(basePath)) {
    return path
  }
  return `${basePath}${path}`
}
