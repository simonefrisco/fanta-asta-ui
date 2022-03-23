// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask16Icon(props: Mask16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M3.135 1.5H.75a.75.75 0 010-1.5h3a.75.75 0 01.735.603l.63 3.147H17.25a.75.75 0 01.737.89l-1.201 6.299a2.246 2.246 0 01-2.236 1.811H7.274a2.25 2.25 0 01-2.25-1.81L3.773 4.68a.75.75 0 01-.013-.064L3.135 1.5zM5.25 15.751c0 .901.6 1.502 1.499 1.502.899 0 1.499-.601 1.499-1.502 0-.9-.6-1.501-1.5-1.501-.898 0-1.498.6-1.498 1.501zm8.25-.001c0 .9.6 1.5 1.499 1.5.899 0 1.499-.6 1.499-1.5s-.6-1.5-1.5-1.5c-.898 0-1.498.6-1.498 1.5zm-7.004-5.104L5.416 5.25h10.927l-1.03 5.402a.749.749 0 01-.749.598H7.26a.754.754 0 01-.764-.604z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask16Icon;
/* prettier-ignore-end */
