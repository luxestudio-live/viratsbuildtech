import { assetPath } from '@/lib/asset-path'

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

export function Img({ src, loading, ...props }: ImgProps) {
  return (
    <img 
      src={assetPath(src)} 
      loading={loading || 'lazy'}
      decoding="async"
      {...props} 
    />
  )
}
