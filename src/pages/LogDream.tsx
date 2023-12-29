import { useLocation, useNavigate } from "react-router-dom";
import Composer, { Props as ComposerProps, ComposerRef } from "../components/Composer";
import { Ref, useEffect, useRef } from "react";
import { db } from "../model/db";
import useSetBackUrl from "../hooks/useSetBackUrl";

export default function LogDream ({...props}: ComposerProps){
    const navigate = useNavigate();
    const composerRef: Ref<ComposerRef> = useRef(null);
    useEffect(() => {
        composerRef.current?.focus();
    }, [])
    const location = useLocation();
    useSetBackUrl(location?.state?.prevPath ?? '/')

    return (
        <Composer 
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