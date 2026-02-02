import tw from '@/styles';

const styles = tw({
  container: `
    inline-block
    pl-0.25
    text-base
    lowercase truncate
    border-b-1
    duration-300

    first:pl-0

    md:text-sm

    hover:border-b-current/75
  `,
});

export default styles;
