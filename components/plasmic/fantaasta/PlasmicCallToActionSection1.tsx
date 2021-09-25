// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: CFD5al1x8pOU
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: F-KkpFIKCuog/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import * as sty from "./PlasmicCallToActionSection1.module.css"; // plasmic-import: CFD5al1x8pOU/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: Gng1eaWxMrAo/icon

export type PlasmicCallToActionSection1__VariantMembers = {};

export type PlasmicCallToActionSection1__VariantsArgs = {};
type VariantPropType = keyof PlasmicCallToActionSection1__VariantsArgs;
export const PlasmicCallToActionSection1__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCallToActionSection1__ArgsType = {
  art?: React.ReactNode;
  copy?: React.ReactNode;
};

type ArgPropType = keyof PlasmicCallToActionSection1__ArgsType;
export const PlasmicCallToActionSection1__ArgProps = new Array<ArgPropType>(
  "art",
  "copy"
);

export type PlasmicCallToActionSection1__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  art?: p.Flex<"div">;
  copy?: p.Flex<"div">;
};

export interface DefaultCallToActionSection1Props {
  art?: React.ReactNode;
  copy?: React.ReactNode;
  className?: string;
}

function PlasmicCallToActionSection1__RenderFunc(props: {
  variants: PlasmicCallToActionSection1__VariantsArgs;
  args: PlasmicCallToActionSection1__ArgsType;
  overrides: PlasmicCallToActionSection1__OverridesType;
  dataFetches?: PlasmicCallToActionSection1__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(defaultcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(defaultcss.all, sty.art)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img___1Ab5B)}
                  src={
                    "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2916&q=80" as const
                  }
                />

                <div
                  className={classNames(defaultcss.all, sty.freeBox__yLvaT)}
                />
              </React.Fragment>
            ),
            value: args.art
          })}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"copy"}
          data-plasmic-override={overrides.copy}
          hasGap={true}
          className={classNames(defaultcss.all, sty.copy)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__uUgTm)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___2NeAb
                    )}
                  >
                    {"Welcome"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___7NNYk
                    )}
                  >
                    {"Let's get going"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__aJuWn
                    )}
                  >
                    {
                      "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__d4UWf)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__jnaIm)}
                    colors={"blue" as const}
                    slot={"Start now ->"}
                  />

                  <Button
                    bgDifference={"bgDifference" as const}
                    className={classNames("__wab_instance", sty.button__t8Nq7)}
                    darkGray={"darkGray" as const}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.text__oGrIa
                        )}
                      >
                        {"Learn more…"}
                      </div>
                    }
                  />
                </p.Stack>
              </React.Fragment>
            ),
            value: args.copy
          })}
        </p.Stack>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "art", "copy"],
  freeBox: ["freeBox", "art", "copy"],
  art: ["art"],
  copy: ["copy"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  art: "div";
  copy: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCallToActionSection1__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCallToActionSection1__VariantsArgs;
    args?: PlasmicCallToActionSection1__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicCallToActionSection1__Fetches;
  } & Omit<PlasmicCallToActionSection1__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCallToActionSection1__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCallToActionSection1__ArgProps,
      internalVariantPropNames: PlasmicCallToActionSection1__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicCallToActionSection1__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActionSection1";
  } else {
    func.displayName = `PlasmicCallToActionSection1.${nodeName}`;
  }
  return func;
}

export const PlasmicCallToActionSection1 = Object.assign(
  // Top-level PlasmicCallToActionSection1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    art: makeNodeComponent("art"),
    copy: makeNodeComponent("copy"),

    // Metadata about props expected for PlasmicCallToActionSection1
    internalVariantProps: PlasmicCallToActionSection1__VariantProps,
    internalArgProps: PlasmicCallToActionSection1__ArgProps
  }
);

export default PlasmicCallToActionSection1;
/* prettier-ignore-end */