const basePath = '/viratsbuildtech'

export function assetPath(path: string): string {
  // Don't add basePath if it's already there or if it's an external URL
  if (path.startsWith('http') || path.startsWith(basePath)) {
    return path
  }
  return `${basePath}${path}`
}
