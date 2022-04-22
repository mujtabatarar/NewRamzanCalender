import React, { Fragment, useEffect, useState } from "react";

const Month= ()=>{
    const [holeCalender, setHoleCalender] = useState([]);

    const callApi = async () =>{
        try{
            const response = await fetch('http://localhost:5100');
            const resConverted = await response.json();
            setHoleCalender(resConverted);
            console.log(resConverted);
        }catch(err){
            alert(err.message);
        }
    }

    useEffect(()=>{
        callApi();
    },[])

    return(
        <Fragment>
            <div className="container">
            <h1 className="text-center mt-5"> Lahore Ramzan 2022 calender </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>sr_no</th>
                        <th>Sehri Time</th>
                        <th>Iftar Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {holeCalender.map(todo=>(
                        <tr key={todo.sr_no}>

                            <td>{todo.sr_no}</td>
                            <td>{todo.sehritime}</td>
                            <td>{todo.iftaritime}</td>
                            <td>{todo.date}</td>
                        </tr>
                    ))}
                </tbody> 
                
            </table>
            </div>
        </Fragment>
    );
}
export default Month;