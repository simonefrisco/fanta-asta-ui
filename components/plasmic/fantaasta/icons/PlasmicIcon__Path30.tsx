// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path30Icon(props: Path30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M5.5 11a.626.626 0 01-.556-.356L.027 1.318C-.06 1.142.088.784.117.554.145.326.234.154.36.081A.59.59 0 01.659 0c.233 0 .261.243.371.462L5.5 8.896 9.97.463c.11-.22.139-.463.372-.463.105 0 .204.027.297.081.127.073.216.245.244.474.03.229.177.587.09.763l-4.917 9.326A.626.626 0 015.5 11z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path30Icon;
/* prettier-ignore-end */
