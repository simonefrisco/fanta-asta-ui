// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group12Icon(props: Group12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 19"}
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
          "M16 17.1c0 1.05-.896 1.9-2 1.9H2c-1.105 0-2-.85-2-1.9V1.9C0 .85.895 0 2 0h12c1.104 0 2 .85 2 1.9v15.2z"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default Group12Icon;
/* prettier-ignore-end */
