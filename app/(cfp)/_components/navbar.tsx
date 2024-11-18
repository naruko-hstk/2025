import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky left-0 right-0 top-0 z-10 flex justify-center bg-blue">
      <ul className="container flex items-center justify-between p-4">
        <Image
          src="/assets/logo.png"
          alt="logo"
          className="-translate-y-1"
          width={130}
          height={65}
        />
        <ul className="flex items-center justify-end gap-8 text-light-brown">
          <NavbarItem link="/">首頁</NavbarItem>
          <NavbarItem link="/theme">年會主題</NavbarItem>
          <NavbarItem link="/normal">一般議程徵稿</NavbarItem>
          <NavbarItem link="/undefined">開放式議程徵稿</NavbarItem>
          <NavbarItem link="/poster">海報徵稿</NavbarItem>
        </ul>
      </ul>
    </nav>
  );
}

function NavbarItem({
  children,
  link,
}: Readonly<{ children: React.ReactNode; link: string }>) {
  return (
    <li className="hover:text-white">
      <Link href={link}>{children}</Link>
    </li>
  );
}
