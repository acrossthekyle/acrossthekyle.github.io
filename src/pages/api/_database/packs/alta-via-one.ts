import {
  adjustWeightAndQuantity,
  markAsConsumable,
  markAsWorn,
} from '../../_utils/packs';

import pack from './closet/pack-esc-ranger';
import packLiner from './closet/pack-liner-nylofume-liner';
import drawstringBag from './closet/drawstring-bag-for-valuables-and-walking-around';
import liner from './closet/liner-sea-to-summit-sleeping-bag-liner-with-case';
import pillow from './closet/pillow-zenbivy-modular-pillow-large';
import pillowCaseStrap from './closet/pillow-case-strap-pillow-strap-camping-pillowcase-medium';
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
import shorts from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import socks from './closet/socks-darn-tough-ankle-socks';
import pullover from './closet/pullover-senchi-designs-wren-alpha-hoodie-large';
import pants from './closet/pants-vuori-kore-joggers-large';
import sandals from './closet/sandals-crocs-classic-clogs-mens-10';
import waterBottle from './closet/water-bottle-nalgene-ultralite-32oz-narrow-mouth-white';
import filter from './closet/filter-platypus-quickdraw-w-o-pouch';
import filterPouch from './closet/filter-pouch-platypus-1l-pouch';
import toothpaste from './closet/toothpaste-tablets-with-container';
import toothbrush from './closet/toothbrush-foldable-travel-toothbrush';
import handSanitizer from './closet/hand-sanitizer';
import bodyHairWash from './closet/body-hair-wash-dr-bronners-soap';
import faceLotion from './closet/face-lotion-sensitive-skin-incl-container-and-plastic-bag';
import nailClippers from './closet/nail-clippers';
import towel from './closet/towel-packtowl';
import deodorant from './closet/deodorant-travel-sized';
import comb from './closet/comb';
import hairTies from './closet/hair-ties';
import chapstick from './closet/chapstick-spf-15';
import medRepairKit from './closet/med-repair-kit-including-ibuprofen-allergy-medicine-repair-tape';
import headlamp from './closet/headlamp-nitecore-nu25-ul';
import powerbank from './closet/powerbank-nitecore-nb10000';
import wallCharger from './closet/wall-charger-anker-usb-c-40w-charger-dual-port';
import gpsSmartwatchWorn from './closet/gps-smartwatch-garmin-enduro-2';
import phoneWorn from './closet/phone-iphone-16-pro-case';
import cables from './closet/cables-two-cable-w-adapters-for-all';
import outletAdapterEurope from './closet/outlet-adapter-europe-type-cef';
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
import water from './closet/water-2-liters-of-water';
import snacks from './closet/snacks-rough-estimate';

const items = [
  pack,
  packLiner,
  liner,
  pillow,
  pillowCaseStrap,
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
  shorts,
  socks,
  pullover,
  pants,
  sandals,
  adjustWeightAndQuantity(waterBottle, 2),
  filter,
  filterPouch,
  adjustWeightAndQuantity(markAsConsumable(toothpaste), 40),
  toothbrush,
  markAsConsumable(handSanitizer),
  markAsConsumable(bodyHairWash),
  markAsConsumable(faceLotion),
  nailClippers,
  towel,
  markAsConsumable(deodorant),
  comb,
  hairTies,
  markAsConsumable(chapstick),
  medRepairKit,
  headlamp,
  powerbank,
  wallCharger,
  markAsWorn(gpsSmartwatchWorn),
  markAsWorn(phoneWorn),
  cables,
  outletAdapterEurope,
  markAsWorn(trekkingPoleWorn),
  earplugs,
  glasses,
  wallet,
  passport,
  houseKeys,
  markAsConsumable(water),
  markAsConsumable(snacks),
  drawstringBag,
  eReader,
  headphones,
  headphonesBluetoothAdapter,
  trekkingPoleBag,
];

export default items;
