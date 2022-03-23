// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask29Icon(props: Mask29IconProps) {
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
          "M14.167 1.666H12.5V.833c0-.5-.333-.833-.833-.833-.5 0-.834.333-.834.833v.833h-5V.833C5.833.333 5.5 0 5 0c-.5 0-.833.333-.833.833v.833H2.5C1.083 1.666 0 2.749 0 4.165v11.66c0 1.417 1.083 2.5 2.5 2.5h11.667c1.416 0 2.5-1.083 2.5-2.5V4.166c0-1.416-1.084-2.5-2.5-2.5zM2.5 3.332h1.667v.833c0 .5.333.833.833.833.5 0 .833-.334.833-.833v-.833h5v.833c0 .5.334.833.834.833.5 0 .833-.334.833-.833v-.833h1.667c.5 0 .833.333.833.833v2.498H1.667V4.165c0-.5.333-.833.833-.833zm0 13.327h11.667c.5 0 .833-.334.833-.833V8.329H1.667v7.497c0 .5.333.833.833.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask29Icon;
/* prettier-ignore-end */
