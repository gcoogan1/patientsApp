import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import Loader from 'react-loader-spinner'
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../Store";
import { GetPatient, GetPatientVisits, GetPhysician } from "../actions/PatientActions";
import Arrow from '../assets/arrow.svg';
import "./index.css";


const MainTable: React.FC = () => {
  const dispatch = useDispatch();
  const [patientView, setPatientView] = useState(false);
  const [physicianView, setPhysicianView] = useState(false);
  const patientState = useSelector((state: RootStore) => state.patient);
  const visitState = useSelector((state: RootStore) => state.visit);
  const physicianState = useSelector((state: RootStore) => state.physician)

  useEffect(() => {
    dispatch(GetPatient());
  }, []);



  const showVisits = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const pId = event.currentTarget.id;
    dispatch(GetPatientVisits(pId));
    setPatientView(true);
  };

  const showPhysician = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const pId = event.currentTarget.id;
    dispatch(GetPhysician(pId));
    setPhysicianView(true) 
    setPatientView(false)
  }

  const goBackPatients = () => {
      setPatientView(false)
      setPhysicianView(false)
  }

  const goBackVisits = () =>{
      setPatientView(true)
      setPhysicianView(false)
  }

 

 
  return (
    <div>
      {!patientView && !physicianView ?
      <>
      <h2>List of our patients</h2>
      <table>
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Since</th>
          <th>Visits</th>
        </tr>
      </thead>
      {patientState.patient && (
        <>
          {patientState.patient.map(r => {
            return (
              <tbody>
                <tr>
                  <td>{r.firstName}</td>
                  <td>{r.lastName}</td>
                  <td>{r.email}</td>
                  <td>{r.phone}</td>
                  <td>{r.address}</td>
                  <td>
                    <Moment format="YYYY/MM/DD">{r.since}</Moment>
                  </td>
                  <td onClick={showVisits} id={r.id} className="name">Click!</td>
                </tr>
              </tbody>
            );
          })}
        </>
      )}
    </table> </> : null
    }
      {patientView && !physicianView ? (
        <>
         {visitState.loading ? 	<Loader type="ThreeDots" color="#e85a4f" height={80} width={80} /> : (
           <>
            <div className="header_arrow">
               <img onClick={goBackPatients} src={Arrow} alt="back" />
               <h2>Paitent Visits</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Location</th>
                <th>Symptoms</th>
                <th>Diagnosis</th>
                <th>More Info</th>
              </tr>
            </thead>
            {visitState.visit && (
              <>
                {visitState.visit.map(v => {
                  return (
                    <tbody>
                      <tr>
                        <td className="visit_td">{v.location}</td>
                        <td className="visit_td">{v.symptoms}</td>
                        <td className="visit_td">{v.diagnosis}</td>
                        <td  id={v.physicianId} onClick={showPhysician} className="name visit_td">Click Here!</td>
                      </tr>
                    </tbody>
                  );
                })}
              </>
            )}
          </table>
           </>
         )
           
         }
        </>
      ) : null}
      {physicianView && !patientView ? (
        <>
        {physicianState.loading ? 	<Loader type="ThreeDots" color="#e85a4f" height={80} width={80} /> : (
          <>
           <div className="header_arrow">
             <img onClick={goBackVisits} src={Arrow} alt="back" />
             <h2>Physician Info</h2>
          </div>
         <table>
            <thead>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{physicianState.physician?.firstName}</td>
                <td>{physicianState.physician?.lastName}</td>
                <td>{physicianState.physician?.phone}</td>
              </tr>
            </tbody>
            
          </table>
          </>
        )}
        </>
      ): null}
    </div>
  );
};

export default MainTable;
