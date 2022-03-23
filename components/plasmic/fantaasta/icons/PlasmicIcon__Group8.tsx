// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group8Icon(props: Group8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 10"}
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
          "M1.303 8.438c-.414.434-.71.827-1.123.393-.414-.434-.04-.745.374-1.179l5.24-7.07C6.209.146 8.003-.246 8.416.188c.414.433.04 2.316-.374 2.75l-6.738 5.5z"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default Group8Icon;
/* prettier-ignore-end */
