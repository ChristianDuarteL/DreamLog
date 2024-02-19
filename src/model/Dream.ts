

export interface Dream {
    id?: number;
    title: string;
    contents: string;
    createdAt: EpochTimeStamp;
}


export interface UpdateDream {
    id?: number;
    title: string;
    contents: string;
    createdAt?: EpochTimeStamp;
}