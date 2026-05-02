import tw from '@/styles';

const styles = {
  skeleton: (isLoaded: boolean) => {
    if (isLoaded) {
      return ``;
    }

    return tw(`
      motion-safe:animate-pulse
    `);
  },
};

export default styles;
