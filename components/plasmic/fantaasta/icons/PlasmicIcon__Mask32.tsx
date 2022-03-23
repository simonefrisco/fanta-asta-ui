// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask32Icon(props: Mask32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 17"}
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
          "M15 8.33c0-.5.333-.834.833-.834.5 0 .834.334.834.833v5.83c0 1.417-1.084 2.5-2.5 2.5H2.5c-1.417 0-2.5-1.083-2.5-2.5V2.5C0 1.083 1.083 0 2.5 0h9.167c.5 0 .833.333.833.833 0 .5-.333.833-.833.833H2.5c-.5 0-.833.333-.833.833v11.66c0 .5.333.834.833.834h11.667c.5 0 .833-.333.833-.833V8.33zm-6.083 2.248l9.166-9.162a.805.805 0 000-1.166.806.806 0 00-1.166 0L8.333 8.83 6.417 6.912a.806.806 0 00-1.167 0 .805.805 0 000 1.166l2.5 2.5c.167.166.333.25.583.25a.76.76 0 00.584-.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask32Icon;
/* prettier-ignore-end */
