export const PHYSICIAN_LOADING = "PHYSICIAN_LOADING";
export const PHYSICIAN_SUCCESS = "PHYSICIAN_SUCCESS";
export const PHYSICIAN_FAIL = "PHYSICIAN_FAIL";

export type PhysicianType = {
    firstName: string
    lastName: string
    phone: string 
}

export interface PhysicianLoading {
    type: typeof PHYSICIAN_LOADING;
  }
  
  export interface PhysicianFail {
    type: typeof PHYSICIAN_FAIL;
  }
  
  export interface PhysicianSuccess {
    type: typeof PHYSICIAN_SUCCESS;
    payload: PhysicianType
  }
  
  export type PhysicianDispatchTypes =
    | PhysicianFail
    | PhysicianLoading
    | PhysicianSuccess;