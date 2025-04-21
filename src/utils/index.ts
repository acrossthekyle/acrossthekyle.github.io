import * as http from './http';
import * as masonry from './masonry';
import * as router from './router';
import * as scroll from './scroll';

const Utils = {
  ...http,
  ...scroll,
  masonry,
  router,
};

export default Utils;
