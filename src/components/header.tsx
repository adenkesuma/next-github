import { FC } from "react";
import Link from 'next/link';

interface HeaderProps {};

const Header: FC<HeaderProps> = ({}) => {
    return (
        <header className="bg-slate-900 py-2 w-full">
            <div className="container flex flex-col justify-center items-center mx-auto">
                <div>
                    <Link className="text-[40px] text-white font-bold" href="/">SimpleCode</Link>
                </div>
                <div className="flex justify-center items-center gap-8 mb-2">
                    <Link className="text-white font-semibold hover:text-green-300" href="/about">About</Link>
                    <Link className="text-white font-semibold hover:text-green-300" href="/about/team">Our Team</Link>
                    <Link className="text-white font-semibold hover:text-green-300" href="/code/repos">Code</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;