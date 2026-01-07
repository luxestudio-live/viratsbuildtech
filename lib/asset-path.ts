export function assetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/viratsbuildtech' : ''
  return `${basePath}${path}`
}
