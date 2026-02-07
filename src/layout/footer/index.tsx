import Theme from './theme';

export default function Footer() {
  return (
    <footer>
      <p>© 2011 - {new Date().getFullYear()}. All rights reserved.</p>
      <Theme />
    </footer>
  );
}
