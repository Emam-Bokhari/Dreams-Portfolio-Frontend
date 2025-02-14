import { Fragment } from "react";
import Lottie from "lottie-react";
import loader from "@/assets/loading-animation.json";

export default function LoadingAnimation() {
  return (
    <Fragment>
      <div className="flex items-center justify-center h-screen">
        <Lottie animationData={loader} loop className=" w-36 h-36" />
      </div>
    </Fragment>
  );
}
