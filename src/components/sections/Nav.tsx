import clsx from "clsx";
import useScroll from "~/libs/hooks/use-scroll";
import MaxWidthWrapper from "~/components/skeleton/max-width-wrapper";
import { headerData } from "~/data/data";
import CTA from "../atoms/CTA";
import { Heading3 } from "~/components/atoms/Heading3";
import { Subtitle } from "~/components/atoms/Subtitle";
import type { MenuLink } from "~/shared/types";
import logo from '~/assets/logo.svg'


const transparentHeaderSegments = new Set(["about", "projects"]);

export const Nav = () => {

    const scrolled = useScroll(0);
    const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

    return (
        <div
            className={clsx(`sticky inset-x-0 top-0 z-30 w-full `, {
                "border-b border-gray-200 bg-white/75 backdrop-blur-lg dark:bg-gray-900/75 dark:border-gray-700": !scrolled,
                // "border-b border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700":
                //     segment && !transparentHeaderSegments.has(segment),
            })}
        >
            <MaxWidthWrapper>
                <div className="flex h-16 items-center justify-between">
                    <a href="http://localhost:4321" >
                        <div className="flex flex-row items-center justify-center space-x-2">

                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler 
                            icon-tabler-circles-relation" width="44" height="44" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
                                <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
                            </svg> */}
                            
                            {/* <h1 className="dark:text-white text-gray-800  text-2xl font-bold"> Shicane</h1> */}
                        </div>
                        {/* <Image
                            src="/_static/logotype.svg"
                            alt="logo "
                            width={834}
                            height={236}
                            className="w-24"
                        /> */}
                        <img src={logo.src} />

                    </a>

                    <div className="hidden items-center  sm:flex ">
                        {headerData.links?.map((item) => (
                            <MenuItem key={`item-${item.label}`} {...item} />
                        ))}
                        <div className="flex ml-2 w-full items-center justify-between md:w-auto">
                            {actions && actions.length > 0 && (
                                <div className="ml-4 flex w-max flex-wrap justify-end">
                                    {actions.map((callToAction, index) => (
                                        <CTA callToAction={callToAction} key={index} />
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

const MenuItem = (item: MenuLink) => {
    return <a
        key={item.label}
        href={item.href || ''}
        className={`text-sm font-medium capitalize 
    transition-colors ease-in-out py-2 px-4 hover:text-black
    dark:hover:bg-gray-700 hover:bg-gray-100 rounded-full drop-shadow-sm 
    dark:text-white dark:hover:text-white`}
    >
        <Subtitle>
            {item.label}
        </Subtitle>
    </a>;
}
