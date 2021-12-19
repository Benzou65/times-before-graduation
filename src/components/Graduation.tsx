import React, { ReactElement } from "react";
import Lottie from "react-lottie";
import success from "../assets/37296-success.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: success,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Graduation(): ReactElement {
  return (
    <div style={{ maxWidth: 500 }}>
      <Lottie options={defaultOptions} />
    </div>
  );
}
