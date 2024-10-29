import React, { useEffect, useState } from 'react'
import Backlog_icon from '../../assets/Backlog.svg'
import Canceled_icon from '../../assets/Cancelled.svg'
import Done_icon from '../../assets/Done.svg'
import Progress_icon from '../../assets/in-progress.svg'
import Todo_icon from '../../assets/To-do.svg'
import Add_icon from '../../assets/add.svg'
import Three_dot_icon from '../../assets/3 dot menu.svg'
import './dash.css'
import Cards from '../Cards'
// import Card from '../UserCard'
import Avatar from '../Avatar'

const UserGroup = ({ ticketData, userData }) => {
    const [backlog, setBacklog] = useState([]);
    const [todo, setTodo] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);
    const [cancelled, setCancelled] = useState([]);
    const setState = () => {
        let data = [];
        data = ticketData.filter((t) => t.status == 'Backlog');
        setBacklog(data);
        data = ticketData.filter((t) => t.status == 'In Progress');
        setInProgress(data);
        data = ticketData.filter((t) => t.status == 'Todo');
        setTodo(data);
        data = ticketData.filter((t) => t.status == 'Done');
        setDone(data);
        data = ticketData.filter((t) => t.status == 'Canceled');
        setCancelled(data);
    }
    useEffect(() => {
        setState();
    }, [])
  return (
    <div className='statusg-main'>
        {userData.map(user => {
            let data = ticketData.filter((e) => e.userId == user.id);
            return(
            <div className="statusg-body">
                <div className="statusg-header">
                    <span>
                        <Avatar name={user.name} />
                        <p>{user.name}</p>
                        <p>{data.length}</p>
                    </span>
                    <span>
                        <img src={Add_icon} alt="" />
                        <img src={Three_dot_icon} alt="" />
                    </span>
                </div>
            {
                data?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <Card id={e.id} title={e.title} tags={e.tag[0]} user={user} priority={e.priority} status={e.status} />
                    )
                })
            }
            </div>
            
            )
        })}

            

    </div>
  )
}

export default UserGroup
