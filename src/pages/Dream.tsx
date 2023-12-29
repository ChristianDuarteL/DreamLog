import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../model/db";
import { useLocation, useParams } from "react-router-dom";
import useSetBackUrl from "../hooks/useSetBackUrl";

export default function Dream() {
    const { dream_id_param } = useParams();
    const dream_id = dream_id_param ? parseInt(dream_id_param) : 1;
    const dream = useLiveQuery(() => db.dreams.get(dream_id), [dream_id]);
    const location = useLocation();
    useSetBackUrl(location?.state?.prevPath ?? '/')
    return <div>
        <h1>{dream?.title}</h1>
        <p>{dream?.contents}</p>
    </div>
}