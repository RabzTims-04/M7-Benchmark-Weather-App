import React, { useEffect } from 'react'
import { Card, CardGroup } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'
import Chart from 'react-apexcharts'
import "./LeftSide.css"
import { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

  interface markerstype{
         markerOffset: number
         name:string
         coordinates:[number, number]
  }

  /* const markers:markerstype[] = [
      {
          markerOffset: -15,
          name:"saarbrücken",
          coordinates:[-58.38, -34.60]
      }
  ] */

interface LeftCardBottomState{
        chart:{
            id:string
        },
        xaxis:{
            categories:number[],
            labels:{
                style:{
                    colors:string[],
                    cssClass:string
                }
            }
        },
        yaxis:{
            labels:{
                style:{
                    colors:string[]
                }
            }
        } 
}

 interface seriesState {
    name:string,
    data: number[]
}

const LeftCardBottom = () => {

     const [options, setOptions ] = useState<LeftCardBottomState>({
        chart: {
            id:""
        },xaxis:{
            categories: [],
            labels:{
                style:{
                    colors:[],
                    cssClass:''
                }
            }
        },
        yaxis:{
            labels:{
                style:{
                    colors:[]
                }
            }
        }
    }) 

    const [donutOptions ] = useState({})
    const [ donutSeries, setDonutSeries ] = useState<number[]>([])

    const [ series, setSeries ] = useState<seriesState[]>([
        {
            name: "",
            data: []
        }
    ]) 

    useEffect(() => {
        setDonutSeries(temperatureArray)
        setSeries([
            {
                name:'series',
                data: temperatureArray
            }
        ])
        setOptions({
            chart:{
                id:'basic',
            },
            xaxis:{
                categories:timeArray,
                labels:{
                    style:{
                        colors:['white', 'white','white', 'white','white','white', 'white', 'white', 'white', 'white'],
                        cssClass: 'apexcharts-xaxis-label'
                    }
                }
            },
            yaxis:{
                labels:{
                    style:{
                        colors:['white', 'white','white', 'white','white','white', 'white', 'white', 'white', 'white']
                    }
                }
            }
        })
    },[])

    const { fiveDayWeather, currentDay } = useSelector((state:ReduxStore) => state)
    const { timeArray, temperatureArray } = fiveDayWeather

    const markers:markerstype[] = [
        {
            markerOffset: -15,
            name:"saarbrücken",
            coordinates:[currentDay.weatherObj?.coord.lon!, currentDay.weatherObj?.coord.lat!]
        }
    ]

    return (
        <CardGroup id="left-card">
            <Card className="p">
                 <div className="app">
                    <div className="row">
                    <div className="mixed-chart">
                        <Chart
                        className="line-chart"
                        options={options}
                        series={series}
                        type="line"
                        width="250"
                        height="200"             
                        />
                    </div>
                    </div>
                </div>
            </Card>
            <Card className="mx-4">
                <Chart
                    className="line-chart"
                    options={donutOptions}
                    series={donutSeries}
                    type="donut"
                    width="375"             
                        />
                </Card>
            <Card>
                <ComposableMap
                /* projection="geoAzimuthalEqualArea" */
                projectionConfig={{
                  rotate: [-30, -50, -20],
                  scale: 400
                }}>
                    <Geographies geography={geoUrl}>
                       {({geographies}) => geographies.map(geo => 
                        <Geography 
                        key={geo.rsmKey} 
                        geography={geo}
                        fill="#EAEAEC" 
                        stroke="D6D6DA"
                        />
                        )}
                    </Geographies>
                        {
                        markers.map(({ name, coordinates, markerOffset }) => (
                            <Marker key={name} coordinates={coordinates}>
                            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
                            <text
                                textAnchor="middle"
                                y={markerOffset}
                                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
                            >
                                {name}
                            </text>
                            </Marker>
                        ))}
                </ComposableMap>
            </Card>
        </CardGroup>
    )
}

export default LeftCardBottom
