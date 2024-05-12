import React, { useState, useEffect } from "react"


//include images into your bundle
const SVGS = {
	ClockIcon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 7V12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
	</svg>,
	StopIcon: <svg className="stop" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" strokeWidth="1.5"/>
	</svg>,
	RestartIcon: <svg className="restart" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M6.87348 7.87338C9.01606 5.7308 12.1674 5.20902 14.8007 6.31041L15.9309 5.18019C12.6515 3.53111 8.55119 4.07435 5.81282 6.81272C2.39573 10.2298 2.39573 15.77 5.81282 19.1871C9.2299 22.6042 14.7701 22.6042 18.1872 19.1871C20.1746 17.1997 21.0057 14.4933 20.6819 11.9072C20.6304 11.4962 20.2555 11.2048 19.8445 11.2562C19.4335 11.3077 19.142 11.6826 19.1935 12.0936C19.4622 14.24 18.7727 16.4802 17.1265 18.1264C14.2952 20.9577 9.70478 20.9577 6.87348 18.1264C4.04217 15.2951 4.04217 10.7047 6.87348 7.87338Z" />
		<path d="M18.7212 4.20119C18.7212 3.89785 18.5384 3.62437 18.2582 3.50828C17.9779 3.3922 17.6553 3.45637 17.4408 3.67086L15.9314 5.18028L14.8012 6.3105L13.1982 7.9135C12.9837 8.128 12.9195 8.45059 13.0356 8.73085C13.1517 9.0111 13.4252 9.19383 13.7285 9.19383H17.9712C18.3854 9.19383 18.7212 8.85805 18.7212 8.44383V4.20119Z"/>
	</svg>,
	StartIcon: <svg className="start" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    	<path d="M3 2v12s6.333-2.833 10.666-6C9.333 4.833 3 2 3 2z"/>
	</svg>
}
//create your first component

const SecondsCounter = () => {
	const [counter, setCounter] = useState(0);
	const [intervalId, setIntervalId] = useState(null);
	
	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1)
		}, 1000);
		setIntervalId(interval);

		return () => clearInterval(interval);
	}, []);
	

	const resetCounter = () => {
		pauseCounter();
		setCounter(0);
		const interval = setInterval(() => {
			setCounter(prevCounter => prevCounter + 1)
		},1000);
		setIntervalId(interval);
	}

	const pauseCounter = () => {
		if(intervalId){
			clearInterval(intervalId);
			setIntervalId(null);
		}
	}

	const startCounter = () => {
		if(!intervalId){
			const interval = setInterval(() => {
				setCounter(prevCounter => prevCounter + 1)
			},1000)
			setIntervalId(interval);
		}
	}

	return <CounterDisplay counter={counter} restart={resetCounter} pause={pauseCounter} start={startCounter}/>

};


export const CounterDisplay = (props) => {

	return (
		<>
			<div className="container">
				{SVGS.ClockIcon}
				{props.counter.toString().split('').map((caracter,index) => (
					<span key={index}>{caracter}</span>	
				))}
			</div>
			<div className="buttons">
				<button className="restartButton" onClick={props.restart}>{SVGS.RestartIcon}</button>
				<button className="pauseButton" onClick={props.pause}>{SVGS.StopIcon}</button>
				<button className="startButton" onClick={props.start}>{SVGS.StartIcon}</button>
			</div>
		</>
	)

};


export default SecondsCounter;

