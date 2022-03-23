// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask23IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask23Icon(props: Mask23IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 17"}
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
          "M14.7 5.413L7.95.169c-.3-.225-.675-.225-.9 0L.3 5.413c-.225.15-.3.374-.3.599v8.24C0 15.527.975 16.5 2.25 16.5h10.5c1.275 0 2.25-.974 2.25-2.247V6.012c0-.225-.075-.45-.3-.6zM9 9.009v5.993H6V9.009h3zm3.75 5.993c.45 0 .75-.3.75-.75V6.387l-6-4.644-6 4.644v7.867c0 .449.3.749.75.749H4.5V8.259c0-.45.3-.749.75-.749h4.5c.45 0 .75.3.75.75v6.742h2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask23Icon;
/* prettier-ignore-end */
