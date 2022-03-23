// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path8Icon(props: Path8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 22"}
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
          "M0 15.853s4.563-.905 4.698-7.224C4.834 2.31 4.082.153 4.082.153L12.686 0s.094 7.042.095 9.59c.004 6.193 4.832 6.912 4.832 6.912s-1.003 4.899-8.8 5.332C2.726 22.172 0 15.854 0 15.854z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path8Icon;
/* prettier-ignore-end */
