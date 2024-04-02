import Image from "next/image";
import Link from "next/link";
import MenuButton from "../menu-button";
import { characters } from "@/data";

export default function ContactList() {
  return (
    <div className="bg-slate-800 w-screen h-screen overflow-y-auto flex flex-col gap-4 p-4">
      <MenuButton />
      <ul className="grid grid-cols-3 gap-4 items-center justify-center">
        {characters.map((character, index) => (
          <li key={index} className="bg-slate-700 text-center text-3xl">
            <Link href={`/games/phone/call/${character.id}`}>
              <Image
                src={character.image}
                alt={character.name}
                width={200}
                height={200}
                className="w-full h-[300px] object-cover"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
