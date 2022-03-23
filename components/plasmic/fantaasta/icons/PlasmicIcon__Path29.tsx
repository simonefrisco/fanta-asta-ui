// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path29Icon(props: Path29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 11"}
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
          "M10 11a.596.596 0 01-.43-.187L0 1.24l1.788-.012L10 9.38 19.403 0c.073.1.18.353.253.528.105.25.213.508.344.71l-9.57 9.576A.596.596 0 0110 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path29Icon;
/* prettier-ignore-end */
