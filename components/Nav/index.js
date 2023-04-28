import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav({ data }) {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link
            className="navbar__link"
            href={
              currentUrl.includes("/tile")
                ? "/"
                : `/tile/${data[0].slug}`
            }
          >
            {currentUrl.includes("/tile")
              ? "Pieces List View"
              : "Pieces Tile View"}
          </Link>
        </li>
        <li>
          <Link
            className="navbar__link"
            href="/spotlight/"
            
          >
            Spotlight
          </Link>
        </li>
        <li>
        <Link
            className="navbar__link"
            href="/favorites"
            
          >
            Favorites
          </Link>
        </li>
        <li>
          <Link className="navbar__link" href={"/about"}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
