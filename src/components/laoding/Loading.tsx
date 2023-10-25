import Image from "next/image";
import React from "react";
import loading from "../../assets/loading.svg";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Image
        src={loading}
        alt="Picture of the author"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
