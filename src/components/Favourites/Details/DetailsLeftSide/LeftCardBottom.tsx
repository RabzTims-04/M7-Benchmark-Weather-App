import React, { useEffect } from 'react'
import { Card, CardGroup } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { ReduxStore } from '../../../../types/ReduxStore'
import Chart from 'react-apexcharts'
import "./LeftSide.css"
import { useState } from 'react'

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

    const { fiveDayWeather } = useSelector((state:ReduxStore) => state)
    const { timeArray, temperatureArray } = fiveDayWeather

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
                <Card.Body>
                <Card.Title className="pt-3">Air Quality</Card.Title>
                <p className="pt-3"></p>
                </Card.Body>
                <Card.Footer>
                <span className="mx-3"></span>
                <span className="mx-3 like-icon"></span>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default LeftCardBottom
