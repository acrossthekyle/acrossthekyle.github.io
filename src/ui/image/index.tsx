import NextJsImage from 'next/image';

type Props = {
  className?: string;
  src: string;
  thumb?: string;
};

export default function Image({
  className = '',
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
      placeholder={thumb ? 'blur' : undefined}
      src={src}
      width={768}
    />
  );
}
