import { useLocation } from "react-router-dom";
import useSetBackUrl from "../hooks/useSetBackUrl";

export default function Settings(){
    const location = useLocation();
    useSetBackUrl(location?.state?.prevPath ?? '/')
    return (
        <h2>Settings</h2>
    );
}