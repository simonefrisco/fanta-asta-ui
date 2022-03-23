// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask26Icon(props: Mask26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M3.484 1.667H.834A.833.833 0 01.833 0h3.333c.397 0 .739.28.817.67l.7 3.497h13.483c.522 0 .916.476.818.99l-1.334 6.997a2.496 2.496 0 01-2.484 2.013H8.083a2.5 2.5 0 01-2.5-2.012L4.19 5.2a.828.828 0 01-.014-.07l-.693-3.462zM5.834 17.5c0 1.001.665 1.668 1.665 1.668.999 0 1.665-.667 1.665-1.668 0-1-.666-1.668-1.665-1.668-1 0-1.666.667-1.666 1.668zm9.166 0c0 1 .666 1.667 1.665 1.667 1 0 1.666-.667 1.666-1.667s-.666-1.667-1.666-1.667c-.999 0-1.665.667-1.665 1.667zm-7.783-5.67l-1.2-5.997H18.16l-1.144 6.003a.832.832 0 01-.832.664H8.067a.838.838 0 01-.85-.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask26Icon;
/* prettier-ignore-end */
