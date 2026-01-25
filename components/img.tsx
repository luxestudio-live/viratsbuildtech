import { assetPath } from '@/lib/asset-path'

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt?: string
}

export function Img({ src, loading, alt, ...props }: ImgProps) {
  return (
    <img 
      src={assetPath(src)} 
      loading={loading || 'lazy'}
      decoding="async"
      alt={alt || ''}
      {...props} 
    />
  )
}
