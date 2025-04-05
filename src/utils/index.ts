import * as http from './http';
import * as router from './router';
import * as scroll from './scroll';
import * as units from './units';

const Utils = {
  ...http,
  ...scroll,
  ...units,
  router,
};

export default Utils;
