"use client";
import classNames from "classnames";
import Image from "next/image";
import { FC, useState } from "react";
import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import pictures from "./pictures";

export default function Home() {
  const [clickDisabled, setClickDisabled] = useState(false);

  return (
    <div className="bg-slate-400">
      <TransformWrapper
        onPanningStart={() => setClickDisabled(true)}
        onPanningStop={() => setClickDisabled(false)}
      >
        <Content clickDisabled={clickDisabled} />
      </TransformWrapper>
    </div>
  );
}

const Content: FC<{ clickDisabled: boolean }> = ({ clickDisabled }) => {
  const { zoomToElement } = useControls();
  return (
    <TransformComponent>
      <div className="h-screen w-screen scale-50 -translate-x-1/4 -translate-y-1/4 relative">
        {pictures.map((p) => (
          <div
            key={p.url}
            onClick={(e) => !clickDisabled && zoomToElement(e.currentTarget)}
            className="absolute scale-110"
            style={{ top: p.position.y * 16, left: p.position.x * 16 }}
          >
            <div
              className={classNames("relative", {
                "w-40 aspect-[2/3]": p.orientation === "vertical",
                "h-40 aspect-[3/2]": p.orientation === "horizontal",
              })}
            >
              <Image
                className="object-cover h-full w-full"
                src={"/" + p.url}
                alt=""
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </TransformComponent>
  );
};
