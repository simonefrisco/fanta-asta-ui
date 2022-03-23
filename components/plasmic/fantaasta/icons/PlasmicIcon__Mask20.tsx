// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask20Icon(props: Mask20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 14"}
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
          "M14.25 0h-12C.975 0 0 .975 0 2.25v9c0 1.275.975 2.25 2.25 2.25h12c1.275 0 2.25-.975 2.25-2.25v-9C16.5.975 15.525 0 14.25 0zm-12 1.5h12c.3 0 .525.15.675.45L8.25 6.6 1.575 1.95c.15-.3.375-.45.675-.45zm-.75 9.75c0 .45.3.75.75.75h12c.45 0 .75-.3.75-.75V3.675L8.7 8.1c-.15.075-.3.15-.45.15-.15 0-.3-.075-.45-.15L1.5 3.675v7.575z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask20Icon;
/* prettier-ignore-end */
