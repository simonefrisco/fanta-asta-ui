// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconLeftIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconLeftIcon(props: IconLeftIconProps) {
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
          "M2.15 11.138c-.059.333.27.593.56.444L6 9.89l3.292 1.692c.29.149.618-.111.56-.444L9.23 7.591l2.642-2.518c.247-.235.12-.665-.211-.712l-3.674-.522L6.349.594a.385.385 0 00-.695 0L4.016 3.84l-3.674.522c-.331.047-.459.477-.212.712l2.642 2.518-.622 3.547zm3.678-2.076l-2.764 1.42.52-2.967a.423.423 0 00-.122-.38l-2.18-2.077 3.04-.431a.394.394 0 00.294-.216l1.385-2.744 1.385 2.744c.06.117.17.198.295.216l3.04.431L8.54 7.136a.423.423 0 00-.122.379l.52 2.968-2.764-1.421a.377.377 0 00-.346 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconLeftIcon;
/* prettier-ignore-end */
