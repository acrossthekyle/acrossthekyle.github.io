'use client';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogContent, DialogHeader } from '@/ui/dialog';

import styles from './stylesheet';

export default function Wiki() {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <>
      <button
        aria-controls="wiki"
        className={styles.wiki}
        onClick={handleOnOpen}
        title="View wiki"
        type="button"
      >
        Wiki
      </button>
      <Dialog
        id="wiki"
        isOpen={isOpen}
        onCancel={handleOnCancel}
        onClose={handleOnClose}
        ref={dialog}
      >
        <DialogHeader>
          <strong>Wiki</strong>
          <small>Descriptions</small>
        </DialogHeader>
        <DialogContent>
          <p>
            When backpackers talk about pack weight, things are usually split into a handful of categories. It sounds technical, but it's really just a way to understand what contributes to the pack weight. Here's the breakdown in normal, non-gear-nerd language:
          </p>
          <br /><br />
          <h3>
            <b>BASE WEIGHT</b>
          </h3>
          <p>
            Base weight is all the stuff you carry in your backpack that doesn't get used up.
          </p>
          <p>
            Think: tent, sleeping bag, sleeping pad, stove, extra clothes, first aid kit, the backpack itself, etc.
          </p>
          <p>
            If all the gear was laid out before a trip (excluding food, water, or fuel), that pile makes up the base weight. It stays the same from the first day of the trip to the last. That's why experienced backpackers obsess over lowering this number, it's the weight you carry every single mile.
          </p>
          <br /><br />
          <h3>
            <b>CONSUMABLE WEIGHT</b>
          </h3>
          <p>
            Consumables are things that get used up during the trip, such as food, fuel, water, toothpaste, sunscreen, etc. This weight changes constantly. The pack is heaviest on day one when all the food is fresh and the water bottles are full. As you eat and drink, the pack gets lighter. So, consumable weight goes down as the trip goes on.
          </p>
          <br /><br />
          <h3>
            <b>WORN WEIGHT</b>
          </h3>
          <p>
            Worn weight is everything you're wearing, and not carrying, minus the backpack which is included in the base weight because it's being carried. These items are separated from the base weight because it's technically not in the pack. Even though it still "counts" in real life, it doesn't affect how heavy the backpack feels on the shoulders.
          </p>
          <br /><br />
          <h3>
            <b>TOTAL WEIGHT</b>
          </h3>
          <p>
            Total weight is everything all added up. If you stepped on a scale while fully dressed, with a full pack on — that's the total weight.
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
