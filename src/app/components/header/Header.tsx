import Image from "next/image";
import { NavBar } from "../navbar/NavBar";

export const Header = () => {
  return (
    <header className="w-full py-10">
      <div className="container mx-auto flex justify-between items-center py-2 px-114">
        <div className="text-sm text-black font-light">
          HOTLINE: <span className="font-bold">086 - 860 - 0061 (24/7)</span>
        </div>
        <div className="text-3xl font-bold text-red-600">HELI</div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-black cursor-pointer">TÀI KHOẢN</span>
          <span className="text-lg cursor-pointer">🔍</span>
        </div>
      </div>
      <NavBar />
    </header>
  );
};
