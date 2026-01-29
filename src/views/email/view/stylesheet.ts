import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col
  `,
  alert: `
    bg-green-900/30
    border border-green-800/50
    rounded-sm
    p-2
    mb-6
  `,
  label: `
    mt-6 mb-2
    font-medium

    first-of-type:mt-0
  `,
  input: `
    bg-(--foreground)/5
    border border-(--foreground)/7.5
    text-(--foreground)
    p-2
    rounded-sm
  `,
  textarea: `
    bg-(--foreground)/5
    border border-(--foreground)/7.5
    text-(--foreground)
    p-2
    rounded-sm
    resize-y
    min-h-30
  `,
  submit: `
    relative
    w-full
    mt-6
    py-2
    uppercase
    text-sm
    tracking-wide

    duration-300
    rounded-sm
    bg-(--foreground)/7.5
    border border-(--foreground)/7.5

    hover:bg-(--foreground)/25
  `,
});

export default styles;
