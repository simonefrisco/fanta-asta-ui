// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask6Icon(props: Mask6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 10"}
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
          "M5.133 5.133l-4 4a.605.605 0 01-.466.2.605.605 0 01-.467-.2.644.644 0 010-.933l3.533-3.533L.2 1.133A.644.644 0 01.2.2a.644.644 0 01.933 0l4 4a.644.644 0 010 .933z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask6Icon;
/* prettier-ignore-end */
