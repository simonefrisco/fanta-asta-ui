// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask34IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask34Icon(props: Mask34IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
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
          "M7.992.992l-3.5 3.5a.53.53 0 01-.409.175.53.53 0 01-.408-.175l-3.5-3.5a.564.564 0 010-.817.564.564 0 01.817 0l3.091 3.092L7.175.175a.564.564 0 01.817 0 .564.564 0 010 .817z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask34Icon;
/* prettier-ignore-end */
