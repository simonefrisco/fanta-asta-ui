// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask35Icon(props: Mask35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
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
          "M0 8.333C0 3.75 3.75 0 8.333 0c4.584 0 8.334 3.75 8.334 8.333 0 6.167-7.584 11.334-7.834 11.5-.166.084-.333.167-.5.167-.166 0-.333-.083-.5-.167C7.583 19.667 0 14.5 0 8.333zm1.667 0c0 4.5 5.083 8.667 6.666 9.834C9.917 17 15 12.833 15 8.333c0-3.666-3-6.666-6.667-6.666-3.666 0-6.666 3-6.666 6.666zM8.333 5A3.343 3.343 0 005 8.333c0 1.834 1.5 3.334 3.333 3.334 1.834 0 3.334-1.5 3.334-3.334C11.667 6.5 10.167 5 8.333 5zM6.667 8.333c0 .917.75 1.667 1.666 1.667C9.25 10 10 9.25 10 8.333c0-.916-.75-1.666-1.667-1.666-.916 0-1.666.75-1.666 1.666z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask35Icon;
/* prettier-ignore-end */
