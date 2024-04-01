import Image from "next/image";
import Link from "next/link";

export default function MenuButton() {
  return (
    <Link href="/games" className="bg-white rounded-full shadow-lg">
      <Image
        src="/img/icons/joystick.gif"
        alt="Games"
        width={50}
        height={50}
        className="h-full w-auto cursor-pointer"
      />
    </Link>
  );
}
