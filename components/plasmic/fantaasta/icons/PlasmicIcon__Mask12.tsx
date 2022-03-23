// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask12Icon(props: Mask12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M14.925 1.517c-2.025-2.023-5.4-2.023-7.425 0L2.475 6.611a.68.68 0 00-.225.525v6.068L.225 15.226c-.3.3-.3.75 0 1.05.15.15.3.224.525.224a.681.681 0 00.525-.225L3.3 14.253h6.075a.681.681 0 00.525-.225l5.025-5.094c2.1-2.023 2.1-5.32 0-7.417zm-5.85 11.237H4.8l1.5-1.498h4.275l-1.5 1.498zm3-2.996l1.8-1.873c1.5-1.424 1.5-3.82.075-5.32-1.5-1.497-3.825-1.497-5.325 0L3.75 7.436v4.27l1.725-1.723 5.25-5.244c.3-.3.75-.3 1.05 0 .3.3.3.75 0 1.05L7.8 9.757h4.275z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask12Icon;
/* prettier-ignore-end */
