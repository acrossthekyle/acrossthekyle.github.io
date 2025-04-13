import Components from '@/components';

import { useViewModel } from './page.components.trips.viewModel';

function Trips() {
  const { isReady, markers } = useViewModel();

  if (!isReady) {
    return null;
  }

  return <Components.World markers={markers} />;
}

export default Trips;
