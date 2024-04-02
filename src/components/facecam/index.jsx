import { useEffect } from "react";

export default function Facecam({ ...props }) {
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

  return <video src="" id="cam" autoPlay {...props}></video>;
}
