import tw from '@/styles';

const styles = tw({
  container: `
    w-32 h-1
    bg-(--foreground)/20

    rounded-lg
    appearance-none
    cursor-pointer
    outline-none

    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-4
    [&::-webkit-slider-thumb]:h-4
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-(--foreground)
    [&::-moz-range-thumb]:w-4
    [&::-moz-range-thumb]:h-4
    [&::-moz-range-thumb]:border-none
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:bg-(--foreground)
  `,
});

export default styles;
