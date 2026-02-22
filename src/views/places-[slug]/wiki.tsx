'use client';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogContent, DialogHeader } from '@/ui/dialog';

import styles from './stylesheet';

type Props = {
  filterBy: string;
};

export default function Wiki({ filterBy }: Props) {
  const {
    dialog,
    handleOnBackdrop,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <>
      <button
        aria-controls="wiki"
        className={styles.cta}
        onClick={handleOnOpen}
        title={`Learn more about ${filterBy.toLowerCase()}s`}
        type="button"
      >
        <strong>[+]</strong>
      </button>
      <Dialog
        id="wiki"
        isOpen={isOpen}
        onBackdrop={handleOnBackdrop}
        onCancel={handleOnCancel}
        onClose={handleOnClose}
        ref={dialog}
      >
        <DialogHeader>
          <strong>{filterBy}</strong>
          <small>What is it?</small>
        </DialogHeader>
        <DialogContent>
          {filterBy.toLowerCase() === 'thru-hike' && (
            <>
              <p>
                Thru-hiking is basically deciding to go for a walk...and not stopping. It means hiking an entire long-distance trail from one end to the other, covering hundreds or even thousands of miles in one continuous stretch.
              </p>
              <p>You live out of a backpack with everything you need, and each day is mostly just waking up, walking, eating, walking some more, and sleeping. Some days feel incredible with big views and quiet moments where everything clicks; other days are miserable, wet, painful, and full of "why am I doing this" thoughts.
              </p>
            </>
          )}
          {filterBy.toLowerCase() === 'section hike' && (
            <>
              <p>
                Section-hiking is thru-hiking's more reasonable counterpart. Instead of doing the whole trail in one giant push, you break it into smaller chunks and hike a section at a time. Maybe doing a few days, a week, or whatever fits into your life. You still carry your pack, sleep outside, and deal with sore feet and weather mood swings, but you know there's a clear end point coming up.
              </p>
              <p>
                Over time, those sections add up. You might hike one piece this year, another next year, and slowly stitch the whole thing together. It's all about balance: figuring out how to keep a foot in normal life while still chasing that long-distance hike feeling.
              </p>
            </>
          )}
          {filterBy.toLowerCase() === 'overnight trek' && (
            <p>
              Getting out on a short backpacking loop or out-n-back trail and spending the night camping somewhere along it.
            </p>
          )}
          {filterBy.toLowerCase() === 'summit' && (
            <>
              <p>
                When hiking turns into a very specific kind of scavenger hunt. Instead of following one long trail, you're trying to stand on the tops of a bunch of different mountains, usually all the peaks in a certain list or area. The hikes might be short or long, easy or brutal, but the goal is the same every time: get to the summit, take a breath, maybe a photo, and then head back down.
              </p>
              <p>
                Each summit feels like checking something off a list, which is way more satisfying than it probably should be.
              </p>
            </>
          )}
          {filterBy.toLowerCase() === 'destination' && (
            <p>
              The opposite of every other experience I do. No backpack filled with camping gear, no wearing the same two outfits over multiple days. Instead I play the role of tourist and experience the sights and sounds of the city.
            </p>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
