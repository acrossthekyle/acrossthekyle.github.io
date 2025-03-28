import {
  adjustWeightAndQuantity,
  markAsConsumable,
  markAsWorn,
} from '../../_utils/packs';

import pack from './closet/pack-esc-ranger';
import drawstringBag from './closet/drawstring-bag-for-valuables-and-walking-around';
import packLiner from './closet/pack-liner-nylofume-liner';
import quilt from './closet/quilt-ee-revelation-quilt-10f';
import pillow from './closet/pillow-zenbivy-modular-pillow-large';
import pillowCaseStrap from './closet/pillow-case-strap-pillow-strap-camping-pillowcase-medium';
import shirtWorn from './closet/shirt-outdoor-research-echo-hoody';
import shortsWorn from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import shoesWorn from './closet/shoes-topo-athletic-pursuit-mens-11';
import socksWorn from './closet/socks-darn-tough-ankle-socks';
import underwearWorn from './closet/underwear-smartwool-boxer-briefs';
import sunglassesWorn from './closet/sunglasses-goodr';
import hatWorn from './closet/hat-arc-teryx-trucker-hat';
import kneeBraceWorn from './closet/knee-brace-mueller-knee-stabilizer-bad-knees';
import pullover from './closet/pullover-melanzana-micro-grid-hoodie-v2';
import puffy from './closet/puffy-mountain-hardwear-down-jacket';
import rainJacket from './closet/rain-jacket-enlightened-equipment-visp-medium';
import shorts from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import shirt from './closet/shirt-outdoor-research-echo-hoody';
import underwear from './closet/underwear-smartwool-boxer-briefs';
import pants from './closet/pants-vuori-kore-joggers-large';
import beanie from './closet/beanie-meriwool-merino-wool-cuff-beanie';
import socks from './closet/socks-darn-tough-ankle-socks';
import sandals from './closet/sandals-crocs-classic-clogs-mens-10';
import filter from './closet/filter-platypus-quickdraw-w-o-pouch';
import waterBottle from './closet/water-bottle-nalgene-ultralite-32oz-narrow-mouth-white';
import filterPouch from './closet/filter-pouch-platypus-1l-pouch';
import toothpaste from './closet/toothpaste-tablets-with-container';
import toothbrush from './closet/toothbrush-foldable-travel-toothbrush';
import handSanitizer from './closet/hand-sanitizer';
import toiletPaper from './closet/toilet-paper';
import bodyHairWash from './closet/body-hair-wash-dr-bronners-soap';
import faceLotion from './closet/face-lotion-sensitive-skin-incl-container-and-plastic-bag';
import nailClippers from './closet/nail-clippers';
import deodorant from './closet/deodorant-travel-sized';
import hairTies from './closet/hair-ties';
import comb from './closet/comb';
import chapstick from './closet/chapstick-spf-15';
import sunblock from './closet/sunblock-33-spf-joshua-tree-sun-stick';
import medRepairKit from './closet/med-repair-kit-including-ibuprofen-allergy-medicine-repair-tape';
import headlamp from './closet/headlamp-nitecore-nu25-ul';
import powerbank from './closet/powerbank-nitecore-nb10000';
import wallCharger from './closet/wall-charger-anker-usb-c-40w-charger-dual-port';
import gpsSmartwatchWorn from './closet/gps-smartwatch-garmin-enduro-2';
import phoneWorn from './closet/phone-iphone-16-pro-case';
import cables from './closet/cables-two-cable-w-adapters-for-all';
import eReader from './closet/e-reader-amazon-kindle-paperwhite';
import trekkingPoleWorn from './closet/trekking-pole-cnoc-cork-trekking-pole';
import earplugs from './closet/earplugs-handful-of-earplugs-and-ziplock-bag';
import glasses from './closet/glasses-reading-glasses-case-cleaning-cloth';
import wallet from './closet/wallet-cards-cash';
import passport from './closet/passport-passport-vaccine-card-covid-card-plus-bag';
import water from './closet/water-2-liters-of-water';

const items = [
  pack,
  packLiner,
  quilt,
  pillow,
  pillowCaseStrap,
  markAsWorn(shirtWorn),
  markAsWorn(shortsWorn),
  markAsWorn(shoesWorn),
  markAsWorn(socksWorn),
  markAsWorn(underwearWorn),
  markAsWorn(sunglassesWorn),
  markAsWorn(hatWorn),
  markAsWorn(adjustWeightAndQuantity(kneeBraceWorn, 2)),
  pullover,
  puffy,
  rainJacket,
  shorts,
  shirt,
  underwear,
  pants,
  beanie,
  socks,
  sandals,
  filter,
  adjustWeightAndQuantity(waterBottle, 2),
  filterPouch,
  adjustWeightAndQuantity(markAsConsumable(toothpaste), 80),
  toothbrush,
  markAsConsumable(handSanitizer),
  markAsConsumable(toiletPaper),
  markAsConsumable(bodyHairWash),
  markAsConsumable(faceLotion),
  nailClippers,
  markAsConsumable(deodorant),
  hairTies,
  comb,
  markAsConsumable(chapstick),
  markAsConsumable(sunblock),
  medRepairKit,
  headlamp,
  powerbank,
  wallCharger,
  markAsWorn(gpsSmartwatchWorn),
  markAsWorn(phoneWorn),
  cables,
  markAsWorn(trekkingPoleWorn),
  earplugs,
  glasses,
  wallet,
  passport,
  markAsConsumable(water),
  drawstringBag,
  eReader,
];

export default items;
