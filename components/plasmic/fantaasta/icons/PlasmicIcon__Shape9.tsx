// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape9Icon(props: Shape9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 24"}
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
          "M9.5 11H8V6h4c.6 0 1-.4 1-1s-.4-1-1-1H8V1c0-.6-.4-1-1-1S6 .4 6 1v3H4.5C2 4 0 6 0 8.5S2 13 4.5 13H6v5H1c-.6 0-1 .4-1 1s.4 1 1 1h5v3c0 .6.4 1 1 1s1-.4 1-1v-3h1.5c2.5 0 4.5-2 4.5-4.5S12 11 9.5 11zm-5 0C3.1 11 2 9.9 2 8.5S3.1 6 4.5 6H6v5H4.5zM8 18h1.5c1.4 0 2.5-1.1 2.5-2.5S10.9 13 9.5 13H8v5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape9Icon;
/* prettier-ignore-end */
