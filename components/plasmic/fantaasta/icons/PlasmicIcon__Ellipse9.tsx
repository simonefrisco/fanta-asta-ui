// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse9Icon(props: Ellipse9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 208 203"}
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
          "M206.164 103.875c.876 0 1.586-.71 1.573-1.585A103.877 103.877 0 0095.643.327a103.874 103.874 0 00-25.165 201.907 1.566 1.566 0 001.99-1.01 1.603 1.603 0 00-1.017-2.006 100.711 100.711 0 01-60.667-133.76 100.706 100.706 0 01193.783 36.832 1.605 1.605 0 001.597 1.585z"
        }
        fill={"currentColor"}
        fillOpacity={".12"}
      ></path>
    </svg>
  );
}

export default Ellipse9Icon;
/* prettier-ignore-end */
