import Image from "next/image";
import Link from "next/link";

export default function GamesFolder() {
  const games = [
    {
      name: "Piano",
      image: "/img/icons/piano.gif",
      link: "/games/piano",
    },
    {
      name: "Bubbles",
      image: "/img/icons/bubbles.gif",
      link: "/games/bubbles",
    },
    {
      name: "Telefone",
      image: "/img/icons/phone.gif",
      link: "/games/phone",
    },
  ];

  return (
    <div className="bg-[url('/img/bg/blue.jpg')] bg-cover bg-no-repeat bg-center flex flex-col gap-4 p-8 bg-blue-100 h-screen">
      <ul className="flex items-center justify-center gap-20 w-full h-full">
        {games.map((game) => (
          <li key={game.link}>
            <Link href={game.link}>
              <Image
                src={game.image}
                alt={game.name}
                width={200}
                height={200}
                className="backdrop-blur-sm bg-pink-100 bg-opacity-20 shadow-lg w-[200px] h-[200px] object-cover rounded-full border-4 border-pink-600 cursor-pointer hover:scale-125"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
