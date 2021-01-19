import { PatientDispatchTypes, PatientType, PATIENT_FAIL, PATIENT_LOADING, PATIENT_SUCCESS } from "../actions/ActionTypes/PatientActionTypes";

interface DefaultStateI {
   loading: boolean
   patient?: PatientType[]
}
  
const defaultState: DefaultStateI = {
    loading: false
   
  };

const patientReducer = (state: DefaultStateI = defaultState, action: PatientDispatchTypes) : DefaultStateI => {
    switch (action.type) {
        case PATIENT_FAIL:
          return {
            loading: false
          };
        case PATIENT_LOADING:
          return {
            loading: true
          };
        case PATIENT_SUCCESS:
          return {
            loading: false,
            patient: action.payload
          };
        default:
          return state;
      }
}

export default patientReducer;