import {
  adjustWeightAndQuantity,
  markAsConsumable,
  markAsLuxury,
  markAsWorn,
} from '../../_utils/packs';

import pack from './closet/pack-esc-ranger';
import packLiner from './closet/pack-liner-nylofume-liner';
import drawstringBag from './closet/drawstring-bag-for-valuables-and-walking-around';
import liner from './closet/liner-sea-to-summit-sleeping-bag-liner-with-case';
import pillowCaseStrap from './closet/pillow-case-strap-pillow-strap-camping-pillowcase-medium';
import pillow from './closet/pillow-zenbivy-modular-pillow-large';
import shortsWorn from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import underwearWorn from './closet/underwear-smartwool-boxer-briefs';
import socksWorn from './closet/socks-darn-tough-ankle-socks';
import shirtWorn from './closet/shirt-outdoor-research-echo-hoody';
import sunglassesWorn from './closet/sunglasses-goodr';
import hatWorn from './closet/hat-arc-teryx-trucker-hat';
import shoesWorn from './closet/shoes-topo-athletic-pursuit-mens-11';
import kneeBraceWorn from './closet/knee-brace-mueller-knee-stabilizer-bad-knees';
import puffy from './closet/puffy-mountain-hardwear-down-jacket';
import underwear from './closet/underwear-smartwool-boxer-briefs';
import shorts from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import socks from './closet/socks-darn-tough-ankle-socks';
import pullover from './closet/pullover-senchi-designs-wren-alpha-hoodie-large';
import rainJacket from './closet/rain-jacket-enlightened-equipment-visp-medium';
import underwearExtra from './closet/underwear-smartwool-boxer-briefs';
import socksExtra from './closet/socks-darn-tough-ankle-socks';
import shirt from './closet/shirt-outdoor-research-echo-hoody';
import pants from './closet/pants-vuori-kore-joggers-large';
import sandals from './closet/sandals-crocs-classic-clogs-mens-10';
import shirtSleeping from './closet/shirt-smartwool-long-sleeve-shirt-burnt-orange';
import waterBottle from './closet/water-bottle-nalgene-ultralite-32oz-narrow-mouth-white';
import toothpaste from './closet/toothpaste-tablets-with-container';
import toothbrush from './closet/toothbrush-foldable-travel-toothbrush';
import handSanitizer from './closet/hand-sanitizer';
import bodyHairWash from './closet/body-hair-wash-dr-bronners-soap';
import faceLotion from './closet/face-lotion-sensitive-skin-incl-container-and-plastic-bag';
import towel from './closet/towel-packtowl';
import deodorant from './closet/deodorant-travel-sized';
import toiletPaper from './closet/toilet-paper';
import chapstick from './closet/chapstick-spf-15';
import comb from './closet/comb';
import qTips from './closet/q-tips';
import hairTies from './closet/hair-ties';
import sunblock from './closet/sunblock-33-spf-joshua-tree-sun-stick';
import medRepairKit from './closet/med-repair-kit-including-ibuprofen-allergy-medicine-repair-tape';
import headphones from './closet/headphones-apple-headphones-wired';
import powerbank from './closet/powerbank-nitecore-nb10000';
import gpsSmartwatchWorn from './closet/gps-smartwatch-garmin-enduro-2';
import phoneWorn from './closet/phone-iphone-16-pro-case';
import cables from './closet/cables-two-cable-w-adapters-for-all';
import outletAdapterEurope from './closet/outlet-adapter-europe-type-cef';
import wallCharger from './closet/wall-charger-anker-usb-a-usb-c-30w-charger-dual-port';
import eReader from './closet/e-reader-amazon-kindle-paperwhite';
import trekkingPoleWorn from './closet/trekking-pole-cnoc-cork-trekking-pole';
import clothingWireAndPins from './closet/clothing-wire-and-pins-for-hanging-laundry-clothing';
import earplugs from './closet/earplugs-handful-of-earplugs-and-ziplock-bag';
import glasses from './closet/glasses-reading-glasses-case-cleaning-cloth';
import wallet from './closet/wallet-cards-cash';
import passport from './closet/passport-passport-vaccine-card-covid-card-plus-bag';
import carabiners from './closet/carabiners-one-large-one-small';
import water from './closet/water-2-liters-of-water';
import packedLunch from './closet/packed-lunch-rough-estimate';

const items = [
  pack,
  packLiner,
  liner,
  pillowCaseStrap,
  pillow,
  markAsWorn(shortsWorn),
  markAsWorn(underwearWorn),
  markAsWorn(socksWorn),
  markAsWorn(shirtWorn),
  markAsWorn(sunglassesWorn),
  markAsWorn(hatWorn),
  markAsWorn(shoesWorn),
  markAsWorn(adjustWeightAndQuantity(kneeBraceWorn, 2)),
  puffy,
  underwear,
  shorts,
  socks,
  pullover,
  rainJacket,
  underwearExtra,
  socksExtra,
  shirt,
  pants,
  sandals,
  shirtSleeping,
  adjustWeightAndQuantity(waterBottle, 2),
  markAsConsumable(adjustWeightAndQuantity(toothpaste, 40)),
  toothbrush,
  markAsConsumable(handSanitizer),
  markAsConsumable(bodyHairWash),
  markAsConsumable(faceLotion),
  towel,
  markAsConsumable(deodorant),
  markAsConsumable(toiletPaper),
  markAsConsumable(chapstick),
  comb,
  markAsConsumable(qTips),
  hairTies,
  markAsConsumable(sunblock),
  medRepairKit,
  headphones,
  powerbank,
  markAsWorn(gpsSmartwatchWorn),
  markAsWorn(phoneWorn),
  cables,
  outletAdapterEurope,
  wallCharger,
  markAsWorn(trekkingPoleWorn),
  earplugs,
  glasses,
  wallet,
  passport,
  markAsConsumable(water),
  markAsConsumable(packedLunch),
  eReader,
  markAsLuxury(clothingWireAndPins),
  markAsLuxury(carabiners),
  drawstringBag,
];

export default items;
