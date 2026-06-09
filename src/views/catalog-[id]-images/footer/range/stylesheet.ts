import tw from '@/styles';

const styles = tw({
  container: `
    w-32 h-px
    bg-(--foreground)/20

    rounded-lg
    appearance-none
    cursor-pointer
    outline-none

    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-1
    [&::-webkit-slider-thumb]:h-3.5
    [&::-webkit-slider-thumb]:rounded-none
    [&::-webkit-slider-thumb]:bg-(--foreground)
    [&::-moz-range-thumb]:w-1
    [&::-moz-range-thumb]:h-3.5
    [&::-moz-range-thumb]:border-none
    [&::-moz-range-thumb]:rounded-none
    [&::-moz-range-thumb]:bg-(--foreground)
  `,
});

export default styles;
