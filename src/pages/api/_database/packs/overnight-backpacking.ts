import {
  adjustWeightAndQuantity,
  markAsConsumable,
  markAsLuxury,
  markAsWorn,
} from '../../_utils/packs';

import pack from './closet/pack-durston-gear-kakwa-40-medium';
import packLiner from './closet/pack-liner-nylofume-liner';
import tent from './closet/tent-nemo-dragonfly-2p';
import stakes from './closet/stakes-msr-groundhog-minis-sack';
import stakesCap from './closet/stakes-cap-pvc-end-cap-for-pushing-in-stakes';
import wipingCloth from './closet/wiping-cloth-bandana-for-wiping-moisture-off-of-tent';
import quilt from './closet/quilt-ee-engima-quilt-30f-1c-regular-w-sack';
import pad from './closet/pad-big-agnes-rapide-sl-4-2r-wide';
import pillowCaseStrap from './closet/pillow-case-strap-pillow-strap-camping-pillowcase-medium';
import pillow from './closet/pillow-zenbivy-modular-pillow-large';
import pantsWorn from './closet/pants-fjallraven-vidda-pro-lite';
import beltWorn from './closet/belt-arcade-belt';
import bootsWorn from './closet/boots-topo-athletic-trailventure-2-wp-mens-11';
import hatWorn from './closet/hat-arc-teryx-trucker-hat';
import sunglassesWorn from './closet/sunglasses-goodr';
import shirtWorn from './closet/shirt-outdoor-research-echo-hoody';
import pulloverWorn from './closet/pullover-farpointe-yakona-cruiser';
import underwearWorn from './closet/underwear-unbound-merino-wool-boxer-brief';
import socksWorn from './closet/socks-darn-tough-quarter-socks';
import puffy from './closet/puffy-mountain-hardwear-down-jacket';
import rainJacket from './closet/rain-jacket-enlightened-equipment-visp-medium';
import shirt from './closet/shirt-outdoor-research-echo-hoody';
import underwear from './closet/underwear-unbound-merino-wool-boxer-brief';
import socks from './closet/socks-darn-tough-quarter-socks';
import pot from './closet/pot-toaks-titanium-750ml';
import stove from './closet/stove-msr-pocketrocket-deluxe';
import utensil from './closet/utensil-toaks-titanium-long';
import odorBarrier from './closet/odor-barrier-nylopro-odor-proof-bag';
import fuel from './closet/fuel-msr-isopro-4oz';
import foodBag from './closet/food-bag-adotec-ultralight-food-locker-14l';
import filter from './closet/filter-platypus-quickdraw-w-o-pouch';
import filterPouch from './closet/filter-pouch-platypus-1l-pouch';
import waterBottle from './closet/water-bottle-squaker-bottle-32oz-w-special-caps';
import toothpaste from './closet/toothpaste-tablets-with-container';
import toothbrush from './closet/toothbrush-foldable-travel-toothbrush';
import deodorant from './closet/deodorant-travel-sized';
import chapstick from './closet/chapstick-spf-15';
import hairTies from './closet/hair-ties';
import hairbrush from './closet/hairbrush';
import toiletPaper from './closet/toilet-paper';
import handSanitizer from './closet/hand-sanitizer';
import trowel from './closet/trowel-boglerco-ultralight-trowel';
import toiletBag from './closet/toilet-bag-dcf-bag';
import medRepairKit from './closet/med-repair-kit-including-ibuprofen-allergy-medicine-repair-tape';
import headlamp from './closet/headlamp-nitecore-nu25-ul';
import gpsSmartwatchWorn from './closet/gps-smartwatch-garmin-enduro-2';
import phoneWorn from './closet/phone-iphone-16-pro-case';
import trekkingPoleWorn from './closet/trekking-pole-cnoc-cork-trekking-pole';
import bugWipes from './closet/bug-wipes-picaridin-insect-repellent-wipes';
import glasses from './closet/glasses-reading-glasses-case-cleaning-cloth';
import wallet from './closet/wallet-cards-cash';
import houseKeys from './closet/house-keys-building-key-unit-key-fob';
import water from './closet/water-2-liters-of-water';
import food from './closet/food-dinner-and-breakfast-bars';
import weatherSensor from './closet/weather-sensor-sensorpush-humidity-temperature-pressure-sensor';
import eReader from './closet/e-reader-amazon-kindle-paperwhite';
import hammock from './closet/hammock-eno-sub6-ultralight-hammock';
import hammockStraps from './closet/hammock-straps-eno-ultralight-hammock-straps-w-o-case';
import swissArmyKnife from './closet/swiss-army-knife-victorinox-classic';
import bodyWipes from './closet/body-wipes-wet-ones-wipes-for-one-night';
import pumpSack from './closet/pump-sack-big-agnes-pumphouse-ultra';
import sandals from './closet/sandals-crocs-classic-clogs-mens-10';
import headphones from './closet/headphones-airpods-pro-2';
import saw from './closet/saw-silky-f180';
import fireStarter from './closet/fire-starter-1-stick';

const items = [
  pack,
  packLiner,
  tent,
  adjustWeightAndQuantity(stakes, 10),
  stakesCap,
  quilt,
  pad,
  pillowCaseStrap,
  pillow,
  markAsWorn(pantsWorn),
  markAsWorn(beltWorn),
  markAsWorn(bootsWorn),
  markAsWorn(hatWorn),
  markAsWorn(sunglassesWorn),
  markAsWorn(shirtWorn),
  markAsWorn(pulloverWorn),
  markAsWorn(underwearWorn),
  markAsWorn(socksWorn),
  puffy,
  rainJacket,
  shirt,
  underwear,
  socks,
  pot,
  stove,
  utensil,
  odorBarrier,
  markAsConsumable(fuel),
  foodBag,
  filter,
  filterPouch,
  adjustWeightAndQuantity(waterBottle, 2),
  markAsConsumable(adjustWeightAndQuantity(toothpaste, 4)),
  toothbrush,
  markAsConsumable(deodorant),
  markAsConsumable(chapstick),
  hairTies,
  hairbrush,
  markAsConsumable(toiletPaper),
  markAsConsumable(handSanitizer),
  trowel,
  toiletBag,
  medRepairKit,
  headlamp,
  markAsWorn(gpsSmartwatchWorn),
  markAsWorn(phoneWorn),
  markAsWorn(trekkingPoleWorn),
  markAsConsumable(bugWipes),
  glasses,
  wallet,
  houseKeys,
  markAsConsumable(water),
  markAsConsumable(food),
  wipingCloth,
  weatherSensor,
  eReader,
  hammock,
  hammockStraps,
  swissArmyKnife,
  markAsConsumable(bodyWipes),
  pumpSack,
  markAsLuxury(sandals),
  headphones,
  saw,
  markAsConsumable(fireStarter),
];

export default items;
