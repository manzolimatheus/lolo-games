import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PhoneAccepted() {
  const router = useRouter();

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

  const handleTurnoff = () => {
    //   stop calling sound
    const audio = new Audio("/audio/bubbles/pop.mp3");
    audio.play();

    router.push("/games");
  };

  return (
    <div className="flex flex-row-reverse">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rscqHXgq4No?si=VLUqUxEcOwfb63zd&autoplay=1&controls=0&loop=1&playlist=rscqHXgq4No"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="scale-[2] absolute w-screen h-screen z-0 -rotate-90"
      ></iframe>
      <button
        className="h-[10vh] w-[10vw] flex justify-center items-center bg-red-500 border-4 border-white p-12 text-white text-6xl rounded-full shakePhone absolute top-[40%] left-[80%]"
        onClick={handleTurnoff}
      >
        📞
      </button>

      <video
        src=""
        id="cam"
        autoPlay
        className="-rotate-180 absolute w-[30vh] h-[30vh] z-0 top-0 right-0 rounded-lg border-4 border-white shadow-lg object-cover"
      ></video>
    </div>
  );
}
