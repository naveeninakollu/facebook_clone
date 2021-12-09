import  Image  from "next/image";
import HeaderIcon from "./HeaderIcon";
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
} from "@heroicons/react/outline"
import { signOut, useSession } from "next-auth/client";
function header() {
    const [session]=useSession();
    return (
        <div className='sticky top-0 z-50 bg-white flex
        items-center lg:px-5 p-2 shadow-md'>
            
            <div className="flex items-center">
                <Image 
                src="https://links.papareact.com/5me" 
                width={40}
                height={40}
                layout="fixed" 
                />
                <div className="flex ml-2 item-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className='text-gray-600 h-6' />
                    <input className='hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-600 flex-shrink' type="text" placeholder="Search Facebook" />
                </div>
            </div>
            <div className="flex justify-center flex-grow">
                <div className='flex space-x-6:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            <div className='flex items-center sm:space-x-2 justify-end'>
                <Image
                onClick={signOut}
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
                />


                <p className="whitespace-nowrap pr-3 font-semibold ">
                    {session.user.name}
                </p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>

        </div>
    );
}

export default header;
