import {CONVERT_COIN_REQUEST} from '../actions/index';

const INITIAL_STATE: any[] = [];

export default function (state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case CONVERT_COIN_REQUEST:
      return {
        ...state,
        result: action.payload.data,
      };

    default:
      return state;
  }
}
