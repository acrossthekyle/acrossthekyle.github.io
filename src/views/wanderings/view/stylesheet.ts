import tw from '@/styles';

const styles = tw({
  emphasis: `
    font-serif
    italic
  `,
  link: `
    underline underline-offset-4
    decoration-dotted decoration-current/50

    after:content-['_↗']
  `,
});

export default styles;
