
import React from 'react';

type Icon = React.ComponentType<React.ComponentProps<'svg'>>;

export type LinkOrButton = {
  callToAction?: CallToActionType;
  containerClass?: string;
  linkClass?: string;
  iconClass?: string;
};

interface Grid1ItemProps {
    image?: ChicaneImage
    title?: TextProps
    subtitle?: TextProps
    actions?: Array<CallToActionType>
}

interface TwoColumnImageTextProps {
    title?: TextProps
    subtitle?: TextProps
    image?: ChicaneImage
}

export interface FeatureProps {
    actionSection: ActionSectionProps;
    image?: ChicaneImage;
}

export interface ActionSectionProps {
    twoText: DoubleTextProps;
    actions: Array<CallToActionType>;
}

export interface DoubleTextProps {
    title?: TextProps
    subtitle?: TextProps
}

export interface TextProps {
    textClassNames?: string
    text?: string
    color?: string
    size?: string
    fontSize?: TailWindTextSizes
    alignment?: TailWindTextAlign
}

export interface ChicaneImage {
    url?: string
    alt?: string
    width?: string
    height?: string
}

interface ToggleMenuProps {
    handleToggleMenuOnClick: any;
    isToggleMenuOpen: boolean
}

interface Link {
    label?: string
    href?: string
    ariaLabel?: string
    icon?: Icon
}

export interface MenuLink extends Link {
    links?: Array<Link>
}

export type CallToActionType = {
  text?: string;
  href: string;
  icon?: Icon;
  targetBlank?: boolean;
};

export interface HeaderProps {
    links?: Array<MenuLink>;
    actions?: Array<CallToActionType>;
    isSticky?: boolean;
    showToggleTheme: boolean;
    showRssFeed?: boolean;
    position: 'left' | 'right' | 'center';
}

// TailWind Types
type TailWindTextSizes = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' | 'text-7xl' | 'text-8xl' | 'text-9xl'
type TailWindSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
type TailWindColor = 'primary' | 'secondary' | 'accent' | 'neutral' | 'base-100' | 'info' | 'success' | 'warning' | 'error'
type TailWindFont = 'sans' | 'serif' | 'mono'
type TailWindFontWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
type TailWindTextAlign = 'text-left' | 'text-center' | 'tex-right' | 'text-justify'
type GridStyle = 'style1' | 'style2'
