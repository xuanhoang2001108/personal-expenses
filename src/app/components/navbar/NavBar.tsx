import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-center space-x-6 py-2 text-sm font-semibold">
      <Link href="/">Trang chủ</Link>
      <Link href="/gioi-thieu">Giới thiệu</Link>
      <Link href="/san-pham">Sản phẩm</Link>
      <Link href="/dich-vu">Dịch vụ</Link>
      <Link href="/tin-tuc">Tin tức</Link>
      <Link href="/lien-he">Liên hệ</Link>
    </nav>
  );
};
