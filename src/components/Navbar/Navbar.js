import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen]=useState(false);
    const routes =[
        {id:1,name:'home', link: '/home'},
        {id:2,name:'shop', link: '/shop'},
        {id:3,name:'coupons', link: '/coupons'},
        {id:4,name:'deals', link: '/deals'},
        {id:5,name:'contactUs', link: '/contactUs'},
    ]
    return (
        <nav>
            <div onClick={()=> setOpen(!open)} className='w-6 h-6 md:hidden'>
            {open ? <XIcon></XIcon> :<MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center duration-500 ease-in absolute ${open ? 'top-6': 'top-[-120px]'}`}>
                {
                    routes.map(route =><Link
                    key={route.id}
                    route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;