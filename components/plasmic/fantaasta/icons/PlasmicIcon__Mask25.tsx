// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask25Icon(props: Mask25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 19"}
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
          "M18.333 13.333c0 .5-.333.834-.833.834H.833c-.5 0-.833-.334-.833-.834 0-.5.333-.833.833-.833.917 0 1.667-.75 1.667-1.667V6.667C2.5 3 5.5 0 9.167 0c3.666 0 6.666 3 6.666 6.667v4.166c0 .917.75 1.667 1.667 1.667.5 0 .833.333.833.833zm-7 3.75a2.511 2.511 0 01-2.166 1.25c-.417 0-.834-.083-1.25-.333A2.42 2.42 0 017 17.083c-.25-.416-.083-.916.333-1.166.417-.25.917-.084 1.167.333.025.025.05.058.078.094.063.083.14.181.255.24.417.25.917.083 1.167-.334.25-.417.75-.5 1.167-.333.416.166.416.75.166 1.166zm2.834-6.25c0 .584.166 1.167.416 1.667H3.75c.25-.5.417-1.083.417-1.667V6.667c0-2.75 2.25-5 5-5s5 2.25 5 5v4.166z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask25Icon;
/* prettier-ignore-end */
