"use client";

import React, { useEffect } from "react";
// import { DotLottieReact} from "@lottiefiles/dotlottie-react";
import { Player } from "@lottiefiles/react-lottie-player";

function Loader() {
  useEffect(() => {
    // Dynamically load lottie-player script
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    script.type = "module";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="h-screen bg-[#a9a9a9] flex flex-col items-center justify-center fixed inset-0 z-[10000] loaderBody">
      <div style={{ width: "200px", height: "200px" }}>
        <Player
          autoplay
          loop
          src="/animations/LoadingAnimation.json" // <-- replace with your file path
          style={{ height: "100%", width: "100%" }}
        />
      </div>

      <div className="text flex">
        <h1 className="flex text-4xl loader-text-1">Cho </h1>
        <h1 className="flex text-4xl loader-text-2 pl-1"> Lab </h1>
      </div>
    </div>
  );
}

export default Loader;
