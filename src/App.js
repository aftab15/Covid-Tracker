import React, { useEffect, useState } from 'react'
import Covid from './components/Covid'
import "./App.css"
import CovidState from './components/CovidState'

const App = () => {

  const [data, setData] = useState([])

  const covidData = async() => {
    try {
      const res = await fetch('https://api.covid19india.org/data.json');
      const data = await res.json();
      // console.log(data.statewise);
      setData(data.statewise[0])
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    covidData();
  }, [])

  return (
    <>
      <Covid info = {data}/>
      <CovidState/>
    </>
  )
}


export default App
