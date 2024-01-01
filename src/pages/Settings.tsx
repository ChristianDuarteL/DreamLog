import { useLocation } from "react-router-dom";
import useSetBackUrl from "../hooks/useSetBackUrl";

export default function Settings(){
    const location = useLocation();
    useSetBackUrl(location?.state?.prevPath ?? '/')
    return (
        <div className='flex-col'>
            <h2>Settings</h2>
            <div className="my-2 flex-col gap-1 items-start">
                <label htmlFor="delete_data">Delete my data</label>
                <button className="rounded-md bg-secondary-800 px-5 py-2 text-sm font-semibold text-white shadow-sm active:bg-secondary-900 control-outline-secondary">Delete all data</button>
            </div>
        </div>
    );
}