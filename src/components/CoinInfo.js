import React from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


const CoinInfo = (coin) => {
    const [historicalData, setHistoricalData] = React.useState()
    const [days, setDays] = React.useState(30);

    const fetchHistoricData = async () => {
        let url = `https://api.coingecko.com/api/v3/coins/${coin.coin.id}/market_chart?vs_currency=INR&days=${days}`
        const { data } = await axios.get(url);
        setHistoricalData(data.prices);
    };

    console.log(historicalData);
    
    React.useEffect(() => {
        fetchHistoricData();
    }, [days])
     
    if(!historicalData) return <h1>Loading</h1>

  return (
    <div  >
        <div >
            {
                !historicalData ? (<h1>Loading</h1>
                ): (
                <>
                    <Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in INR`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
                </>)
            }
        </div>
    </div>
  )
}

export default CoinInfo
