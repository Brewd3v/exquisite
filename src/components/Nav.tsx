import Link from "next/link"
import { PrimaryButton, SecondaryButton } from "./Buttons"
import { LockClosedIcon, MenuIcon } from '@heroicons/react/solid'

const menuItems = [
    { id: 1, title: "Platform", url: "/" },
    { id: 2, title: "Service", url: "/" },
    { id: 3, title: "Feature", url: "/" },
    { id: 4, title: "Pricing", url: "/" },
    { id: 5, title: "FAQ", url: "/" },
]

function Nav() {
    return (
        <header className="px-6 max-w-6xl mx-auto py-6 flex justify-between items-center">
            <div aria-label="logo">
                <object data="./exquisite-logo.svg" type="image/svg+xml">
                    <img src="exquisite-logo.svg" alt="logo" />
                </object>
            </div>
            <nav className="hidden lg:block" aria-label="main-menu">
                <ul className="space-x-10">
                    {
                        menuItems && menuItems.map((item) => (
                            <li className="inline font-bold" key={item.id}>
                                <Link href={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className="space-x-6 hidden md:block">
                <SecondaryButton url="/" title="Sign In" icon={<LockClosedIcon className="text-primary" />} iconPosition="left" />
                <PrimaryButton url="/" title="Get Started" />
            </div>
            <div className="lg:hidden">
                <MenuIcon className="h-8" />
            </div>
        </header>
    )
}

export default Nav


