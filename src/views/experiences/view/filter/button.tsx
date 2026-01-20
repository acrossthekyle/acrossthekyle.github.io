'use client';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  onClick: () => void;
};

export default function Button({ children, onClick, ...rest }: Props) {
  return (
    <button
      onClick={onClick}
      type="button"
      {...rest}
    >
      <u><em>{children}</em></u>
    </button>
  );
}
