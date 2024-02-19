import Dexie, { Table } from "dexie";
import { Dream, UpdateDream } from "./Dream";

export class DreamLogDB extends Dexie {
    dreams!: Table<Dream, number>;

    constructor(){
        super(import.meta.env.VITE_DB_NAME);
        this.version(1).stores({
            dreams: '++id'
        })
    }

    saveDream(title: string, contents: string, date: Date){
        const dream: Dream = {
            title, 
            contents,
            createdAt: date.getTime()
        }
        return this.dreams.add(dream);
    }
    
    updateDream(id: number, title: string, contents: string){
        const dream: UpdateDream = {
            title, 
            contents
        }
        return this.dreams.update(id, dream);
    }
}

export const db = new DreamLogDB();