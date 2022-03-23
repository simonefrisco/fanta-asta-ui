// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask14Icon(props: Mask14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M13.5.75V3c0 .45-.3.75-.75.75S12 3.45 12 3V1.5H7.5V12H9c.45 0 .75.3.75.75s-.3.75-.75.75H4.5c-.45 0-.75-.3-.75-.75s.3-.75.75-.75H6V1.5H1.5V3c0 .45-.3.75-.75.75S0 3.45 0 3V.75C0 .3.3 0 .75 0h12c.45 0 .75.3.75.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask14Icon;
/* prettier-ignore-end */
