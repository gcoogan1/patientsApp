
export const PATIENT_LOADING = "PATIENT_LOADING";
export const PATIENT_SUCCESS = "PATIENT_SUCCESS";
export const PATIENT_FAIL = "PATIENT_FAIL";


export type PatientType = {
  address: string
  firstName: string
  lastName: string
  email: string
  phone: string
  since: string
  id: string
}


export interface PatientLoading {
  type: typeof PATIENT_LOADING;
}

export interface PatientFail {
  type: typeof PATIENT_FAIL;
}

export interface PatientSuccess {
  type: typeof PATIENT_SUCCESS;
  payload: PatientType[]
}

export type PatientDispatchTypes =
  | PatientSuccess
  | PatientFail
  | PatientLoading;
