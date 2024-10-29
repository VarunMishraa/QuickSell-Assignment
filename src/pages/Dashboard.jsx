import React, { useEffect, useState } from 'react'
import Cards from '../Components/Cards';
import './dash.css'
import StatusGroup from '../Components/Dashboard/StatusGroup';
import Navbar from '../Components/Navbar/Navbar';
import UserGroup from '../Components/Dashboard/UserGroup';
import PriorGroup from '../Components/Dashboard/PriorGroup';
import { getFromLocal, saveToLocal } from '../utils';

const Dashboard = () => {
    const [ticketData, setTicketData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [grouping, setGrouping] = useState("Status")
    const [ordering, setOrdering] = useState("Priority")
    const fetchAPI = async() => {
        try {
            const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const data = await res.json()
            setTicketData(data["tickets"] || [])
            setUserData(data.users || [])
            console.log((data["users"]));
            console.log(data["tickets"])

        } catch (error) {
            console.log(error)
        }
    }
    const changeOrder = () => {
        if(ordering == "Priority"){
            let data = ticketData;
            data?.sort((a, b) => b.priority-a.priority);
            setTicketData(data)
        }
        if(ordering == "Title"){
            let data = ticketData
            data?.sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
            setTicketData(data)
        }
    }
    useEffect(()=>{
        fetchAPI();
        let {group, order} = getFromLocal();
        if(group) {
            setGrouping(group)
        }
        if(order) {
            setOrdering(order)
        }
    }, [])
    useEffect(() => {
        changeOrder()
    }, [ordering])
  return (
    <div className='dash-main'>
        {ticketData.length > 0 ? (
            <>
            <Navbar ordering={ordering} setOrdering={setOrdering} setGrouping={setGrouping} grouping={grouping} /> 
            {
                grouping == "Status" ? (<StatusGroup ticketData={ticketData} userData={userData} />) : 
                grouping == "User" ? (<UserGroup ticketData={ticketData} userData={userData} />) :
                (<PriorGroup ticketData={ticketData} userData={userData} />)
            }
            </>
        ) : (
            <p>Loading tickets...</p> // Provide fallback UI if ticketData is empty
        )}
    </div>
  )
}

export default Dashboard