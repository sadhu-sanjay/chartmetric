
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from "react";
// import ToggleDarkMode from '../atoms/ToggleDarkMode';
import CTA from '~/components/atoms/CTA';
import type { CallToActionType, LinkOrButton } from '~/shared/types';
import { Heading3 } from '~/components/atoms/Heading3';
import { useCycle } from 'framer-motion';
import type { HeaderProps } from '~/shared/types';


export const MobileNav = ({headerProps}: {headerProps: HeaderProps}) => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerProps

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={`fixed inset-0 z-50 w-full sm:hidden ${isOpen ? "" : "pointer-events-none"}`}
        >
            <motion.div
                className='absolute inset-0 w-full right-0 
                bg-gradient-to-l from-slate-300 to-slate-200
                dark:bg-gradient-to-l dark:from-slate-800 dark:bg-slate-900'
                variants={sidebar}
            />
            <motion.ul
                variants={variants}
                className="absolute grid w-full gap-3 px-10 py-16 `" >
                {links?.map(({ href, label, icon: Icon }, index) => (
                    <div key={index} className='grid gap-3'>
                        <MenuItem >
                            <a
                                href={`${href}`}
                                className=" inline-flex items-center 
                                rounded-lg p-2.5 text-sm hover:bg-gray-100 
                                focus:outline-none focus:ring-4 focus:ring-gray-200 
                                text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 
                                dark:focus:ring w-full font-semibold capitalize"
                                onClick={() => toggleOpen()}>
                                {/* {Icon && <Icon />} */}
                                <Heading3 text={label} /> 
                                <h1>{label}</h1>
                            </a>
                        </MenuItem>
                    </div>
                ))}

            </motion.ul>
            <MenuToggle toggle={toggleOpen} />
            <div
                className={`${isOpen ? 'block' : 'hidden'} 
                fixed bottom-0 left-0 w-full justify-end p-10 md:static 
                md:mb-0 md:flex md:w-auto md:self-center md:p-0`}
            >
                <div className="flex w-full items-center justify-between md:w-auto">
                    {/*showToggleTheme && <ToggleDarkMode /> */}
                    {actions && actions.length > 0 && (
                        <div className="ml-4 flex w-max flex-wrap justify-end">
                            {actions.map((callToAction, index) => (
                                <CTA
                                    key={`item-action-${index}`}
                                    callToAction={callToAction}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </motion.nav>
    );
}

const navItems = ["pricing", "changelog"];

const variants = {
    open: {
        transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.02, staggerDirection: -1 },
    },
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `square`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: `square`,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const MenuItem = ({
    className,
    children,
}: {
    className?: string;
    children?: any;
}) => {
    return (
        <motion.li variants={MenuItemVariants} className={className}>
            {children}
            <div className="my-3 h-px w-full bg-gray-300" />
        </motion.li>
    );
};

const MenuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
            duration: 0.04,
        },
    },
};

const MenuToggle = ({ toggle }: { toggle: any }) => (
    <button
        onClick={toggle}
        className="pointer-events-auto absolute right-5 top-5 z-20"
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
);

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="2.3"
        // stroke="hsl(0, 0%, 18%)"
        className="dark:stroke-white stroke-black"
        strokeLinecap="round"
        {...props}
    />
);

