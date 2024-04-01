"use client";

import { useEffect } from "react";
import MenuButton from "../menu-button";

export default function BubblesGame() {
  const handleClick = (e) => {
    // if is 💣
    if (e.target.innerText === "💣") {
      // remove all bubbles
      const bubbles = document.querySelectorAll(".bubble");
      bubbles.forEach((bubble) => {
        // get x and y
        const { x, y } = bubble.getBoundingClientRect();

        console.log(x, y);

        // set position
        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        bubble.classList.add("bubblePop");

        setTimeout(() => {
          bubble.remove();
        }, 1000);
      });

      // play bomb sound
      const bombSound = new Audio("/audio/bubbles/bomb.mp3");
      bombSound.play();
      return;
    }

    // get x and y
    const x = e.clientX;
    const y = e.clientY;

    // set position
    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;

    // append bubblePop class
    e.target.classList.add("bubblePop");
    // remove bubblePop class after 1 second
    setTimeout(() => {
      // set position
      e.target.style.left = `${x}px`;
      e.target.style.top = `${y}px`;
      e.target.classList.remove("bubblePop");

      // delete element
      e.target.remove();
    }, 1000);

    const popSound = new Audio("/audio/bubbles/pop.mp3");
    popSound.play();
  };

  const spawnBubble = () => {
    const fruits = ["🍓", "🍌", "🍉", "🍎", "🍍", "🍒", "🍑", "💣"];

    // create bubble element
    const bubble = document.createElement("div");

    // set innerHTML
    bubble.innerText = fruits[Math.floor(Math.random() * fruits.length)];

    // add bubble class
    bubble.classList.add("bubble");
    // set position
    bubble.style.left = `${Math.random() * 100}%`;
    // append bubble to body
    const map = document.getElementById("map");
    map.appendChild(bubble);

    // remove bubble after 4 seconds
    setTimeout(() => {
      bubble.remove();
    }, 5000);

    // add click event listener
    bubble.addEventListener("click", handleClick);
  };

  useEffect(() => {
    // spawn bubble every 1 second
    const interval = setInterval(spawnBubble, 1000);

    // clear interval when component unmount
    return () => clearInterval(interval);
  }, []);

  // play background music on loop
  useEffect(() => {
    const backgroundMusic = new Audio("/audio/bg/bubbles-song.mp3");
    backgroundMusic.loop = true;
    backgroundMusic.play();

    return () => backgroundMusic.pause();
  }, []);

  return (
    <div className="bg-[url('/img/bg/underwater.jpg')] bg-cover bg-no-repeat bg-center h-[100vh] w-[100vw] overflow-hidden grid grid-rows-[80%_20%]">
      <div className="flex" id="map" />
      {/* Menu */}
      <div className="flex justify-start p-4">
        <MenuButton />
      </div>
    </div>
  );
}
