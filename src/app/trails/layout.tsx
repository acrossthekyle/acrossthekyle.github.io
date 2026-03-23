import {
  Directory,
  DirectoryList,
  DirectoryListItem,
  DirectoryListItemAnchor,
} from '@/ui/directory';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Directory>
        <DirectoryList>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/asdf" text="River Ridge Trail" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/234" text="Yellow River Trail" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/as4sd" text="Tour du Mont Blanc" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/test1" text="GR 20" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/test2" text="West Highland Way" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/test3" text="O Circuit" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/test4" text="Ice Age Trail" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/test5" text="Annapurna Circuit + Basecamp" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/test6" text="Alta Via 1" />
          </DirectoryListItem>
          <DirectoryListItem>
            <DirectoryListItemAnchor path="/trails/test7" text="Camino Frances" />
          </DirectoryListItem>
        </DirectoryList>
      </Directory>
      {children}
    </>
  );
}
