// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: XC-0mAT2Chwv
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import sty from "./PlasmicValueprop.module.css"; // plasmic-import: XC-0mAT2Chwv/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: ww9gPs7WhSQI/icon

export type PlasmicValueprop__VariantMembers = {
  dark: "dark";
  flat: "flat";
  vertical: "vertical";
  color: "lightQuarternary";
  card: "card";
  flatIcon: "flatIcon";
  justDescription: "justDescription";
};

export type PlasmicValueprop__VariantsArgs = {
  dark?: SingleBooleanChoiceArg<"dark">;
  flat?: SingleBooleanChoiceArg<"flat">;
  vertical?: SingleBooleanChoiceArg<"vertical">;
  color?: SingleChoiceArg<"lightQuarternary">;
  card?: SingleBooleanChoiceArg<"card">;
  flatIcon?: SingleBooleanChoiceArg<"flatIcon">;
  justDescription?: SingleBooleanChoiceArg<"justDescription">;
};

type VariantPropType = keyof PlasmicValueprop__VariantsArgs;
export const PlasmicValueprop__VariantProps = new Array<VariantPropType>(
  "dark",
  "flat",
  "vertical",
  "color",
  "card",
  "flatIcon",
  "justDescription"
);

export type PlasmicValueprop__ArgsType = {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot22?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicValueprop__ArgsType;
export const PlasmicValueprop__ArgProps = new Array<ArgPropType>(
  "slot",
  "slot2",
  "slot22",
  "children"
);

export type PlasmicValueprop__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultValuepropProps {
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot22?: React.ReactNode;
  children?: React.ReactNode;
  dark?: SingleBooleanChoiceArg<"dark">;
  flat?: SingleBooleanChoiceArg<"flat">;
  vertical?: SingleBooleanChoiceArg<"vertical">;
  color?: SingleChoiceArg<"lightQuarternary">;
  card?: SingleBooleanChoiceArg<"card">;
  flatIcon?: SingleBooleanChoiceArg<"flatIcon">;
  justDescription?: SingleBooleanChoiceArg<"justDescription">;
  className?: string;
}

function PlasmicValueprop__RenderFunc(props: {
  variants: PlasmicValueprop__VariantsArgs;
  args: PlasmicValueprop__ArgsType;
  overrides: PlasmicValueprop__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootcard]: hasVariant(variants, "card", "card"),
          [sty.rootcard_vertical]:
            hasVariant(variants, "card", "card") &&
            hasVariant(variants, "vertical", "vertical"),
          [sty.rootflatIcon]: hasVariant(variants, "flatIcon", "flatIcon"),
          [sty.rootflat]: hasVariant(variants, "flat", "flat"),
          [sty.rootjustDescription]: hasVariant(
            variants,
            "justDescription",
            "justDescription"
          ),
          [sty.rootvertical]: hasVariant(variants, "vertical", "vertical")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___3MwG6, {
          [sty.freeBoxcard___3MwG6MAxe]: hasVariant(variants, "card", "card"),
          [sty.freeBoxcard_vertical___3MwG6MAxeOJfCu]:
            hasVariant(variants, "card", "card") &&
            hasVariant(variants, "vertical", "vertical"),
          [sty.freeBoxcolor_lightQuarternary___3MwG6WfpAj]: hasVariant(
            variants,
            "color",
            "lightQuarternary"
          ),
          [sty.freeBoxflatIcon___3MwG6SqVCg]: hasVariant(
            variants,
            "flatIcon",
            "flatIcon"
          ),
          [sty.freeBoxflat___3MwG63J4I]: hasVariant(variants, "flat", "flat"),
          [sty.freeBoxvertical___3MwG6OJfCu]: hasVariant(
            variants,
            "vertical",
            "vertical"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__ny1SY)}
              displayHeight={"56px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"none" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"56px" as const}
              src={
                "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/twitter/281/red-apple_1f34e.png" as const
              }
            />
          ),

          value: args.slot2
        })}
      </div>

      {false ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__ypx76, {
            [sty.freeBoxcard__ypx76MAxe]: hasVariant(variants, "card", "card"),
            [sty.freeBoxcard_vertical__ypx76MAxeOJfCu]:
              hasVariant(variants, "card", "card") &&
              hasVariant(variants, "vertical", "vertical"),
            [sty.freeBoxcolor_lightQuarternary__ypx76WfpAj]: hasVariant(
              variants,
              "color",
              "lightQuarternary"
            ),
            [sty.freeBoxflatIcon__ypx76SqVCg]: hasVariant(
              variants,
              "flatIcon",
              "flatIcon"
            ),
            [sty.freeBoxflat__ypx763J4I]: hasVariant(variants, "flat", "flat"),
            [sty.freeBoxvertical__ypx76OJfCu]: hasVariant(
              variants,
              "vertical",
              "vertical"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <Icon8Icon
                className={classNames(projectcss.all, sty.svg___4Rrn4)}
                role={"img"}
              />
            ),

            value: args.slot22
          })}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__xYdJ, {
          [sty.freeBoxflat__xYdJ3J4I]: hasVariant(variants, "flat", "flat"),
          [sty.freeBoxjustDescription__xYdJRCeSb]: hasVariant(
            variants,
            "justDescription",
            "justDescription"
          )
        })}
      >
        {(
          hasVariant(variants, "justDescription", "justDescription")
            ? false
            : true
        )
          ? p.renderPlasmicSlot({
              defaultContents: "Label",
              value: args.children,
              className: classNames(sty.slotTargetChildren, {
                [sty.slotTargetChildrendark]: hasVariant(
                  variants,
                  "dark",
                  "dark"
                ),
                [sty.slotTargetChildrenjustDescription]: hasVariant(
                  variants,
                  "justDescription",
                  "justDescription"
                )
              })
            })
          : null}
        {p.renderPlasmicSlot({
          defaultContents:
            "Porttitor feugiat a scelerisque nullam parturient vestibulum tempor a litora suscipit arcu potenti varius venenatis venenatis dapibus fames adipiscing in in taciti.",
          value: args.slot,
          className: classNames(sty.slotTargetSlot, {
            [sty.slotTargetSlotcard]: hasVariant(variants, "card", "card"),
            [sty.slotTargetSlotdark]: hasVariant(variants, "dark", "dark"),
            [sty.slotTargetSlotjustDescription]: hasVariant(
              variants,
              "justDescription",
              "justDescription"
            )
          })
        })}
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicValueprop__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicValueprop__VariantsArgs;
    args?: PlasmicValueprop__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicValueprop__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicValueprop__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicValueprop__ArgProps,
      internalVariantPropNames: PlasmicValueprop__VariantProps
    });

    return PlasmicValueprop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicValueprop";
  } else {
    func.displayName = `PlasmicValueprop.${nodeName}`;
  }
  return func;
}

export const PlasmicValueprop = Object.assign(
  // Top-level PlasmicValueprop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicValueprop
    internalVariantProps: PlasmicValueprop__VariantProps,
    internalArgProps: PlasmicValueprop__ArgProps
  }
);

export default PlasmicValueprop;
/* prettier-ignore-end */
