import { useLocation } from "react-router-dom";
import useSetBackUrl from "../hooks/useSetBackUrl";

export default function About() {
    const location = useLocation();
    useSetBackUrl(location?.state?.prevPath ?? '/')
    return (
        <div className='flex-col'>
            <h2>About Dreamlog</h2>
            <p>
                Dreamlog is a dream journal web application, it is an initiative of <a href="christianduarte.me">Christian Duarte</a>, dreamlog's purpose is to provide a simple way of saving and organizing yesternight's memories.
            </p>
            <p>
                This application is client-side only, which means that your information is saved in your device and it's never stored, transferred or managed by our servers in any way.
            </p>
            <p>
                We understand dreams are supposed to be private, so we don't plan on becoming a server-based application any time in the future (Although we are aware this decision does come with a few disadvantages). That's why with DreamLog:
            </p>
            <ul className="list-disc ms-8">
                <li>Your information is not synced between devices, browsers and browser's profiles</li>
                <li>You cannot transfer your information to another device</li>
            </ul>
        </div>
    );
}