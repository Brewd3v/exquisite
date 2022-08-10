import Link from "next/link"
import { SVGProps } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    url: string;
    icon?: any;
    iconPosition?: string;
}


export const BigButton = ({ title, url }: ButtonProps) => {
    return (
        <Link href={url} passHref>
            <a className="
                bg-primary text-white py-5 px-12 rounded
                block
                font-jost
                text-[18px]
                leading-[18px]
                font-bold
                icon-button
                " role={"button"}>
                {title}
            </a>
        </Link>
    )
}

export const PrimaryButton = ({ title, url }: ButtonProps) => {
    return (
        <Link href={url} passHref>
            <a className="
                bg-primary text-white py-3 px-4 rounded
                duration-200 shadow-md shadow-orange-500/50
                hover:scale-95
                hover:shadow-sm
                block
                font-jost
                icon-button
                " role={"button"}>
                {title}
            </a>
        </Link>
    )
}

export const SecondaryButton = ({ title, url, icon, iconPosition }: ButtonProps) => {
    return (
        <Link href={url} passHref>
            <a className={`icon-button font-jost ${iconPosition}`} role={"button"}>
                <>
                    {icon}
                    <span>{title}</span>
                </>
            </a>
        </Link>
    )
}