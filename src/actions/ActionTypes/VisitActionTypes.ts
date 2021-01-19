export const VISIT_LOADING = "VISIT_LOADING";
export const VISIT_SUCCESS = "VISIT_SUCCESS";
export const VISIT_FAIL = "VISIT_FAIL";

export type VisitType = {
    diagnosis: string
    location: string
    patientId: string
    physicianId: string
    symptoms: string
  }

export interface VisitLoading {
    type: typeof VISIT_LOADING;
  }
  
  export interface VisitFail {
    type: typeof VISIT_FAIL;
  }
  
  export interface VisitSuccess {
    type: typeof VISIT_SUCCESS;
    payload: VisitType[]
  }
  
  export type VisitDispatchTypes =
    | VisitFail
    | VisitLoading
    | VisitSuccess;