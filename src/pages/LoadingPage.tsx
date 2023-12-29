import { ReactNode, useEffect, useState } from "react";
import TextLogo from "../assets/TextLogo";
import {motion} from 'framer-motion';
import { load } from "../core/app_loader";

interface Props {
    children?: ReactNode
}

export default function LoadingPage({children}: Props) {
    const [ progress, setProgress ] = useState(0);
    const [ error, setError ] = useState(false);
    const [ loaded, setLoaded ] = useState(false)
    useEffect(() => {
        load(
            () => {
                setProgress(1)
                setTimeout(() => setLoaded(true), 500)
            },
            () => setError(true),
            e => setProgress(e.loaded / e.loadAmount)
        );
    }, [setProgress, setLoaded])

    if (loaded){
        return children;
    }

    return <main className="flex-col justify-center items-center min-h-svh">
        <TextLogo className="w-6/12"></TextLogo>
        <motion.div
            className="bg-primary-500 w-9/12 h-[2px]"
            initial={{
                opacity: 0,
                marginTop: '0',
            }}
            animate={{
                opacity: 1,
                marginTop: '1.5rem',
            }}
            transition={{
                delay: .1
            }}
        >
            <div style={{
                width: (progress * 100) + '%'
            }} className={`${error ? 'bg-red-500' : 'bg-white'} h-full transition-width ease-linear`}></div>
        </motion.div>
        {error && <motion.span
            className="text-red-400 text-sm"
            initial={{
                opacity: 0,
                height: 0,
                y: '-.5em',
                marginTop: '0',
            }}
            animate={{
                opacity: 1,
                marginTop: '.5em',
                height: '1em',
                y: '0',
            }}
            transition={{
                delay: 0
            }}
        >
            An error ocurred
        </motion.span>}
    </main>
}