// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group24Icon(props: Group24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 14"}
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
          "M22 11.846c0 1.19-.985 2.154-2.2 2.154H2.2C.985 14 0 13.036 0 11.846V2.154C0 .964.985 0 2.2 0h17.6c1.215 0 2.2.964 2.2 2.154v9.692z"
        }
        fill={"currentColor"}
        opacity={".2"}
      ></path>
    </svg>
  );
}

export default Group24Icon;
/* prettier-ignore-end */
