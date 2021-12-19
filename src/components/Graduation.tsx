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
  return <Lottie options={defaultOptions} height={500} width={500} />;
}
