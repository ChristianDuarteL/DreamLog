import { useLocation, useNavigate, useParams } from "react-router-dom";
import Composer, { Props as ComposerProps, ComposerRef } from "../components/Composer";
import { Ref, useEffect, useRef } from "react";
import { db } from "../model/db";
import useSetBackUrl from "../hooks/useSetBackUrl";
import { useLiveQuery } from "dexie-react-hooks";

export default function EditDream ({...props}: ComposerProps){
    const navigate = useNavigate();
    const composerRef: Ref<ComposerRef> = useRef(null);
    useEffect(() => {
        composerRef.current?.focus();
    }, [])
    const location = useLocation();
    useSetBackUrl(location?.state?.prevPath ?? '/')

    const { dream_id_param } = useParams();
    const dream_id = dream_id_param ? parseInt(dream_id_param) : 1;
    const dream = useLiveQuery(() => db.dreams.get(dream_id), [dream_id]);

    return (
        <Composer 
            composerTitle="Edit dream"
            dream={dream}
            ref={composerRef} 
            dismiss={
                () => {
                    navigate('/');
                }
            }
            send={e => {
                db
                .saveDream(e.title, e.contents, new Date())
                .then(() => {
                    navigate('/');
                })
            }}
            {...props} 
        ></Composer>
    )
}