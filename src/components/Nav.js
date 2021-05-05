import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <header className="w-28r">
      <nav className="flex flex-row justify-start space-x-4 text-gray-500">
        <Link href="/">
          <a
            className={`pb-px text-sm font-medium hover:text-gray-900 ${
              isHome && "border-b-2 border-gray-900 text-gray-900"
            }`}
          >
            Todo
          </a>
        </Link>
        <Link href="/about">
          <a
            className={`pb-px text-sm font-medium hover:text-gray-900 ${
              !isHome && "border-b-2 border-gray-900 text-gray-900"
            }`}
          >
            About
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
