import * as http from './http';
import * as masonry from './masonry';
import * as packs from './packs';
import * as router from './router';
import * as scroll from './scroll';

const Utils = {
  ...http,
  ...scroll,
  ...packs,
  masonry,
  router,
};

export default Utils;
