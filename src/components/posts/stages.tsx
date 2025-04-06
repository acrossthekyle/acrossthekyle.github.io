import Timeline from '../timeline';

import { useViewModel } from './stages.viewModel';

function Stages() {
  const { isReady, stages } = useViewModel();

  if (!isReady) {
    return null;
  }

  return <Timeline indexPrefix="Day" segments={stages} />;
}

export default Stages;
