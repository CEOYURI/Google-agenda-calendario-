import { useState } from "react"


export const Criar = ()=>{

    const [start, SetInicio]=useState(new Date())
    const [end, SetFim]=useState(new Date())
    const [title , setTitle]= ("")
    const Eventos = {
        id: new Date().getTime(),
        title: title,
        start: start,
        end : end
    }
console.log(Eventos)
    return(
        <>
        <form >
            <input placeholder="adicione um titulo" value={title}  onChange={(e)=> setTitle(e.target.value)}/>
            <input type="date" value={start} onChange={(e)=> SetInicio(e.target.value)} />
            <input type="date" value={end} onChange={(e)=> SetFim(e.target.value)} />
            <button type="submit">adicionar</button>
        </form>
        
        </>
    )
}