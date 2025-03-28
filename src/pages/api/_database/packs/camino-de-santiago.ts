import {
  adjustWeightAndQuantity,
  markAsConsumable,
  markAsLuxury,
  markAsWorn,
} from '../../_utils/packs';

import pack from './closet/pack-esc-ranger';
import packLiner from './closet/pack-liner-nylofume-liner';
import drawstringBag from './closet/drawstring-bag-for-valuables-and-walking-around';
import pillow from './closet/pillow-exped-large';
import liner from './closet/liner-sea-to-summit-sleeping-bag-liner-with-case';
import shortsWorn from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import shoesWorn from './closet/shoes-topo-athletic-pursuit-mens-11';
import underwearWorn from './closet/underwear-smartwool-boxer-briefs';
import kneeBraceWorn from './closet/knee-brace-mueller-knee-stabilizer-bad-knees';
import socksWorn from './closet/socks-darn-tough-ankle-socks';
import sunglassesWorn from './closet/sunglasses-goodr';
import hatWorn from './closet/hat-arc-teryx-trucker-hat';
import shirtWorn from './closet/shirt-outdoor-research-echo-hoody';
import shorts from './closet/shorts-vuori-kore-7-5-inseam-w-o-liner-medium';
import rainJacket from './closet/rain-jacket-enlightened-equipment-visp-medium';
import pullover from './closet/pullover-farpointe-yakona-cruiser';
import shirt from './closet/shirt-outdoor-research-echo-hoody';
import underwear from './closet/underwear-smartwool-boxer-briefs';
import socks from './closet/socks-darn-tough-ankle-socks';
import sandals from './closet/sandals-teva-original-universal-mens-11';
import shirtTown from './closet/shirt-astroman-long-sleeve-sun-shirt';
import waterBottle from './closet/water-bottle-nalgene-ultralite-32oz-narrow-mouth-white';
import toothbrush from './closet/toothbrush-foldable-travel-toothbrush';
import nailClippers from './closet/nail-clippers';
import handSanitizer from './closet/hand-sanitizer';
import toothpaste from './closet/toothpaste-full-tube';
import deodorant from './closet/deodorant-full-stick';
import shampoo from './closet/shampoo-bottle';
import soapBar from './closet/soap-bar';
import towel from './closet/towel-packtowl';
import chapstick from './closet/chapstick-spf-15';
import comb from './closet/comb';
import hairTies from './closet/hair-ties';
import medRepairKit from './closet/med-repair-kit-including-ibuprofen-allergy-medicine-repair-tape';
import headlamp from './closet/headlamp-nitecore-nu25-ul';
import powerbank from './closet/powerbank-nitecore-nb10000';
import wallCharger from './closet/wall-charger-anker-usb-c-40w-charger-dual-port';
import gpsSmartwatchWorn from './closet/gps-smartwatch-garmin-enduro-2';
import phoneWorn from './closet/phone-iphone-16-pro-case';
import outletAdapterEurope from './closet/outlet-adapter-europe-type-cef';
import cables from './closet/cables-two-cable-w-adapters-for-all';
import trekkingPoleWorn from './closet/trekking-pole-cnoc-cork-trekking-pole';
import earplugs from './closet/earplugs-handful-of-earplugs-and-ziplock-bag';
import glasses from './closet/glasses-reading-glasses-case-cleaning-cloth';
import wallet from './closet/wallet-cards-cash';
import passport from './closet/passport-passport-vaccine-card-covid-card-plus-bag';
import houseKeys from './closet/house-keys-building-key-unit-key-fob';
import water from './closet/water-2-liters-of-water';
import playingCards from './closet/playing-cards';
import headphones from './closet/headphones-airpods-pro-2';
import trekkingPoleBag from './closet/trekking-pole-bag-for-traveling-on-planes-if-required-to-check-poles';
import headphonesBluetoothAdapter from './closet/headphones-bluetooth-adapter-for-traveling-on-planes';
import snacks from './closet/snacks-rough-estimate';

const items = [
  pack,
  packLiner,
  pillow,
  liner,
  markAsWorn(shortsWorn),
  markAsWorn(shoesWorn),
  markAsWorn(underwearWorn),
  markAsWorn(adjustWeightAndQuantity(kneeBraceWorn, 2)),
  markAsWorn(socksWorn),
  markAsWorn(sunglassesWorn),
  markAsWorn(hatWorn),
  markAsWorn(shirtWorn),
  shorts,
  rainJacket,
  pullover,
  shirt,
  underwear,
  socks,
  adjustWeightAndQuantity(waterBottle, 2),
  toothbrush,
  nailClippers,
  markAsConsumable(handSanitizer),
  markAsConsumable(toothpaste),
  markAsConsumable(deodorant),
  markAsConsumable(shampoo),
  markAsConsumable(soapBar),
  towel,
  markAsConsumable(chapstick),
  comb,
  hairTies,
  medRepairKit,
  headlamp,
  powerbank,
  wallCharger,
  markAsWorn(gpsSmartwatchWorn),
  markAsWorn(phoneWorn),
  outletAdapterEurope,
  cables,
  markAsWorn(trekkingPoleWorn),
  earplugs,
  glasses,
  wallet,
  passport,
  houseKeys,
  markAsConsumable(water),
  markAsConsumable(snacks),
  markAsLuxury(sandals),
  markAsLuxury(shirtTown),
  drawstringBag,
  playingCards,
  headphones,
  trekkingPoleBag,
  headphonesBluetoothAdapter,
];

export default items;
