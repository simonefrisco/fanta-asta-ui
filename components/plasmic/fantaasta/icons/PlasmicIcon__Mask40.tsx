// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask40Icon(props: Mask40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 17"}
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
          "M3 .75a.75.75 0 011.5 0V3A.75.75 0 013 3V.75zm10.5 10.473V6.741c.5.047 1.15.214 1.634.719.902.94.527 2.199.527 2.199s-.38 1.091-1.4 1.482a36.81 36.81 0 01-.761.082zm-.008 1.523A4 4 0 019.5 16.5H4a4 4 0 01-4-4V5.25h13.56c.237 0 .38.026.568.06l.239.042c1.784.282 2.646 2.166 2.811 2.898.165.732.072 2.035-.885 3.248-.844 1.07-2.436 1.226-2.8 1.248zM12 6.75H1.5V12a3 3 0 003 3H9a3 3 0 003-3V6.75zM6.75 0A.75.75 0 006 .75V3a.75.75 0 001.5 0V.75A.75.75 0 006.75 0zM9 .75a.75.75 0 011.5 0V3A.75.75 0 019 3V.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask40Icon;
/* prettier-ignore-end */
