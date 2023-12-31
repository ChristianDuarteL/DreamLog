import { useNavigate } from "react-router-dom";
import DreamLogConfirmation from "../components/DreamLogConfirmation";
import ListWrapper from "../components/ListWrapper";
import { db } from "../model/db";
import DreamHistoryCard from "../components/DreamHistoryCard";
import { useEffect, useState } from "react";
import { Dream } from "../model/Dream";
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home () {
    const navigation = useNavigate();
    const logDream = (e: boolean) => {
        if(e){
            navigation('/log-dream')
        }
    }
    const [ items, setItems ] = useState<Dream[]>([]);
    const [ hasMoreItems, setHasMoreItems ] = useState(true);

    const fetchMoreData = (concatElements: boolean = true) => {
        db.dreams.offset(items.length).limit(4).reverse().toArray().then(data => {
            db.dreams.count().then(len => {
                setHasMoreItems(items.length < len)
                setItems(items => concatElements ? items.concat(data) : data)
            })
        });
    };
    useEffect(() => {
        fetchMoreData(false);
    }, [])

    return (
        <div className='flex-col'>
            <DreamLogConfirmation logDream={logDream}></DreamLogConfirmation>
            <hr className="my-6"/>
            <ListWrapper listName="History" dataLength={items.length}>
                <InfiniteScroll
                    dataLength={items.length}
                    hasMore={hasMoreItems}
                    loader={<div>Loading...</div>}
                    next={fetchMoreData}
                    className="flex-col gap-8 mb-4"
                >
                    { items.map(e => (
                        <DreamHistoryCard title={e.title} key={e.id} abstract={e.contents} date={e.createdAt} to={`/dream/${e.id}`} />
                    ))}
                </InfiniteScroll>
            </ListWrapper>
        </div>
    )
}