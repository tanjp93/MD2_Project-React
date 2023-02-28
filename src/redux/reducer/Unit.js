import { JPN, VND, USD } from "../constants/constants";

export const UnitReducer = (state = [], action) => {
    switch (action.type) {
        case JPN:
            return action.type;
        case VND:
            return action.type;
        case USD:
            return action.type;
        default:
            return state
    }
}