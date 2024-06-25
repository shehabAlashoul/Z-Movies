import React from "react";
import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div
      className={` position-fixed top-0 bottom-0 start-0 end-0 ${style.loading_layer}`}
    >
      <span className={style.loader}></span>
    </div>
  );
}
