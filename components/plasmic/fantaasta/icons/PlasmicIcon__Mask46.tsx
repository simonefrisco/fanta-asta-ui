// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask46Icon(props: Mask46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 11"}
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
          "M14.75 1.417l-9.167 9.166a.756.756 0 01-.583.25.756.756 0 01-.583-.25L.25 6.417a.806.806 0 010-1.167.806.806 0 011.167 0L5 8.833 13.583.25a.806.806 0 011.167 0 .806.806 0 010 1.167z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask46Icon;
/* prettier-ignore-end */
