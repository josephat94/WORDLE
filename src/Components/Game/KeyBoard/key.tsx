import React from "react";

interface Props {
    children: React.ReactNode;
    onClick: any,
    char:string
}
const Key = ({ children,char, ...props }: Props) => {
    const paintBg = () => {   
        return ('text-key-text dark:bg-key-dark dark:text-white')
    }
    return (
        <div {...props} className={`min-w-[44.67px] h-[51.05px] flex justify-center items-center bg-key
        mr-[9.57px]   rounded-[5px]
        pl-[11px] pr-[11px]
        font-semibold ${paintBg()} scale-in-center `}>
            {children}
        </div>
    )
}

export default Key