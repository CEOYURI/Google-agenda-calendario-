import React, {useState} from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Flex } from './style';
import { Link } from 'react-router-dom';

const localizer = momentLocalizer(moment)

export const Calenda = ()=>{
    const [Events, SetEvents]= useState([{
        title: 'Reuniao importante',
        start: new Date(2023,10,15,18,0),
        end: new Date (2023,10,15,19,0)
    },])
    let start= new Date(2023,10,15,18,0)
    let end = new Date (2023,10,15,19,0)
    const handleSelect =(start, end)=>{
        const title = prompt("digite o titulo do evento")
        console.log(title)
        if( title){
            SetEvents([...Events,{title, start, end}])
        }
    }
    return(
        <>
        <Flex>
            <button onClick={()=> handleSelect(start, end)}></button>
            <Link path="/Criar">Criar Evento</Link>  
        <Calendar localizer={localizer} events={Events} startAcessor="start" endAcessor="end" style={{height:400}} onSelectSlot={()=> handleSelect} />
        </Flex>
        </>
    )
}