import { useContext, useEffect } from "react"
import { ScaffoldContext } from "../components/Scaffold"

export default function useSetBackUrl(url: string){
    const { setBackUrl } = useContext(ScaffoldContext);
    useEffect(() => {
        setBackUrl(url)
        return () => {
            setBackUrl(null);
        }
    }, [url, setBackUrl])
}