import React, { useState } from 'react';
import Search from '../search/search';
import Sun from '../../styles/img/sun.png';
import SunSky from '../../styles/img/sky-sun.png';
import Card from '../cards/card';
import SideBar from '../cards/sidebar-card';
import NotFound from '../not-found/404';
import { KEY, API_WEATHER, QUERY, METRIC, LANG } from '../data';


const Weather = () => {
    const [text, setText] = useState("");
    const [dataArr, setDataArr] = useState([]);
    const [sidebarArr, setSidebarArr] = useState([]);
    const [request, setRequest ] = useState(false);

    const getQuery = ({ target: {value} }) => setText(value);

    const sendQuery = async (query) => {
        try{
            const resp = await fetch(query);
            const data = await resp.json();
            let item = {
            id: (new Date().getTime()),
            name: data.name,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            temp: +data.main.temp.toFixed(),
            humidity: +data.main.humidity.toFixed(),
            pressure: +data.main.pressure.toFixed(),
            speed: +data.wind.speed.toFixed()
            }
        
        const sidebarItem = {
            name: data.name
        }
        setDataArr([item, ...dataArr]);
        setSidebarArr([sidebarItem, ...sidebarArr]);
        setRequest(false);
        }catch(e){
            setRequest(true);
        }
    }

    const handlePress = ({ key }) =>{
        if(key === "Enter"){
            sendQuery(`${API_WEATHER}${QUERY}${text}${KEY}${METRIC}${LANG}`);
            setText("");
        }
    }

    const handleSendClick = async (name) => {
        try{
            const resp = await fetch(`${API_WEATHER}${QUERY}${name}${KEY}${METRIC}${LANG}`);
            const data = await resp.json();
            let item = {
            id: (new Date().getTime()),
            name: data.name,
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            temp: +data.main.temp.toFixed(),
            humidity: +data.main.humidity.toFixed(),
            pressure: +data.main.pressure.toFixed(),
            speed: +data.wind.speed.toFixed()
        }
        setDataArr([item, ...dataArr]);
        setRequest(false);
        }catch(e){
            setRequest(true);
        }

    }
    const clearHistory = () => {
        setDataArr([]);
    }
    return(
        <div className="weather-container">
            <div className="weather-header">
                <img src={Sun} alt="sun" />
                <Search onKeyPress={handlePress} onChange={getQuery} value={text} />
                <img src={SunSky} alt="sun" />
            </div>
            <div className="weather-sidebar">
                <SideBar handleSendClick={handleSendClick} items={sidebarArr.slice(0,5)} />
            </div>
            <div className="weather-main-conent">
                <button onClick={clearHistory} className="btn-clear">Очистить поиск</button>
                <ul className="card-list">
                    {request ? <NotFound /> : <Card items={dataArr.slice(0,4)} />}
                </ul>
            </div>
        </div>
    )
};

export default Weather;