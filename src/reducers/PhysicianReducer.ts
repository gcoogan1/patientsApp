import { PHYSICIAN_FAIL, PHYSICIAN_LOADING, PHYSICIAN_SUCCESS, PhysicianType, PhysicianDispatchTypes } from "../actions/ActionTypes/PhysicianActionType";

interface DefaultStateI {
   loading: boolean
   physician?: PhysicianType
}
  
const defaultState: DefaultStateI = {
    loading: false
   
  };

const physicianReducer = (state: DefaultStateI = defaultState, action: PhysicianDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case PHYSICIAN_FAIL:
          return {
            loading: false
          };
        case PHYSICIAN_LOADING:
          return {
            loading: true
          };
        case PHYSICIAN_SUCCESS:
          return {
            loading: false,
            physician: action.payload
          };
        default:
          return state;
      }
}

export default physicianReducer;