import Styles from '@/styles';

const scss = Styles.Pages.Store.Item.PageComponentDescriptions;

type Props = {
  frame: number;
};

function Descriptions({ frame }: Props) {
  return (
    <div className={scss.description}>
      <h3>Printing</h3>
      {frame === 0 && (
        <>
          <p>
            Printed on Ultra Premium Luster Photo Paper, which has a mixture of
            a gloss and matte finish, with multicolor water-based inket printing
            techniques. This print gives you a highly saturated look, and
            because of its saturation and resistance to fingerprints luster
            paper is great for quality photographic prints.
          </p>
          <h4>Specs and Materials</h4>
          <ul>
            <li>10 mil (0.25 mm) thick paper</li>
            <li>260 g/m² paper weight</li>
            <li>Slightly glossy</li>
            <li>Fingerprint resistant</li>
          </ul>
        </>
      )}
      {frame === 1 && (
        <>
          <p>
            Printed on Ultra Premium Luster Photo Paper, which has a mixture of
            a gloss and matte finish, with multicolor water-based inket printing
            techniques. This print gives you a highly saturated look, and
            because of its saturation and resistance to fingerprints, luster
            paper is great for quality photographic prints. This poster is
            framed in an alder, semi-hardwood frame, and comes ready to hang on
            the wall.
          </p>
          <h4>Specs and Materials</h4>
          <ul>
            <li>10 mil (0.25 mm) thick paper</li>
            <li>260 g/m² paper weight</li>
            <li>.75" thick ayous wood frame from renewable forests</li>
            <li>Hanging hardware included</li>
            <li>Acrylite front protector</li>
            <li>Slightly glossy</li>
          </ul>
        </>
      )}
      {frame === 2 && (
        <>
          <p>
            Printed on museum-quality matte paper with multicolor water-based
            inket printing techniques, this print gives prints a polished and
            sophisticated look. This poster is framed and comes ready to hang on
            the wall. The white mat board covers parts of the poster paper, and
            place each of the mounting hooks 1 inch from frame corners when
            hanging horizontally.
          </p>
          <h4>Specs and Materials</h4>
          <ul>
            <li>10.3 mil (0.26 mm) thick paper</li>
            <li>189 g/m² paper weight</li>
            <li>.75" thick ayous wood frame from renewable forests</li>
            <li>Hanging hardware included</li>
            <li>Acrylite front protector</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Descriptions;
