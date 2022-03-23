// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path22Icon(props: Path22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 18"}
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
          "M19.94 6.79a1.237 1.237 0 00-1.01-.802l-5.395-.736L11.123.657A1.261 1.261 0 0010 0c-.477 0-.91.254-1.122.657L6.466 5.252l-5.394.736a1.233 1.233 0 00-1.01.802c-.148.425-.026.893.316 1.206l3.904 3.577-.921 5.052c-.08.441.112.887.498 1.15a1.314 1.314 0 001.317.09L10 15.48l4.825 2.385a1.314 1.314 0 001.317-.09c.386-.263.579-.71.498-1.15l-.92-5.052 3.902-3.578c.34-.311.464-.78.317-1.205z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path22Icon;
/* prettier-ignore-end */
