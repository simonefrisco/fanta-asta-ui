// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask39Icon(props: Mask39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 10"}
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
          "M16 8.667c0 .066 0 .2-.067.266a.803.803 0 01-.333.334c-.067.066-.2.066-.267.066h-4c-.4 0-.666-.266-.666-.666S10.933 8 11.333 8h2.4L9 3.267 6.133 6.133a.644.644 0 01-.933 0l-5-5A.644.644 0 01.2.2a.644.644 0 01.933 0l4.534 4.533 2.866-2.866a.644.644 0 01.934 0l5.2 5.2v-2.4c0-.4.266-.667.666-.667s.667.267.667.667v4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask39Icon;
/* prettier-ignore-end */
