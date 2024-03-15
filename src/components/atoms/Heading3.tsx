
export const Heading3 = ({ text}: { text?: string }) => {

    return (
            <div
                className={` flex-shrink-0 w-auto h-auto whitespace-pre break-words relative overflow-visible
                font-semibold font-sans 
                dark:text-textHeadingDark text-textHeading  
                text-base 
                tracking-tight leading-6
                text-left 
                `} >
                {text}
            </div>
    )
}
