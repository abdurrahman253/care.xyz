import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div
        className="
          w-[100px] h-[100px] rounded-full
          bg-gradient-to-b from-[#ba42ff] to-[#00e1ff]
          animate-spin
          blur-[1px]
          shadow-[0_-5px_20px_#ba42ff,0_5px_20px_#00e1ff]
          flex items-center justify-center
        "
        style={{ animationDuration: "1.7s" }}
      >
        <div
          className="
            w-[100px] h-[100px]
            rounded-full
            bg-[#242424]
            blur-[10px]
          "
        />
      </div>
    </div>
  );
};

export default Loading;
