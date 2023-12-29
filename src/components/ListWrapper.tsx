import { ReactNode } from "react";

export interface Props{
    children?: ReactNode;
    fallbackElement?: ReactNode;
    listName?: string;
    dataLength?: number;
}


export default function ListWrapper ({children, fallbackElement, listName, dataLength}: Props) {
    return (
        <div className="flex-col ">
            {listName && <div className="bg-primary-900 sticky top-20 pb-4 z-10">
                <h2 className="text-primary-200 text-center">{listName}</h2>
            </div>}
            {dataLength == 0 && (fallbackElement ?? <p className="text-primary-400 text-center text-sm">It looks like there's nothing here</p>)}
            {children}
        </div>
    );
}