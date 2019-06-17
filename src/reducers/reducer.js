const initialState = {
    rooms: 1,
    adults: 1,
    children: 0,
    minRooms: 1,
    maxRooms: 5,
    minAdults: 1,
    maxCapacity: 4
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case 'INC_ROOM':
            if (newState.rooms < newState.maxRooms)
                ++newState.rooms;
            if ((newState.adults + newState.children) > (newState.rooms * 4)) {

            }
            return newState;

        case 'DEC_ROOM':
            if (newState.rooms > newState.minRooms)
                --newState.rooms;
            if ((newState.adults + newState.children) > (newState.rooms * 4)) {
                newState.adults = 4*newState.rooms;
                newState.children = 0
            }

            return newState;

        case 'INC_ADULT':
            if ((newState.adults + newState.children) < (newState.rooms * 4)) {
                ++newState.adults;

            }
            if ((newState.adults + newState.children) > (newState.rooms * 4)) {
                if (newState.rooms < newState.maxRooms)
                    ++newState.rooms;
            }
            return newState;

        case 'DEC_ADULT':
            if (newState.adults > newState.minAdults)
                --newState.adults;

            return newState;

        case 'INC_CHILD':
            if ((newState.adults + newState.children) < (newState.rooms * 4)) {
                ++newState.children;

            }

            if ((newState.adults + newState.children) > (newState.rooms * 4)) {
                if (newState.rooms < newState.maxRooms)
                    ++newState.rooms;

            }
            return newState;

        case 'DEC_CHILD':
            if (newState.children > 0)
                --newState.children;
            return newState;

        default:
            return newState;
    }
}

export default reducer;