import Head from 'next/head';

import styles from '@/styles/pages/shop/policies.module.scss';
import Breadcrumbs from '@/ui/breadcrumbs';
import View from '@/ui/view';

function Page() {
  return (
    <View className={styles.view}>
      <Head>
        <title>Kyle &mdash; Shop | Policies</title>
      </Head>
      <Breadcrumbs
        items={[
          {
            text: 'Shop',
            uri: '/shop',
          },
          {
            text: 'Policies',
          },
        ]}
      />
      <h1>Shop Policies</h1>
      <p>No Returns or Exchanges.</p>
      <p>
        For prints there will be size variations due to different frame sizes
        and their associated aspect ratios, which will lead to variations in
        image cropping.
      </p>
      <p>
        Processing times vary, and can take up to 5-9 business days, but most
        items are usually shipped within 6 business days or fewer. Shipping
        times can also vary, depending on the shipping address.
      </p>
      <p>
        If, for any reason, your print arrives damaged or misprinted (does not
        apply to ordering the wrong size, or simply changing your mind), I will
        gladly provide you with a one-time replacement without any additional
        fees after providing proof of damage/misprint. You must reach out within
        14 days of product delivery. After 14 days no replacements will be
        provided.
      </p>
      <p>
        A printing partner (Printful) is used for the production and shipping of
        items.
      </p>
    </View>
  );
}

export default Page;
