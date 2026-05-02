import NextJsImage from 'next/image';

type Props = {
  className?: string;
  priority?: boolean;
  quality?: number;
  size?: string;
  src: string;
  thumb?: string;
};

export default function Image({
  className = '',
  priority,
  quality,
  size,
  src,
  thumb,
}: Props) {
  return (
    <NextJsImage
      alt=""
      blurDataURL={thumb}
      className={className}
      draggable="false"
      height={432}
      key={src}
      loading={priority ? 'eager' : 'lazy'}
      placeholder={thumb ? 'blur' : 'empty'}
      quality={quality}
      sizes={size === 'large' ? '80vw' : '33vw'}
      src={src}
      width={768}
    />
  );
}
