import {
  Directory,
  DirectoryItems,
  DirectoryLoading,
} from '@/ui/directory';

export default function Loading() {
  return (
    <Directory align="end">
      <DirectoryItems>
        {Array.from({ length: 4 }).map((_, index) => (
          <DirectoryLoading key={index} lines={1} />
        ))}
      </DirectoryItems>
    </Directory>
  );
}
