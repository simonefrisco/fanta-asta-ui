// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xdSnfxWCziyzb8tBiGitqa
// Component: 3pqoTJs_Sosu
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
import Logo from "../../Logo"; // plasmic-import: cTUv7R2uelNJ/component
import Button from "../../Button"; // plasmic-import: ILa2cLxyoTg0/component

import { useScreenVariants as useScreenVariantsfKkpFikCuog } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: F-KkpFIKCuog/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_fantaasta.module.css"; // plasmic-import: xdSnfxWCziyzb8tBiGitqa/projectcss
import sty from "./PlasmicNavigation.module.css"; // plasmic-import: 3pqoTJs_Sosu/css

export type PlasmicNavigation__VariantMembers = {
  dark: "dark";
  centered: "centered";
  hideCta: "hideCta";
  lightBg: "lightBg";
};

export type PlasmicNavigation__VariantsArgs = {
  dark?: SingleBooleanChoiceArg<"dark">;
  centered?: SingleBooleanChoiceArg<"centered">;
  hideCta?: SingleBooleanChoiceArg<"hideCta">;
  lightBg?: SingleBooleanChoiceArg<"lightBg">;
};

type VariantPropType = keyof PlasmicNavigation__VariantsArgs;
export const PlasmicNavigation__VariantProps = new Array<VariantPropType>(
  "dark",
  "centered",
  "hideCta",
  "lightBg"
);

export type PlasmicNavigation__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNavigation__ArgsType;
export const PlasmicNavigation__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicNavigation__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultNavigationProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  dark?: SingleBooleanChoiceArg<"dark">;
  centered?: SingleBooleanChoiceArg<"centered">;
  hideCta?: SingleBooleanChoiceArg<"hideCta">;
  lightBg?: SingleBooleanChoiceArg<"lightBg">;
  className?: string;
}

function PlasmicNavigation__RenderFunc(props: {
  variants: PlasmicNavigation__VariantsArgs;
  args: PlasmicNavigation__ArgsType;
  overrides: PlasmicNavigation__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfKkpFikCuog()
  });

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
          [sty.rootcentered]: hasVariant(variants, "centered", "centered"),
          [sty.rootdark]: hasVariant(variants, "dark", "dark"),
          [sty.roothideCta]: hasVariant(variants, "hideCta", "hideCta"),
          [sty.rootlightBg]: hasVariant(variants, "lightBg", "lightBg")
        }
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__a7Wis, {
          [sty.freeBoxcentered__a7Wis4TMo]: hasVariant(
            variants,
            "centered",
            "centered"
          ),
          [sty.freeBoxdark__a7Wis3YpJc]: hasVariant(variants, "dark", "dark"),
          [sty.freeBoxhideCta__a7WisNwqn]: hasVariant(
            variants,
            "hideCta",
            "hideCta"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <Logo className={classNames("__wab_instance", sty.logo__dw7Mc)} />
          ),

          value: args.children
        })}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__vLx5W, {
            [sty.freeBoxcentered__vLx5W4TMo]: hasVariant(
              variants,
              "centered",
              "centered"
            ),
            [sty.freeBoxhideCta__vLx5WNwqn]: hasVariant(
              variants,
              "hideCta",
              "hideCta"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__yKvJl
                  )}
                  component={Link}
                  href={"/app/home" as const}
                  platform={"nextjs"}
                >
                  {"Asta Home"}
                </p.PlasmicLink>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__maWqZ)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__z8ErL)}
                  link={"/app/home" as const}
                  navLink={true}
                  slot={"Arena"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__mw3Rz)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__glbD7)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__hhPz)}
                  navLink={true}
                  slot={"Features"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__jTeOt)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg___3YwLi)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__se7Hq)}
                  navLink={true}
                  slot={"Company"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__yAjy)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__bWter)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__uawCz)}
                  navLink={true}
                  slot={"Contact"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__wKxsi)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__j0Tu)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__drwbJ)}
                  navLink={true}
                  slot={"Log in"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg___0OnP4)}
                    role={"img"}
                  />
                </Button>

                <Button
                  children2={
                    <svg
                      className={classNames(projectcss.all, sty.svg__ulTAx)}
                      role={"img"}
                    />
                  }
                  className={classNames("__wab_instance", sty.button__tH5U)}
                  darkGray={true}
                  slot={"Sign up"}
                >
                  <svg
                    className={classNames(projectcss.all, sty.svg__dZekF)}
                    role={"img"}
                  />
                </Button>
              </React.Fragment>
            ),
            value: args.slot
          })}
        </p.Stack>

        {(hasVariant(variants, "centered", "centered") ? true : false) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__aslRl, {
              [sty.freeBoxcentered__aslRl4TMo]: hasVariant(
                variants,
                "centered",
                "centered"
              )
            })}
          >
            {(hasVariant(variants, "centered", "centered") ? false : true) ? (
              <button
                className={classNames(
                  projectcss.all,
                  projectcss.button,
                  projectcss.__wab_text,
                  sty.button__n6XRf,
                  {
                    [sty.buttoncentered__n6XRf4TMo]: hasVariant(
                      variants,
                      "centered",
                      "centered"
                    ),
                    [sty.buttondark__n6XRf3YpJc]: hasVariant(
                      variants,
                      "dark",
                      "dark"
                    )
                  }
                )}
              >
                {"Sign up"}
              </button>
            ) : null}

            <Button
              children2={
                <svg
                  className={classNames(projectcss.all, sty.svg___8JFht)}
                  role={"img"}
                />
              }
              className={classNames("__wab_instance", sty.button__oaZRb, {
                [sty.buttondark__oaZRb3YpJc]: hasVariant(
                  variants,
                  "dark",
                  "dark"
                )
              })}
              dark={hasVariant(variants, "dark", "dark") ? true : undefined}
              navLink={true}
              slot={"Log in"}
            >
              <svg
                className={classNames(projectcss.all, sty.svg__jms4Y)}
                role={"img"}
              />
            </Button>
          </div>
        ) : null}
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
  PlasmicNavigation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavigation__VariantsArgs;
    args?: PlasmicNavigation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavigation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavigation__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavigation__ArgProps,
      internalVariantPropNames: PlasmicNavigation__VariantProps
    });

    return PlasmicNavigation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavigation";
  } else {
    func.displayName = `PlasmicNavigation.${nodeName}`;
  }
  return func;
}

export const PlasmicNavigation = Object.assign(
  // Top-level PlasmicNavigation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNavigation
    internalVariantProps: PlasmicNavigation__VariantProps,
    internalArgProps: PlasmicNavigation__ArgProps
  }
);

export default PlasmicNavigation;
/* prettier-ignore-end */