import React, {Fragment, useState, useEffect} from 'react';





function Today() {

const [calender, setCalender] = useState({});

    useEffect(()=>{
        accessBackEnd();
    },[])

   // this methid will fetch data for the current date.
    const accessBackEnd = async ()=>{
        try{
            const response = await fetch('http://localhost:5100/today');
            const resConverted = await response.json();
            setCalender(resConverted);
            console.log(response);
            console.log(resConverted);

        }catch(err){
            console.log(err.message);
        }
    }

  return (
      <Fragment>
        <div className='container'>
          
          <h1 className="text-center mt-5"> Today Lahore Sehri/Iftar Details </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Sehri Time</th>
                        <th>Iftar Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                      <tr key={calender.sr_no}>
                        <td>{calender.sehritime}</td>
                        <td>{calender.iftaritime}</td>
                        <td>{calender.date}</td>
                      </tr> 
                </tbody> 
            </table>
            
       </div> */}
    </Fragment>
  );
}
export default Today;