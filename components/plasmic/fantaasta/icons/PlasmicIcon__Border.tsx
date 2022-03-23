// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BorderIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BorderIcon(props: BorderIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 742 361"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M741 2v.5h.5V2h-.5zM1.997 2h-.5v.5h.5V2zM741 1h.5V.5h-.5V1zM1.997 1V.5h-.5V1h.5zm0 60.383h-.5v.5h.5v-.5zm739.003 0v.5h.5v-.5h-.5zm-739.003-1v-.5h-.5v.5h.5zm739.003 0h.5v-.5h-.5v.5zm0 62.43v.5h.5v-.5h-.5zm-739.003 0h-.5v.5h.5v-.5zm739.003-1h.5v-.5h-.5v.5zm-739.003 0v-.5h-.5v.5h.5zm0 59.359h-.5v.5h.5v-.5zm739.003 0v.5h.5v-.5h-.5zm-739.003-1v-.5h-.5v.5h.5zm739.003 0h.5v-.5h-.5v.5zm0 61.407v.5h.5v-.5h-.5zm-740 0H.5v.5H1v-.5zm740-1h.5v-.5h-.5v.5zm-740 0v-.5H.5v.5H1zm.997 59.359h-.5v.5h.5v-.5zm739.003 0v.5h.5v-.5h-.5zm-739.003-1v-.5h-.5v.5h.5zm739.003 0h.5v-.5h-.5v.5zM1.997 359.976h-.5v.5h.5v-.5zm739.003 0v.5h.5v-.5h-.5zm-739.003-1v-.5h-.5v.5h.5zm739.003 0h.5v-.5h-.5v.5zM741 1.5H1.997v1H741v-1zm-.5-.5v1h1V1h-1zM1.997 1.5H741v-1H1.997v1zm.5.5V1h-1v1h1zm-.5 59.883H741v-1H1.997v1zm-.5-1.5v1h1v-1h-1zm739.503-.5H1.997v1H741v-1zm.5 1.5v-1h-1v1h1zm-.5 60.93H1.997v1H741v-1zm-.5-.5v1h1v-1h-1zm-738.503.5H741v-1H1.997v1zm.5.5v-1h-1v1h1zm-.5 58.859H741v-1H1.997v1zm-.5-1.5v1h1v-1h-1zm739.503-.5H1.997v1H741v-1zm.5 1.5v-1h-1v1h1zm-.5 59.907H1v1h740v-1zm-.5-.5v1h1v-1h-1zm-739.5.5h740v-1H1v1zm.5.5v-1h-1v1h1zm.497 58.859H741v-1H1.997v1zm-.5-1.5v1h1v-1h-1zm739.503-.5H1.997v1H741v-1zm.5 1.5v-1h-1v1h1zM1.997 360.476H741v-1H1.997v1zm-.5-1.5v1h1v-1h-1zm739.503-.5H1.997v1H741v-1zm.5 1.5v-1h-1v1h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BorderIcon;
/* prettier-ignore-end */
