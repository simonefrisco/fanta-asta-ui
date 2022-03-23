// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path9Icon(props: Path9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 11"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M3.126 3.53C2.352 4.36.1 10.215.1 10.215c-.33.644.164 1.111 1.288.499L5.43 8.35C7.608 7.05 8.028 6.712 8 4.07L7.594.95C7.455-.12 6.709-.317 5.936.513L3.126 3.53z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path9Icon;
/* prettier-ignore-end */
