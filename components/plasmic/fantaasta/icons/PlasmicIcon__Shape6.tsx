// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape6Icon(props: Shape6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 7"}
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
          "M7.5 2.545v1.91h-5v-1.91h5M7.5 0h-5C1.12 0 0 1.14 0 2.545v1.91C0 5.86 1.12 7 2.5 7h5C8.88 7 10 5.86 10 4.455v-1.91C10 1.14 8.88 0 7.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape6Icon;
/* prettier-ignore-end */
