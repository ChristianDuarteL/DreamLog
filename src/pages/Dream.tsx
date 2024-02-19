import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../model/db";
import { useLocation, useParams } from "react-router-dom";
import useSetBackUrl from "../hooks/useSetBackUrl";
import { FaPen, FaTrash } from "react-icons/fa";
import Link from "../components/Link";

export default function Dream() {
    const { dream_id: dream_id_param } = useParams();
    const dream_id = dream_id_param ? parseInt(dream_id_param) : 1;
    const dream = useLiveQuery(() => db.dreams.get(dream_id), [dream_id]);
    const location = useLocation();
    useSetBackUrl(location?.state?.prevPath ?? '/')
    return <div>
        <div className="flex justify-between">
            <h1>{dream?.title}</h1>
            <div className="flex gap-1">
                <Link to={'/edit/' + dream_id} className={`flex items-center justify-center relative w-10 h-10 text-lg p-2 rounded-md hover:bg-primary-700 active:bg-primary-800`}>
                    <FaPen></FaPen>
                </Link>
            </div>
        </div>
        <p>{dream?.contents}</p>
    </div>
}