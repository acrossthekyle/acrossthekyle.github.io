import {
  Directory,
  DirectoryItems,
  DirectoryLoading,
} from '@/ui/directory';

export default function Fallback() {
  return (
    <Directory align="start">
      <DirectoryItems>
        {Array.from({ length: 13 }).map((_, index) => (
          <DirectoryLoading key={index} lines={2} />
        ))}
      </DirectoryItems>
    </Directory>
  );
};
