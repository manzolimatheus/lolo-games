import Facecam from "@/components/facecam";

export default function PhoneAccepted({ handleTurnoff, videoURL }) {
  return (
    <div className="flex flex-row-reverse">
      <iframe
        width="560"
        height="315"
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="scale-[2.5] absolute w-screen h-screen z-0 -rotate-90"
      ></iframe>
      <button
        className="h-[10vh] w-[10vw] flex justify-center items-center bg-red-500 border-4 border-white p-12 text-white text-6xl rounded-full shakePhone absolute top-[40%] left-[80%]"
        onClick={handleTurnoff}
      >
        📞
      </button>
      <Facecam className="-rotate-180 absolute w-[30vh] h-[30vh] z-0 top-0 right-0 rounded-lg border-4 border-white shadow-lg object-cover" />
    </div>
  );
}
