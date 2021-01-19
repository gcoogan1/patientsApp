import {Dispatch} from 'redux';
import axios from 'axios'
import { PatientDispatchTypes, PATIENT_FAIL, PATIENT_LOADING, PATIENT_SUCCESS } from './ActionTypes/PatientActionTypes';
import { VISIT_FAIL, VISIT_LOADING, VISIT_SUCCESS, VisitDispatchTypes } from './ActionTypes/VisitActionTypes';
import {PHYSICIAN_FAIL, PHYSICIAN_LOADING, PHYSICIAN_SUCCESS, PhysicianDispatchTypes} from './ActionTypes/PhysicianActionType';

const url = process.env.REACT_APP_API_URL

export const GetPatient = () => async(dispatch: Dispatch<PatientDispatchTypes>) =>{
    try {
        dispatch({
            type: PATIENT_LOADING
        })

        const res= await axios.get(`${url}/v1/patients`)
        
        dispatch({
            type: PATIENT_SUCCESS,
            payload: res.data
        })

    } catch (e) {
         dispatch({
            type: PATIENT_FAIL
        })
    }
}

export const GetPatientVisits = (id: string) => async(dispatch: Dispatch<VisitDispatchTypes>) =>{
    try {
        dispatch({
            type: VISIT_LOADING
        })

        const res= await axios.get(`${url}/v1/patients/${id}/visits`)
        
        dispatch({
            type: VISIT_SUCCESS,
            payload: res.data
        })

    } catch (e) {
         dispatch({
            type: VISIT_FAIL
        })
    }
}

export const GetPhysician = (id: string) => async(dispatch: Dispatch<PhysicianDispatchTypes>) =>{
    try {
        dispatch({
            type: PHYSICIAN_LOADING
        })

        const res= await axios.get(`${url}/v1/physicians/${id}`)
        
        dispatch({
            type: PHYSICIAN_SUCCESS,
            payload: res.data
        })

    } catch (e) {
         dispatch({
            type: PHYSICIAN_FAIL
        })
    }
}
