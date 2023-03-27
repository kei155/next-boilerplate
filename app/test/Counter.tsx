'use client'

import useExampleStore from "@/stores/useExampleStore"
import { useStore } from "zustand"

export default function Counter() {
    // const {
    //     count,
    //     doubleCount,
    //     increment,
    // } = useExampleStore(state => ({
    //     count: state.count,
    //     doubleCount: state.computeDouble(),
    //     increment: state.increment,
    // }))
    const {
        count,
        doubleCount,
        increment,
    } = useExampleStore(state => ({
        count: state.count,
        doubleCount: state.computeDouble(),
        increment: state.increment,
    }))

    return (
        <div>
            <div>Count: {count}</div>
            <div>Double Count: {doubleCount}</div>
            <div>
                <button onClick={increment}>증가</button>
            </div>
        </div>
    )
}