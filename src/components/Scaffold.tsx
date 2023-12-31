import Logo from "../assets/Logo";
import Link from "./Link";
import { FaChevronLeft, FaCog } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { Menu, Transition } from "@headlessui/react";
import { Dispatch, Fragment, ReactNode, SetStateAction, createContext, useState } from "react";

export interface HeaderProps{
    backUrl?: string | null;
}

export function Header({backUrl}: HeaderProps) {
    return <header className='py-4 flex justify-between items-center sticky top-0 bg-primary-900 z-10'>
        <div className="flex-1">
            {backUrl && <Link to={backUrl} untraceable={true} className={`flex items-center justify-center relative w-10 h-10 text-lg p-2 rounded-md hover:bg-primary-700 active:bg-primary-800`}>
                <FaChevronLeft></FaChevronLeft>
            </Link>}
        </div>
        <Link to="/">
            <Logo height="3.5rem"/>
        </Link>
        <div className="relative flex-1 flex justify-end">
            <Menu as='div'>
                <Menu.Button>
                    {
                        ({open}) => (
                            <div className={`flex items-center justify-center relative w-10 h-10 text-lg p-2 rounded-md ${open ? 'bg-primary-800' : 'hover:bg-primary-700'}`}>
                                <div className={`flex items-center justify-center h-full w-full transition-all ${open ? 'absolute opacity-0 rotate-90': 'relative'}`}>
                                    <FaCog></FaCog>
                                </div>
                                <div className={`flex items-center justify-center h-full w-full transition-all ${!open ? 'absolute opacity-0': 'relative rotate-90'}`}>
                                    <FaXmark></FaXmark>
                                </div>
                            </div>
                        )
                    }
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-primary-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-2">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to='/settings' className={`${active ? 'bg-primary-700 text-primary-100' : 'text-primary-100'} block px-4 py-2 text-sm`}>
                                        Settings
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link to='/about' className={`${active ? 'bg-primary-700 text-primary-100' : 'text-primary-100'} block px-4 py-2 text-sm`}>
                                        About DreamLog
                                    </Link>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    </header>
}

export interface IScaffoldContext {
    showHeader: boolean;
    setShowHeader: Dispatch<SetStateAction<boolean>>;
    backUrl: string | null;
    setBackUrl: Dispatch<SetStateAction<string | null>>;
}

export const ScaffoldContext = createContext<IScaffoldContext>({
    showHeader: true,
    setShowHeader: () => {},
    backUrl: null,
    setBackUrl: () => {},
});

export interface ScaffoldProps {
    children: ReactNode,
}

export default function Scaffold({children}:ScaffoldProps){
    const [ showHeader, setShowHeader ] = useState(true);
    const [ backUrl, setBackUrl ] = useState<null | string>(null);

    return <ScaffoldContext.Provider value={{
        showHeader, 
        setShowHeader,
        backUrl,
        setBackUrl
    }}>
        { showHeader && <Header backUrl={backUrl}></Header>}
        {children}
    </ScaffoldContext.Provider>
}