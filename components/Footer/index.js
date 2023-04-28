import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <Link href={"/about"} id="footer__link">
        Impressum
      </Link>
    </footer>
  );
}
