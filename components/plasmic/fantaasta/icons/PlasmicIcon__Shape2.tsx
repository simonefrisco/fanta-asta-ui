// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape2Icon(props: Shape2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 12"}
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
          "M0 5.975C0 2.68 2.916 0 6.5 0S13 2.68 13 5.975c0 3.295-2.916 5.976-6.5 5.976S0 9.27 0 5.975zm1.23 0c0 2.67 2.366 4.845 5.27 4.845 2.904 0 5.27-2.175 5.27-4.845S9.404 1.131 6.5 1.131c-2.904 0-5.27 2.174-5.27 4.844z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape2Icon;
/* prettier-ignore-end */
