import {
  Directory,
  DirectoryItem,
  DirectoryItems,
  DirectoryLoading,
} from '@/ui/directory';

export default function Loading() {
  return (
    <Directory align="end">
      <DirectoryItems>
        {Array.from({ length: 4 }).map((_, index) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLoading lines={1} />
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
