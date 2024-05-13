import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import React from 'react'
const Navbar = () => {
    return (
        <nav className="border-2 border-blue-900 flexBetween max-container padding-container relative z-30 py-7">
        <Link href="/">
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.label}
                    </Link>
                ))}
            </ul>
        </Link>
        </nav>
        );
};
export default Navbar;
