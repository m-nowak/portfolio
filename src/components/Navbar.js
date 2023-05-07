import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-40 bg-white shadow-lg">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <p className="logo-font text-indigo-700 text-2xl sm:text-3xl font-semibold">
            MN
          </p>
        </Link>

        <ul className="flex flex-row gap-4 sm:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-gray-700 hover:text-gray-900 text-[14px] sm:text-[16px] font-medium cursor-pointer transition-all"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
