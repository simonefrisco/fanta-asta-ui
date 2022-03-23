// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask36Icon(props: Mask36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 19"}
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
          "M14.167 1.667H12.5V.833c0-.5-.333-.833-.833-.833-.5 0-.834.333-.834.833v.834h-5V.833C5.833.333 5.5 0 5 0c-.5 0-.833.333-.833.833v.834H2.5c-1.417 0-2.5 1.083-2.5 2.5v11.666c0 1.417 1.083 2.5 2.5 2.5h11.667c1.416 0 2.5-1.083 2.5-2.5V4.167c0-1.417-1.084-2.5-2.5-2.5zM2.5 3.333h1.667v.834c0 .5.333.833.833.833.5 0 .833-.333.833-.833v-.834h5v.834c0 .5.334.833.834.833.5 0 .833-.333.833-.833v-.834h1.667c.5 0 .833.334.833.834v2.5H1.667v-2.5c0-.5.333-.834.833-.834zm0 13.334h11.667c.5 0 .833-.334.833-.834v-7.5H1.667v7.5c0 .5.333.834.833.834z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask36Icon;
/* prettier-ignore-end */
