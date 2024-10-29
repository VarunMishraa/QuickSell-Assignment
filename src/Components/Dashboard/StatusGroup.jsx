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

const dashroup = ({ ticketData, userData }) => {
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
    <div className='dash-main'>
        <div className="dash-body">
            <div className="dash-header">
                <span>
                    <img src={Backlog_icon} />
                    <p>Backlog</p>
                    <p>{backlog.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                backlog?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <Cards id={e.id} title={e.title} tags={e.tag[0]} user={user} />
                    )
                })
            }
        </div>
        <div className="dash-body">
            <div className="dash-header">
                <span>
                    <img src={Todo_icon} />
                    <p>Todo</p>
                    <p>{todo.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                todo?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <Cards id={e.id} title={e.title} tags={e.tag[0]} user={user} />
                    )
                })
            }
        </div>
        <div className="dash-body">
            <div className="dash-header">
                <span>
                    <img src={Progress_icon} />
                    <p>In Progress</p>
                    <p>{inProgress.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                inProgress?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <Cards id={e.id} title={e.title} tags={e.tag[0]} user={user} />
                    )
                })
            }
        </div>
        <div className="dash-body">
            <div className="dash-header">
                <span>
                    <img src={Done_icon} />
                    <p>Done</p>
                    <p>{done.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                done?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <Cards id={e.id} title={e.title} tags={e.tag[0]} user={user} />
                    )
                })
            }
        </div>
        <div className="dash-body">
            <div className="dash-header">
                <span>
                    <img src={Canceled_icon} />
                    <p>Canceled</p>
                    <p>{cancelled.length}</p>
                </span>
                <span>
                    <img src={Add_icon} alt="" />
                    <img src={Three_dot_icon} alt="" />
                </span>
            </div>
            {
                cancelled?.map((e) => {
                    let user = userData.find((u) => u.id == e.userId);
                    return (
                        <Cards id={e.id} title={e.title} tags={e.tag[0]} user={user} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default dashroup