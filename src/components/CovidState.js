import React, { useEffect, useState } from 'react'

const CovidState = ({info}) => {

    const [data, setData] = useState([])

    const covidStateData = async() => {
      try {
        const res = await fetch('https://api.covid19india.org/data.json');
        const data = await res.json();
        // console.log(data.statewise);
        setData(data.statewise.slice(1))
      } catch (error) {
        console.log(error);
      }
  
    }
  
    useEffect(() => {
        covidStateData();
    }, [])


    return (
        <>

            <div className="container mt">
                <h2 className="m-4 p-4">COVID-19 STATE-WISE UPDATES</h2>
                <div className="table-responsive-md">
                    <table className="table table-striped text-light">
                        <thead className="thead-dark text-light">
                            <tr>
                            <th className="bg-secondary" scope="col">SR.NO</th>
                            <th className="bg-info" scope="col">States</th>
                            <th className="bg-warning" scope="col">Confirmed</th>
                            <th className="bg-primary" scope="col">Active</th>
                            <th className="bg-success" scope="col">Recovered</th>
                            <th className="bg-danger" scope="col">Death</th>
                            </tr>
                        </thead>

                            {
                                data.map((state, ind)=>{
                                    return(
                                    <tbody key={ind} >
                                        <tr>
                                        <th className="text-light" scope="row">{ind + 1}</th>
                                        <td className="text-light" >{state.state}</td>
                                        <td className="text-light" >{state.confirmed}</td>
                                        <td className="text-light" >{state.active}</td>
                                        <td className="text-light" >{state.recovered}</td>
                                        <td className="text-light" >{state.deaths}</td>
                                        </tr>
                                    </tbody>
                                    )
                                })
                            }
                    </table>
                </div>
            </div>
        </>
    )
}

export default CovidState;