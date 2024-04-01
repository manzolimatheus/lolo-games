import Image from "next/image";
import Link from "next/link";

export default function MenuButton() {
  return (
    <Link
      href="/games"
      className="bg-white rounded-full shadow-lg flex items-center justify-center h-[80px] w-[80px]"
    >
      <Image
        src="/img/icons/joystick.gif"
        alt="Games"
        width={50}
        height={50}
        className="w-full h-full cursor-pointer"
      />
    </Link>
  );
}
