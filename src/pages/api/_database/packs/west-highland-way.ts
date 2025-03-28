import {
  adjustWeightAndQuantity,
  markAsConsumable,
  markAsWorn,
} from '../../_utils/packs';

import pack from './closet/pack-durston-gear-kakwa-40-medium';
import packLiner from './closet/pack-liner-nylofume-liner';
import tent from './closet/tent-nemo-dragonfly-2p';
import stakes from './closet/stakes-msr-groundhog-minis-sack';
import stakesCap from './closet/stakes-cap-pvc-end-cap-for-pushing-in-stakes';
import wipingCloth from './closet/wiping-cloth-bandana-for-wiping-moisture-off-of-tent';
import pad from './closet/pad-big-agnes-zoom-ul-regular-wide-4-3r-w-o-sack';
import pillowCaseStrap from './closet/pillow-case-strap-pillow-strap-camping-pillowcase-medium';
import pillow from './closet/pillow-zenbivy-modular-pillow-large';
import quilt from './closet/quilt-ee-engima-quilt-30f-1c-regular-w-sack';
import pumpSack from './closet/pump-sack-big-agnes-pumphouse-ultra';
import shirtWorn from './closet/shirt-outdoor-research-echo-hoody';
import shortsWorn from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import shoesWorn from './closet/shoes-topo-athletic-pursuit-mens-11';
import underwearWorn from './closet/underwear-smartwool-boxer-briefs';
import kneeBraceWorn from './closet/knee-brace-mueller-knee-stabilizer-bad-knees';
import socksWorn from './closet/socks-darn-tough-ankle-socks';
import sunglassesWorn from './closet/sunglasses-goodr';
import hatWorn from './closet/hat-arc-teryx-trucker-hat';
import puffy from './closet/puffy-mountain-hardwear-down-jacket';
import rainJacket from './closet/rain-jacket-enlightened-equipment-visp-medium';
import shirt from './closet/shirt-outdoor-research-echo-hoody';
import underwear from './closet/underwear-smartwool-boxer-briefs';
import socks from './closet/socks-darn-tough-ankle-socks';
import pullover from './closet/pullover-senchi-designs-wren-alpha-hoodie-large';
import pants from './closet/pants-vuori-kore-joggers-large';
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
import hairTies from './closet/hair-ties';
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
import headphones from './closet/headphones-airpods-pro-2';
import headphonesBluetoothAdapter from './closet/headphones-bluetooth-adapter-for-traveling-on-planes';
import trekkingPoleBag from './closet/trekking-pole-bag-for-traveling-on-planes-if-required-to-check-poles';
import trekkingPoleWorn from './closet/trekking-pole-cnoc-cork-trekking-pole';
import earplugs from './closet/earplugs-handful-of-earplugs-and-ziplock-bag';
import glasses from './closet/glasses-reading-glasses-case-cleaning-cloth';
import wallet from './closet/wallet-cards-cash';
import passport from './closet/passport-passport-vaccine-card-covid-card-plus-bag';
import houseKeys from './closet/house-keys-building-key-unit-key-fob';
import drawstringBag from './closet/drawstring-bag-for-valuables-and-walking-around';
import water from './closet/water-2-liters-of-water';
import snacks from './closet/snacks-rough-estimate';
import sandals from './closet/sandals-crocs-classic-clogs-mens-10';

const items = [
  pack,
  packLiner,
  tent,
  adjustWeightAndQuantity(stakes, 10),
  stakesCap,
  pad,
  pillowCaseStrap,
  pillow,
  quilt,
  markAsWorn(shirtWorn),
  markAsWorn(shortsWorn),
  markAsWorn(shoesWorn),
  markAsWorn(underwearWorn),
  markAsWorn(adjustWeightAndQuantity(kneeBraceWorn, 2)),
  markAsWorn(socksWorn),
  markAsWorn(sunglassesWorn),
  markAsWorn(hatWorn),
  puffy,
  rainJacket,
  shirt,
  underwear,
  socks,
  pullover,
  pants,
  sandals,
  filter,
  filterPouch,
  adjustWeightAndQuantity(waterBottle, 2),
  markAsConsumable(adjustWeightAndQuantity(toothpaste, 20)),
  toothbrush,
  markAsConsumable(handSanitizer),
  markAsConsumable(toiletPaper),
  markAsConsumable(bodyHairWash),
  markAsConsumable(faceLotion),
  markAsConsumable(deodorant),
  towel,
  comb,
  hairTies,
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
  houseKeys,
  markAsConsumable(water),
  markAsConsumable(snacks),
  wipingCloth,
  drawstringBag,
  pumpSack,
  eReader,
  headphones,
  headphonesBluetoothAdapter,
  trekkingPoleBag,
];

export default items;
