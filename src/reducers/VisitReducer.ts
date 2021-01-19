import {
    VISIT_FAIL,
    VISIT_LOADING,
    VISIT_SUCCESS,
    VisitType,
    VisitDispatchTypes
  } from "../actions/ActionTypes/VisitActionTypes";
  
  interface DefaultStateI {
    loading: boolean;
    visit?: VisitType[];
  }
  
  const defaultState: DefaultStateI = {
    loading: false
  };
  
  const visitReducer = (
    state: DefaultStateI = defaultState,
    action: VisitDispatchTypes
  ): DefaultStateI => {
    switch (action.type) {
      case VISIT_FAIL:
        return {
          loading: false
        };
      case VISIT_LOADING:
        return {
          loading: true
        };
      case VISIT_SUCCESS:
        return {
          loading: false,
          visit: action.payload
        };
      default:
        return state;
    }
  };
  
  export default visitReducer;