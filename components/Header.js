import React from 'react';
import Image from 'next/image';
import HeaderIcon from './HeaderIcon';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">

            {/* headerLeft */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40}
                    height={40}
                    layout='fixed' />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className='h-6 text-gray-600' />
                    <input className=" hidden md:inline-flex flex flex-shrink ml-2 items-center bg-transparent outline-none placholder-gray-500" type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/* headerCenter */}
            <div className="flex justify-center flex-grow">
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />

                </div>

            </div>

            {/* headerRight */}
            <div className="flex item-center sm:space-x-2 justify-end">
                {/* Profile Pic */}
                <p className="font-semibold pr-3 whitespace-nowrap">
                    Mike Torres
                </p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header
