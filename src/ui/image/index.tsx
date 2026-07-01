import NextJsImage from 'next/image';

type Props = {
  className?: string;
  size?: string;
  src: string;
  thumb: string;
};

export default function Image({
  className = '',
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
      placeholder="blur"
      sizes={size === 'large' ? '80svw' : '50svw'}
      src={src}
      width={768}
    />
  );
}
