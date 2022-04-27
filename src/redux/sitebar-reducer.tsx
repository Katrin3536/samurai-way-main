import React from 'react';
import {ActionType} from './profile-reducer';

export type FriendType = {
    id: number,
    name: string
}

export type FriendsType = {
    friends: FriendType[]
}

let initialState = {
        friends: [
            {id: 1, name: 'Masha'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Dasha'},
        ]
    }

const SitebarReducer = (state:FriendsType = initialState, action:ActionType):FriendsType => {
    return state;
}
export default SitebarReducer;