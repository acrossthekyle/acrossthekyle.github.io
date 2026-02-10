import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

export default function View() {
  return (
    <Layout>
      <h1 id="books">
        <strong>Books</strong>
        <small>Printed reads</small>
      </h1>
      <p>
        The printed words that I've read and loved over the years, in no particular order.
      </p>
      <br /><br />
      <ul aria-labelledby="books">
        <li>
          "Station Eleven" by Emily St. John Mandel
        </li>
        <li>
          "The Hitchhiker's Guide to the Galaxy" by Douglas Adams
        </li>
        <li>
          "Friday Black" by Adjei Brenyah
        </li>
        <li>
          "Foundation" by Isaac Asimov
        </li>
        <li>
          "Foundation and Empire" by Isaac Asimov
        </li>
        <li>
          "Second Foundation" by Isaac Asimov
        </li>
        <li>
          "Foundation and Earth" by Isaac Asimov
        </li>
        <li>
          "Foundation's Edge" by Isaac Asimov
        </li>
        <li>
          "American Gods" by Neil Gaiman
        </li>
        <li>
          "A Man Called Ove" by Fredrik Backman
        </li>
        <li>
          "The Body" by Bill Bryson
        </li>
        <li>
          "Sapians" by Yuval Noah Harari
        </li>
        <li>
          "The Passage" by Justin Cronin
        </li>
        <li>
          "The Twelve" by Justin Cronin
        </li>
        <li>
          "The City of Mirrors" by Justin Cronin
        </li>
        <li>
          "Seven Eves" by Neal Stephenson
        </li>
        <li>
          "The Starless Sea" by Erin Morgenstern
        </li>
        <li>
          "Wanderers" by Chuck Wendig
        </li>
        <li>
          "Good Omens" by Neil Gaiman and Terry Pratchett
        </li>
        <li>
          "One Second After" by William R. Forstchen
        </li>
        <li>
          "Into the Wild" by Jon Krakauer
        </li>
        <li>
          "The Overstory" by Richard Powers
        </li>
        <li>
          "Lucifer's Hammer" by Larry Niven and Jerry Pournelle
        </li>
        <li>
          "City of Thieves" by David Benioff
        </li>
        <li>
          "Darwin's Radio" by Greg Bear
        </li>
        <li>
          "All the Light We Cannot See" by Anthony Doerr
        </li>
        <li>
          "The Three-Body Problem" by Liu Cixin
        </li>
        <li>
          "The Dark Forest" by Liu Cixin
        </li>
        <li>
          "The Lightest Object in the Universe" by Kimi Eisele
        </li>
        <li>
          "The Fabric of the Cosmos" by Brian Greene
        </li>
        <li>
          "A Walk in the Woods" by Bill Bryson
        </li>
        <li>
          "Ready Player One" by Ernest Cline
        </li>
        <li>
          "Dark Matter" by Blake Crouch
        </li>
        <li>
          "Neverwhere" by Neil Gaiman
        </li>
        <li>
          "Tuf Voyaging" by George R.R. Martin
        </li>
        <li>
          "The Hobbit" by J.R.R. Tolkein
        </li>
        <li>
          "The Left Hand of Darkness" by Ursula K. Le Guin
        </li>
        <li>
          "A Knight of the Seven Kingdoms" by George R.R. Martin
        </li>
        <li>
          "A Game of Thrones" by George R.R. Martin
        </li>
      </ul>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
