interface LoadProgress{
    loaded: number;
    loadAmount: number;
}

const loads: (() => Promise<unknown>)[] = [];

export function addToLoad<T>(promise: () => Promise<T>):(() => Promise<T>){
    const promise_2 = new Promise<T>((res, rej) => {
        loads.push(() => {
            return new Promise((res2, rej2) => {
                promise().then((e) => { 
                    res2(e);
                    res(e);
                }).catch((e) => { 
                    rej2(e); 
                    rej(e);
                })
            })
        })
    })
    return () => {
        return promise_2;
    }
}

// TODO: Make a better load system
export function load(finished_callback: () => void, error_callback: (error: Error) => void, progress_callback: (progress: LoadProgress) => void){
    const loadAmount = loads.length;
    let loadsCompleted = 0;
    const n = loads.map(p => new Promise((res, rej) => {
        p().then(() => {
            loadsCompleted++;
            progress_callback({
                loadAmount,
                loaded:loadsCompleted,
            })
            res(null);
        }).catch(e => {
            rej(e);
        })
    }));
    
    Promise.all(n)
    .then(() => {
        finished_callback();
    }).catch((e) => {
        error_callback(e);
    })
}