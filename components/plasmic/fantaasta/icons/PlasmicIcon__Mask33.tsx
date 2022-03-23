// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask33IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask33Icon(props: Mask33IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M12.833 6.417c0 .35-.233.583-.583.583H6.415c-.35 0-.584-.233-.584-.583V.583c0-.35.234-.583.584-.583a6.4 6.4 0 016.418 6.417zm-.525 2.508c-.992 2.45-3.384 3.908-5.893 3.908a6.455 6.455 0 01-2.51-.525c-3.267-1.4-4.784-5.133-3.383-8.4C1.163 2.392 2.33 1.167 3.847.525c.292-.117.642 0 .759.292.117.291 0 .641-.292.758-1.225.583-2.217 1.575-2.742 2.8-1.109 2.683.117 5.775 2.8 6.883 2.685 1.109 5.777-.116 6.886-2.8.117-.291.467-.408.758-.291.292.116.409.466.292.758zm-5.31-7.7c2.393.233 4.318 2.158 4.61 4.608h-4.61V1.225z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask33Icon;
/* prettier-ignore-end */
