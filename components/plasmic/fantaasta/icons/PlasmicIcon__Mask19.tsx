// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask19Icon(props: Mask19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M2.25 0h10.5C14.025 0 15 .975 15 2.25v7.5c0 1.275-.975 2.25-2.25 2.25h-8.7l-2.775 2.775A.68.68 0 01.75 15c-.075 0-.225 0-.3-.075-.3-.075-.45-.375-.45-.675v-12C0 .975.975 0 2.25 0zm10.5 10.5c.45 0 .75-.3.75-.75v-7.5c0-.45-.3-.75-.75-.75H2.25c-.45 0-.75.3-.75.75v10.2l1.725-1.725a.68.68 0 01.525-.225h9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask19Icon;
/* prettier-ignore-end */
