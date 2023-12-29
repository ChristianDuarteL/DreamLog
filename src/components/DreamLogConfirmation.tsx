export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    logDream?: (log: boolean) => void;
}

export default function DreamLogConfirmation({ logDream, className, ...props}: Props){
    return (
        <div className={`flex-col items-center w-full gap-4 ${className}`} {...props}>
            <h2> What did you dream last night? </h2>
            <div className="flex-col gap-2 items-center">
                <button onClick={() => logDream && logDream(true)} className="px-7 py-3 rounded-full bg-gradient-to-r 
                from-primary-500 to-primary-700 transition hover:scale-110 
                focus-visible:scale-110 active:scale-100 control-outline-primary 
                outline-primary-500 font-bold">Log dream</button>
            </div>
        </div>
    );
}