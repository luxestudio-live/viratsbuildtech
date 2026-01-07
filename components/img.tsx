import { assetPath } from '@/lib/asset-path'

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

export function Img({ src, ...props }: ImgProps) {
  return <img src={assetPath(src)} {...props} />
}
