import {combineReducers} from "redux";
import patientReducer from './PatientReducer';
import visitReducer from './VisitReducer';
import physicianReducer from "./PhysicianReducer";


const RootReducer = combineReducers({
    patient: patientReducer,
    visit: visitReducer,
    physician: physicianReducer
});

export default RootReducer;