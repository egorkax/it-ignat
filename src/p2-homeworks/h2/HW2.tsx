import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'low' | 'middle' | 'high'
export type AffairType = {
    _id: number
    name: string
    priority: FilterType

}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => {
    if (filter === 'all') return affairs
    else return affairs.filter(e => e.priority === filter)
    // else if(filter==='low')affairs.filter(e=>e.priority===filter);
    // else if(filter==='middle')affairs.filter(e=>e.priority===filter);
    // else if(filter==='high')affairs.filter(e=>e.priority===filter);

}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => {
    return affairs.filter(e => e._id != _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            <span style={{color: "orange", fontSize: "22px", fontWeight: "initial"}}> homeworks 2 </span>

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
