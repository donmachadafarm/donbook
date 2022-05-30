import Image from "next/image"
import { Menu, Transition } from '@headlessui/react'
import {signOut, useSession} from 'next-auth/react'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
    UserCircleIcon,
    CogIcon,
    LogoutIcon
} from '@heroicons/react/solid'
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'
import HeaderIcon from "./HeaderIcon"
import {Fragment} from 'react'

function Header() {
    const { data: session } = useSession()

  return (
    <div className="flex items-center sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
        {/* Left */}
        <div className="flex items-center">
            <Image src="/dblogo.png" width={40} height={40} layout="fixed" alt="FB logo" />

            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" name="" id="" placeholder="Search Donbook" />
            </div>
        </div>

        {/* Center */}
        <div className="flex justify-center flex-grow">
            <div className="flex space-x-6 md:space-x-2">
                <HeaderIcon active Icon={HomeIcon} />
                <HeaderIcon Icon={FlagIcon} />
                <HeaderIcon Icon={PlayIcon} />
                <HeaderIcon Icon={ShoppingCartIcon} />
                <HeaderIcon Icon={UserGroupIcon} />
            </div>
        </div>


        {/* Right */}
        <div className="flex items-center sm:space-x-2 justify-end">
            {/* Profile pic */}
            <Image className='rounded-full cursor-pointer' src={session.user.image} width='40' height='40' layout='fixed' alt='user image' />
            <p className="whitespace-nowrap font-semibold p-3">{session.user.name}</p>

            <ViewGridIcon className="icon text-white"/>
            <ChatIcon className="icon text-white" />
            <BellIcon className="icon text-white" />
            {/* <ChevronDownIcon className="icon" /> */}

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="icon">
                        <ChevronDownIcon className="text-white" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95" >

                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            className={`${
                            active ? 'bg-gray-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        {active ? (
                            <UserCircleIcon
                                className="mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            ) : (
                            <UserCircleIcon
                                className="mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        )}
                            Profile
                        </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                        <button
                            className={`${
                            active ? 'bg-gray-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        {active ? (
                            <CogIcon
                                className="mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            ) : (
                            <CogIcon
                                className="mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        )}
                            Settings
                        </button>
                        )}
                    </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                    <Menu.Item>
                        {({ active }) => (
                        <button onClick={signOut}
                            className={`${
                            active ? 'bg-gray-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        {active ? (
                            <LogoutIcon
                                className="mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                            ) : (
                            <LogoutIcon
                                className="mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        )}    
                            Logout
                        </button>
                        )}
                    </Menu.Item>
                    </div>
                </Menu.Items>
                </Transition>
            </Menu>
  


        </div>
    </div>
  )
}

export default Header