import { createRoot } from 'react-dom/client';

import { Main } from './Main';

const root = createRoot(document.getElementById('main')!);

console.log('Want to see the source code?', 'https://github.com/acrossthekyle/acrossthekyle.github.io');

root.render(<Main />);
