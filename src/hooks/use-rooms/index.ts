import { useEffect, useState } from "react";
import { SYMBOL } from 'types';

import { db } from 'services';

interface ROOM {
    board: Array<SYMBOL | null>
    isGameDone: boolean
    message: string
    playerTurn: SYMBOL
    turnNumber: number
}

interface OUTPUT {
    isFetching: boolean
    room?: ROOM
}

const useRoom = (id: string): OUTPUT => {
    const [room, setRoom] = useState<ROOM | undefined>()
    const [isFetching, setIsFetching] = useState<boolean>(true)

    useEffect(() => {
        const unsubsscribe = db
        .collection('gamerooms')
        .doc(id)
        .onSnapshot((doc) => {
            if (doc.exists) setRoom(doc.data() as ROOM)
            else console.log(doc)
            setIsFetching(false)
        })

        return () => {
            unsubsscribe()
        }
    }, [id])


    return {isFetching, room}
}

export default useRoom