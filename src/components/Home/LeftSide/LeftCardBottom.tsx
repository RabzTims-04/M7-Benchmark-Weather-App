import React, { useEffect } from 'react'
import { Card, CardGroup } from "react-bootstrap"
import { useSelector } from 'react-redux'
import { ReduxStore } from '../../../types/ReduxStore'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
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

    const { fiveDayWeather } = useSelector((state:ReduxStore) => state)
    const { timeArray, temperatureArray } = fiveDayWeather

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

    const [donutOptions, setDonutOptions ] = useState({})
    const [ donutSeries, setDonutSeries ] = useState<number[]>([])
    const [ labels, setLabels] = useState<string[]>(['A', 'B' ,'C', 'D'])

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


    const qualityMeasure = () => {
        const airQualityMeasure = airQualityObj?.list[0].main.aqi
        if(airQualityMeasure === 1){
            return "Good"
        }else if(airQualityMeasure === 2){
            return "Fair"
        }else if(airQualityMeasure === 3){
            return "Moderate"
        }else if(airQualityMeasure === 4){
            return "Poor"
        }else{
            return "Very Poor"
        }
    }

    const { currentDay, airQuality } = useSelector((store:ReduxStore) => store)
    const { airQualityObj } = airQuality
    const { weatherObj } = currentDay
    const airQualityAqi = airQualityObj?.list[0].main.aqi
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
                <p className="pt-3">{airQualityObj?.list[0].components.co}</p>
                </Card.Body>
                <Card.Footer>
                <span className="mx-3">{qualityMeasure()}</span>
                <span className="mx-3 like-icon">{airQualityAqi === ( 1 || 2) ?<AiFillLike/> :<AiFillDislike/>}</span>
                </Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default LeftCardBottom
