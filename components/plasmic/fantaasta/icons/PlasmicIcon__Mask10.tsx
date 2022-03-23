// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask10Icon(props: Mask10IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 10"}
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
          "M9.7 3.306c.183.046.32.137.366.32a.37.37 0 01-.137.412l-2.101 2.06.502 2.928a.435.435 0 01-.182.458c-.092.045-.183.091-.274.091h-.229L5.042 8.202 2.438 9.575a.49.49 0 01-.502-.046.435.435 0 01-.183-.457l.502-2.929-2.1-2.059c-.138-.092-.184-.275-.138-.458.091-.183.229-.32.411-.32l2.878-.457L4.63.24c.137-.32.685-.32.822 0l1.324 2.654 2.924.412zM6.87 6.052c0-.138.045-.275.137-.412L8.65 4.038l-2.238-.32c-.183 0-.32-.092-.365-.229L5.042 1.476 4.037 3.535c-.092.091-.229.229-.366.229l-2.238.32L3.078 5.64a.739.739 0 01.137.412l-.412 2.242 2.01-1.053a.342.342 0 01.411 0l2.01 1.053-.365-2.242z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask10Icon;
/* prettier-ignore-end */
