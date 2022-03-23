// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape7Icon(props: Shape7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 20"}
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
          "M7.917 9.167h-1.25V5H10c.5 0 .833-.333.833-.833 0-.5-.333-.834-.833-.834H6.667v-2.5c0-.5-.334-.833-.834-.833C5.333 0 5 .333 5 .833v2.5H3.75A3.734 3.734 0 000 7.083a3.734 3.734 0 003.75 3.75H5V15H.833c-.5 0-.833.333-.833.833 0 .5.333.834.833.834H5v2.5c0 .5.333.833.833.833.5 0 .834-.333.834-.833v-2.5h1.25a3.734 3.734 0 003.75-3.75 3.734 3.734 0 00-3.75-3.75zm-4.167 0a2.063 2.063 0 01-2.083-2.084C1.667 5.917 2.583 5 3.75 5H5v4.167H3.75zM6.667 15h1.25A2.063 2.063 0 0010 12.917a2.063 2.063 0 00-2.083-2.084h-1.25V15z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape7Icon;
/* prettier-ignore-end */
