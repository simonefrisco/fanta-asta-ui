// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path28Icon(props: Path28IconProps) {
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
        opacity={".2"}
        d={
          "M10 11a.616.616 0 01-.43-.175L0 1.178l1.667-.85L10 9.486l9.403-8.78c.073.094-.074-.85 0-.686.105.235.466.97.597 1.16l-9.57 9.647A.616.616 0 0110 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path28Icon;
/* prettier-ignore-end */
