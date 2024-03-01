import { createRoot } from 'react-dom/client';

import { AcrossTheKyle } from './AcrossTheKyle';

const root = createRoot(document.getElementById('root')!);

console.log('Want to see the source code?', 'https://github.com/acrossthekyle/acrossthekyle.github.io');

root.render(<AcrossTheKyle />);
