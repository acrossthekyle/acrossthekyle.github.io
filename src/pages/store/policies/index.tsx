import Components from '@/components';

function Page() {
  return (
    <Components.View
      metadata={{
        title: `Store | Policies`,
        description: '',
        url: '/store/policies',
      }}
    >
      <Components.Store.Policies />
    </Components.View>
  );
}

export default Page;
