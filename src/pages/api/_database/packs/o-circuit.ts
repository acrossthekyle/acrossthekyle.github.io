import {
  adjustWeightAndQuantity,
  markAsConsumable,
  markAsWorn,
} from '../../_utils/packs';

import pack from './closet/pack-esc-ranger';
import packLiner from './closet/pack-liner-nylofume-liner';
import pad from './closet/pad-big-agnes-zoom-ul-regular-wide-4-3r-w-o-sack';
import quilt from './closet/quilt-ee-engima-quilt-30f-1c-regular-w-sack';
import pillow from './closet/pillow-zenbivy-modular-pillow-large';
import pillowCaseStrap from './closet/pillow-case-strap-pillow-strap-camping-pillowcase-medium';
import pumpSack from './closet/pump-sack-big-agnes-pumphouse-ultra';
import shirtWorn from './closet/shirt-outdoor-research-echo-hoody';
import shortsWorn from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import shoesWorn from './closet/shoes-topo-athletic-pursuit-mens-11';
import underwearWorn from './closet/underwear-smartwool-boxer-briefs';
import socksWorn from './closet/socks-darn-tough-ankle-socks';
import sunglassesWorn from './closet/sunglasses-goodr';
import kneeBraceWorn from './closet/knee-brace-mueller-knee-stabilizer-bad-knees';
import hatWorn from './closet/hat-arc-teryx-trucker-hat';
import puffy from './closet/puffy-mountain-hardwear-down-jacket';
import rainJacket from './closet/rain-jacket-enlightened-equipment-visp-medium';
import shirt from './closet/shirt-outdoor-research-echo-hoody';
import underwear from './closet/underwear-smartwool-boxer-briefs';
import socks from './closet/socks-darn-tough-ankle-socks';
import pullover from './closet/pullover-senchi-designs-wren-alpha-hoodie-large';
import pants from './closet/pants-vuori-kore-joggers-large';
import sandals from './closet/sandals-crocs-classic-clogs-mens-10';
import filter from './closet/filter-platypus-quickdraw-w-o-pouch';
import filterPouch from './closet/filter-pouch-platypus-1l-pouch';
import waterBottle from './closet/water-bottle-nalgene-ultralite-32oz-narrow-mouth-white';
import toothpaste from './closet/toothpaste-tablets-with-container';
import toothbrush from './closet/toothbrush-foldable-travel-toothbrush';
import handSanitizer from './closet/hand-sanitizer';
import toiletPaper from './closet/toilet-paper';
import bodyHairWash from './closet/body-hair-wash-dr-bronners-soap';
import faceLotion from './closet/face-lotion-sensitive-skin-incl-container-and-plastic-bag';
import deodorant from './closet/deodorant-travel-sized';
import towel from './closet/towel-packtowl';
import comb from './closet/comb';
import chapstick from './closet/chapstick-spf-15';
import hairTies from './closet/hair-ties';
import sunblock from './closet/sunblock-33-spf-joshua-tree-sun-stick';
import medRepairKit from './closet/med-repair-kit-including-ibuprofen-allergy-medicine-repair-tape';
import headlamp from './closet/headlamp-nitecore-nu25-ul';
import powerbank from './closet/powerbank-nitecore-nb10000';
import wallCharger from './closet/wall-charger-anker-usb-c-40w-charger-dual-port';
import gpsSmartwatchWorn from './closet/gps-smartwatch-garmin-enduro-2';
import phoneWorn from './closet/phone-iphone-16-pro-case';
import cables from './closet/cables-two-cable-w-adapters-for-all';
import eReader from './closet/e-reader-amazon-kindle-paperwhite';
import trekkingPoleWorn from './closet/trekking-pole-leki-makalu-trekking-pole';
import drawstringBag from './closet/drawstring-bag-for-valuables-and-walking-around';
import earplugs from './closet/earplugs-handful-of-earplugs-and-ziplock-bag';
import glasses from './closet/glasses-reading-glasses-case-cleaning-cloth';
import wallet from './closet/wallet-cards-cash';
import passport from './closet/passport-passport-vaccine-card-covid-card-plus-bag';
import water from './closet/water-2-liters-of-water';
import snacks from './closet/snacks-rough-estimate';

const items = [
  pack,
  packLiner,
  pad,
  quilt,
  pillow,
  pillowCaseStrap,
  markAsWorn(shirtWorn),
  markAsWorn(shortsWorn),
  markAsWorn(shoesWorn),
  markAsWorn(underwearWorn),
  markAsWorn(socksWorn),
  markAsWorn(sunglassesWorn),
  markAsWorn(adjustWeightAndQuantity(kneeBraceWorn, 2)),
  markAsWorn(hatWorn),
  puffy,
  rainJacket,
  shirt,
  underwear,
  socks,
  pullover,
  pants,
  filter,
  filterPouch,
  adjustWeightAndQuantity(waterBottle, 2),
  markAsConsumable(adjustWeightAndQuantity(toothpaste, 32)),
  toothbrush,
  markAsConsumable(handSanitizer),
  markAsConsumable(toiletPaper),
  markAsConsumable(bodyHairWash),
  markAsConsumable(faceLotion),
  markAsConsumable(deodorant),
  towel,
  comb,
  markAsConsumable(chapstick),
  hairTies,
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
  markAsConsumable(snacks),
  drawstringBag,
  pumpSack,
  eReader,
  sandals,
];

export default items;
