// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask30Icon(props: Mask30IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 15"}
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
          "M15.833 0H2.5C1.083 0 0 1.083 0 2.499v9.995c0 1.416 1.083 2.499 2.5 2.499h13.333c1.417 0 2.5-1.083 2.5-2.5V2.5c0-1.416-1.083-2.499-2.5-2.499zM2.5 1.666h13.333c.334 0 .584.166.75.5L9.167 7.33 1.75 2.166c.167-.334.417-.5.75-.5zm-.833 10.828c0 .5.333.833.833.833h13.333c.5 0 .834-.333.834-.833V4.08l-7 4.915c-.167.083-.334.166-.5.166-.167 0-.334-.083-.5-.166l-7-4.915v8.413z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask30Icon;
/* prettier-ignore-end */
