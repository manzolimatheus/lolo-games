"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PhoneAccepted from "./partials/phone-accepted";

export default function PhoneGame() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.log("getUserMedia is not supported");
      return;
    }

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "user" } })
      .then(function (stream) {
        var video = document.getElementById("cam");
        video.srcObject = stream;
      })
      .catch(function (err0r) {
        console.log("Something went wrong!");
      });
  }, []);

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

  return (
    <div className="h-screen bg-slate-800">
      {accepted ? (
        <PhoneAccepted />
      ) : (
        <>
          <video
            src=""
            id="cam"
            autoPlay
            className="-rotate-90 absolute w-screen h-screen scale-[2] z-0"
          ></video>
          <div className="flex gap-2 p-8 justify-center items-center w-screen h-screen absolute z-1">
            <Image
              src="/img/icons/mickey.png"
              alt="Mickey Mouse"
              width={200}
              height={200}
              className="-rotate-90 bg-pink-100 shadow-lg w-[200px] h-[200px] object-contain rounded-full border-4 border-pink-600 cursor-pointer"
            />
            <h3 className="-rotate-90 text-white text-center text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <strong className="text-red-400">Mickey Mouse</strong> está
              ligando...
            </h3>
            <button
              className="h-[10vh] w-[10vw] flex justify-center items-center bg-green-500 border-4 border-white p-12 text-white text-6xl rounded-full shakePhone"
              onClick={() => {
                setAccepted(true);
                window.dispatchEvent(new Event("stopsound"));
              }}
            >
              📞
            </button>
          </div>
        </>
      )}
    </div>
  );
}
