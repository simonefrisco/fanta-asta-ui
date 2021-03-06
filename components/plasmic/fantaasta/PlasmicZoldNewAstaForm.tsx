// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: wfDe24iI-Nf
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
import SettingInput from "../../SettingInput"; // plasmic-import: JGXUTtU5D6Eq/component
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import sty from "./PlasmicZoldNewAstaForm.module.css"; // plasmic-import: wfDe24iI-Nf/css

export type PlasmicZoldNewAstaForm__VariantMembers = {
  state: "empty" | "completed";
};

export type PlasmicZoldNewAstaForm__VariantsArgs = {
  state?: MultiChoiceArg<"empty" | "completed">;
};

type VariantPropType = keyof PlasmicZoldNewAstaForm__VariantsArgs;
export const PlasmicZoldNewAstaForm__VariantProps = new Array<VariantPropType>(
  "state"
);

export type PlasmicZoldNewAstaForm__ArgsType = {};
type ArgPropType = keyof PlasmicZoldNewAstaForm__ArgsType;
export const PlasmicZoldNewAstaForm__ArgProps = new Array<ArgPropType>();

export type PlasmicZoldNewAstaForm__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultZoldNewAstaFormProps {
  state?: MultiChoiceArg<"empty" | "completed">;
  className?: string;
}

function PlasmicZoldNewAstaForm__RenderFunc(props: {
  variants: PlasmicZoldNewAstaForm__VariantsArgs;
  args: PlasmicZoldNewAstaForm__ArgsType;
  overrides: PlasmicZoldNewAstaForm__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <SettingInput
          className={classNames("__wab_instance", sty.settingInput__s2Efj)}
          namesetting={"Nome Asta"}
        />

        <SettingInput
          className={classNames("__wab_instance", sty.settingInput___1PKpq)}
          namesetting={"Numero Partecipanti"}
        />

        <SettingInput
          className={classNames("__wab_instance", sty.settingInput__zT)}
          namesetting={"Budget Iniziale"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rjPT
          )}
        >
          {"Impostazioni Rose"}
        </div>

        <SettingInput
          className={classNames("__wab_instance", sty.settingInput__wkhZ)}
          namesetting={"Numero Totale Giocatori"}
        />

        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          children2={
            <svg
              className={classNames(projectcss.all, sty.svg__fhnfG)}
              role={"img"}
            />
          }
          className={classNames("__wab_instance", sty.button)}
          colors={"indigo" as const}
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xMAzY
              )}
            >
              {"Crea"}
            </div>
          }
        >
          <svg
            className={classNames(projectcss.all, sty.svg__mPhxO)}
            role={"img"}
          />
        </Button>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "button"],
  freeBox: ["freeBox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicZoldNewAstaForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicZoldNewAstaForm__VariantsArgs;
    args?: PlasmicZoldNewAstaForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicZoldNewAstaForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicZoldNewAstaForm__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicZoldNewAstaForm__ArgProps,
      internalVariantPropNames: PlasmicZoldNewAstaForm__VariantProps
    });

    return PlasmicZoldNewAstaForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicZoldNewAstaForm";
  } else {
    func.displayName = `PlasmicZoldNewAstaForm.${nodeName}`;
  }
  return func;
}

export const PlasmicZoldNewAstaForm = Object.assign(
  // Top-level PlasmicZoldNewAstaForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicZoldNewAstaForm
    internalVariantProps: PlasmicZoldNewAstaForm__VariantProps,
    internalArgProps: PlasmicZoldNewAstaForm__ArgProps
  }
);

export default PlasmicZoldNewAstaForm;
/* prettier-ignore-end */
