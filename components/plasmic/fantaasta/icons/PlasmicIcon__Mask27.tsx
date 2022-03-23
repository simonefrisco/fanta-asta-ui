// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask27Icon(props: Mask27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M12.667 11.5l3.75 3.75a.806.806 0 010 1.167.9.9 0 01-.584.25.9.9 0 01-.583-.25l-3.75-3.75c-1.25.916-2.75 1.5-4.417 1.5A7.077 7.077 0 010 7.083 7.077 7.077 0 017.083 0a7.077 7.077 0 017.084 7.083c0 1.667-.584 3.25-1.5 4.417zM7.083 1.667c-3 0-5.416 2.416-5.416 5.416 0 3 2.416 5.417 5.416 5.417a5.35 5.35 0 003.834-1.583c1-1 1.583-2.334 1.583-3.834 0-3-2.417-5.416-5.417-5.416z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask27Icon;
/* prettier-ignore-end */
