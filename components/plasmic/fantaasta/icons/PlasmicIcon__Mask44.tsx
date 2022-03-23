// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask44Icon(props: Mask44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 12"}
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
          "M20 .833v5c0 .5-.333.834-.833.834-.5 0-.834-.334-.834-.834v-3l-6.5 6.5a.805.805 0 01-1.166 0L7.083 5.75l-5.666 5.667a.757.757 0 01-.584.25.757.757 0 01-.583-.25.806.806 0 010-1.167L6.5 4a.806.806 0 011.167 0l3.583 3.583 5.917-5.916h-3c-.5 0-.834-.334-.834-.834 0-.5.334-.833.834-.833h5c.083 0 .25 0 .333.083.167.084.333.25.417.417.083.083.083.25.083.333z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask44Icon;
/* prettier-ignore-end */
