import Styles from '@/styles';

const scss = Styles.Pages.Store.ComponentPolicies;

function Policies() {
  return (
    <div className={scss.policies}>
      <h3>Store Policies</h3>
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
    </div>
  );
}

export default Policies;
