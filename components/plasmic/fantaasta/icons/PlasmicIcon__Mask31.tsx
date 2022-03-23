// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask31Icon(props: Mask31IconProps) {
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
          "M2.5 0h11.667c1.416 0 2.5 1.083 2.5 2.499v8.33c0 1.415-1.084 2.498-2.5 2.498H4.5l-3.083 3.082a.757.757 0 01-.584.25c-.083 0-.25 0-.333-.084-.333-.083-.5-.416-.5-.75V2.5C0 1.083 1.083 0 2.5 0zm11.667 11.661c.5 0 .833-.333.833-.833v-8.33c0-.499-.333-.832-.833-.832H2.5c-.5 0-.833.333-.833.833v11.328l1.916-1.916a.757.757 0 01.584-.25h10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask31Icon;
/* prettier-ignore-end */
