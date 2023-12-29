import Link from "./Link";

export interface Props {
    title: string;
    date: number;
    abstract: string;
    to: string;
}

export default function DreamHistoryCard(props: Props) {
    const dateObject = new Date(props.date)
    const date = Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: "short"
    }).format(dateObject);
    return (
        <Link to={props.to}>
            <article className="w-full shadow-lg rounded-md bg-primary-800 flex-col">
                <header className="p-5 border-primary-900 border-b">
                    <h2>{props.title}</h2>
                    <div className="flex gap-4 justify-between">
                        <time dateTime={dateObject.toISOString().slice(0, 10)}>{date}</time>
                        <div className="hidden">
                            <time dateTime={dateObject.toISOString()}></time>
                            <span>-</span>
                            <time dateTime={dateObject.toISOString()}></time>
                        </div>
                    </div>
                </header>
                <div className="p-5 bg-primary-850 rounded-b-md relative">
                    <p className="max-h-20 overflow-hidden absolute">
                        {props.abstract}
                    </p>
                    <p className="max-h-[6.5rem] overflow-hidden bg-gradient-to-r from-primary-100 to-primary-900 bg-clip-text text-transparent">
                        {props.abstract}
                    </p>
                </div>
            </article>
        </Link>
    )
}