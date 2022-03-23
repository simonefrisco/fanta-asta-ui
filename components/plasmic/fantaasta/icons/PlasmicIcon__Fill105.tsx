// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill105IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill105Icon(props: Fill105IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 24"}
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
          "M20.543 21.755c.104 1.487-1.397 2.562-2.771 1.983l-5.329-2.241-5.35 2.192a2 2 0 01-2.752-2.009l.465-5.847-3.75-4.508A2 2 0 012.123 8.1l5.65-1.362 3.05-4.949c.786-1.274 2.642-1.265 3.415.016l3.006 4.977 5.638 1.414a2 2 0 011.04 3.233l-3.792 4.473.412 5.851z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill105Icon;
/* prettier-ignore-end */
