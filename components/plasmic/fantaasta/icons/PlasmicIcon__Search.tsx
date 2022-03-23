// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchIcon(props: SearchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M12.917 11.667h-.659l-.233-.225a5.417 5.417 0 001.233-4.45c-.391-2.317-2.325-4.167-4.658-4.45A5.42 5.42 0 002.542 8.6c.283 2.333 2.133 4.267 4.45 4.658a5.417 5.417 0 004.45-1.233l.225.233v.659l3.541 3.541a.88.88 0 001.242 0 .88.88 0 000-1.241l-3.533-3.55zm-5 0a3.745 3.745 0 01-3.75-3.75 3.745 3.745 0 013.75-3.75 3.745 3.745 0 013.75 3.75 3.745 3.745 0 01-3.75 3.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchIcon;
/* prettier-ignore-end */
