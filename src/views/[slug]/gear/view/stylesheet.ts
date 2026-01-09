import tw, { padding } from '@/styles';

const styles = tw({
  section: `
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    ${padding.full}
  `,
  list: `
    flex flex-col gap-2
    mt-4
  `,
  item: `
    capitalize
  `,
  link: `
    underline underline-offset-4
    decoration-dotted decoration-current/50

    after:content-['_↗']
  `,
});

export default styles;
