import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../UserContext'
import './DesertsChart.css'
import { Bar, Line, Pie } from 'react-chartjs-2'
import Chart from 'chart.js/auto'
import MobileNavBar from './MobileNavBar'

function DesertsChart() {
  const { dessertList } = useContext(UserContext)
  const [errorMessage, setErrorMessage] = useState('')
  var chartLabels = []
  dessertList.map((obj) => {
    chartLabels.push(obj.name)
  })
  var chartDataArray = []
  dessertList.map((obj) => {
    chartDataArray.push(obj.price)
  })

  // console.log(chartdata)

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Desserts',
        data: chartDataArray,
        backgroundColor: [
          'rgba(192, 190, 190, 0.6)',
          'rgba(118, 118, 118, 0.8)',
          'rgba(57, 47, 52, 0.8)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="desertsChartHolder">
      <h1>DESSERTS CHART</h1>
      <p className="error">{errorMessage}</p>
      <div className="canvas">
        <Pie data={chartData} />
      </div>
      <MobileNavBar />
    </div>
  )
}

export default DesertsChart
