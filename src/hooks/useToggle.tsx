import { Dispatch, SetStateAction, useState } from "react";

export default function useToggle(initialValue: boolean = false): [boolean, Dispatch<SetStateAction<void>>, Dispatch<SetStateAction<boolean>>]{
    const [toggle, setToggle] = useState(initialValue);
    const doToggle = () => {
        setToggle(!toggle)
    }
    return [
        toggle,
        doToggle,
        setToggle
    ]
}