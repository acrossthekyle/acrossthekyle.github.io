import * as http from './http';
import * as router from './router';
import * as scroll from './scroll';
import * as packs from './packs';

const Utils = {
  ...http,
  ...scroll,
  ...packs,
  router,
};

export default Utils;
