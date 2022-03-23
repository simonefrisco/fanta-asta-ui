// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskIcon(props: MaskIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 17"}
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
          "M13.248 0c1.365 0 2.65.578 3.613 1.568 1.044.99 1.606 2.392 1.445 3.795 0 1.403-.562 2.805-1.525 3.795L9.715 16.42a.72.72 0 01-.562.248.72.72 0 01-.562-.248L1.526 9.16C.562 8.168 0 6.765 0 5.362s.562-2.805 1.606-3.795a5.087 5.087 0 017.306 0l.321.33.322-.33A5.224 5.224 0 0113.248 0zM9.233 14.687l6.504-6.684c.723-.742 1.124-1.65 1.124-2.64 0-.99-.401-1.898-1.044-2.64-.722-.66-1.606-1.073-2.57-1.073-1.043 0-1.926.413-2.649 1.073l-.803.907a.762.762 0 01-1.124 0l-.883-.907C7.066 1.98 6.182 1.65 5.218 1.65c-.882 0-1.846.33-2.488 1.073-.642.742-1.044 1.65-1.044 2.64 0 .99.321 1.898 1.044 2.64l6.503 6.684z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskIcon;
/* prettier-ignore-end */
