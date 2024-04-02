"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneAccepted from "./partials/phone-accepted";
import Facecam from "../facecam";
import { useRouter } from "next/navigation";

export default function PhoneGame({ name, image, videoURL }) {
  const router = useRouter();

  const [accepted, setAccepted] = useState(false);

  //   play calling sound
  useEffect(() => {
    const audio = new Audio("/audio/bg/phone-calling.mp3");
    audio.loop = true;
    audio.play();

    window.addEventListener("stopsound", () => {
      audio.pause();
    });

    return () => {
      audio.pause();

      window.removeEventListener("stopsound", () => {
        audio.pause();
      });
    };
  }, []);

  const handleTurnoff = () => {
    //   stop calling sound
    const audio = new Audio("/audio/bubbles/pop.mp3");
    audio.play();

    router.push("/games");
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {accepted ? (
        <PhoneAccepted videoURL={videoURL} handleTurnoff={handleTurnoff} />
      ) : (
        <>
          <Facecam className="-rotate-180 w-screen h-screen z-0 scale-[2] fixed" />
          <div className="flex gap-2 p-8 justify-center items-center w-screen h-screen absolute z-1">
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="-rotate-90 bg-pink-100 shadow-lg w-[200px] h-[200px] object-contain rounded-full border-4 border-pink-600 cursor-pointer"
            />
            <h3 className="-rotate-90 text-white text-center text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <strong className="text-red-400">{name}</strong> está ligando...
            </h3>
            <div className="flex flex-col gap-12">
              <button
                className="h-[10vh] w-[10vw] flex justify-center items-center bg-green-500 border-4 border-white p-12 text-white text-6xl rounded-full shakePhone"
                onClick={() => {
                  setAccepted(true);
                  window.dispatchEvent(new Event("stopsound"));
                }}
              >
                📞
              </button>
              <button
                className="h-[10vh] w-[10vw] flex justify-center items-center bg-red-500 border-4 border-white p-12 text-white text-6xl rounded-full shakePhone"
                onClick={handleTurnoff}
              >
                📞
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
