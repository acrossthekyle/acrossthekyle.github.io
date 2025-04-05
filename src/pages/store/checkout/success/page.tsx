import Components from '@/components';
import Styles from '@/styles';

import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Store.Checkout.Success.Page;

function Page() {
  const { email, isLoading, isReady, name } = useViewModel();

  return (
    <Components.View title="Shop | Checkout Confirmation">
      {isLoading && <Components.Loading />}
      {isReady && (
        <>
          <h1 className={scss.heading}>Thank you!</h1>
          <p className={scss.paragraph}>
            Thanks for your order {name}, a receipt should be on its way to{' '}
            {email}.
          </p>
          <p className={scss.paragraph}>
            If the receipt does not arrive, or if you have any questions, please
            reach out to{' '}
            <a href="mailto:hello@acrossthekyle.com">
              hello@acrossthekyle.com.
            </a>
          </p>
        </>
      )}
    </Components.View>
  );
}

export default Page;
