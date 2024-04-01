"use client";

import Image from "next/image";
import Link from "next/link";

export default function PianoGame() {
  const animals = [
    {
      name: "Cat",
      image: "/img/animals/cat/cat.png",
      audio: "/audio/animals/cat/meow.wav",
    },
    {
      name: "Dog",
      image: "/img/animals/dog/dog.webp",
      audio: "/audio/animals/dog/barking.mp3",
    },
    {
      name: "Cow",
      image: "/img/animals/cow/cow.png",
      audio: "/audio/animals/cow/cow.mp3",
    },
    {
      name: "Chicken",
      image: "/img/animals/chicken/chicken.png",
      audio: "/audio/animals/chicken/chicken.mp3",
    },
    {
      name: "Sheep",
      image: "/img/animals/sheep/sheep.png",
      audio: "/audio/animals/sheep/sheep.mp3",
    },
  ];

  const pianoKeys = [
    {
      name: "Do",
      audio: "/audio/piano/do.wav",
      color: "red",
    },
    {
      name: "Re",
      audio: "/audio/piano/re.wav",
      color: "orange",
    },
    {
      name: "Mi",
      audio: "/audio/piano/mi.wav",
      color: "#ffcb00",
    },
    {
      name: "Fa",
      audio: "/audio/piano/fa.wav",
      color: "green",
    },
    {
      name: "Sol",
      audio: "/audio/piano/sol.wav",
      color: "cornflowerblue",
    },
    {
      name: "La",
      audio: "/audio/piano/la.wav",
      color: "blue",
    },
    {
      name: "Si",
      audio: "/audio/piano/si.wav",
      color: "purple",
    },
  ];

  const toggleJumpClass = (e) => {
    e.target.classList.add("jump");
    setTimeout(() => {
      e.target.classList.remove("jump");
    }, 1000);
  };

  const playSound = (audio) => {
    const audioElement = new Audio(audio);
    audioElement.play();
  };

  return (
    <div className="bg-[url('/img/bg/wood.jpg')] bg-cover bg-no-repeat bg-center grid grid-rows-[20%_40%_40%] h-screen overflow-hidden">
      {/* Menu */}
      <div className="flex justify-end p-4">
        <Link href="/games" className="bg-white rounded-full shadow-lg">
          <Image
            src="/img/icons/joystick.gif"
            alt="Games"
            width={50}
            height={50}
            className="h-full w-auto cursor-pointer"
          />
        </Link>
      </div>
      {/* Animals */}
      <div className="flex justify-between p-8">
        {animals.map((animal, index) => (
          <Image
            key={index}
            src={animal.image}
            alt={animal.name}
            width={200}
            height={200}
            onClick={(event) => {
              toggleJumpClass(event);
              playSound(animal.audio);
            }}
            className="object-contain cursor-pointer h-full drop-shadow-lg"
          />
        ))}
      </div>
      {/* Piano */}
      <div className="bg-green-500 flex justify-between">
        {pianoKeys.map((key, index) => (
          <div
            key={index}
            onClick={() => playSound(key.audio)}
            className="border-4 border-black w-full flex justify-center items-center cursor-pointer text-6xl text-white hover:brightness-75"
            style={{ backgroundColor: key.color }}
          >
            {key.name}
          </div>
        ))}
      </div>
    </div>
  );
}
