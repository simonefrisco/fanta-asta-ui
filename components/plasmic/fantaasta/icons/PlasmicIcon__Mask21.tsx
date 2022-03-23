// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask21Icon(props: Mask21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M0 4.583A4.57 4.57 0 014.583 0a4.57 4.57 0 014.584 4.583 4.57 4.57 0 01-4.584 4.584A4.57 4.57 0 010 4.583zm.833 0a3.734 3.734 0 003.75 3.75 3.734 3.734 0 003.75-3.75 3.734 3.734 0 00-3.75-3.75 3.734 3.734 0 00-3.75 3.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask21Icon;
/* prettier-ignore-end */
