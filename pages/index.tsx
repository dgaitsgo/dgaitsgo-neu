import React, { useState, useEffect } from "react";
import { JetBrains_Mono } from '@next/font/google'
import { motion } from 'framer-motion'

const googleFont = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
})

const countDownDate = new Date("May 16, 2091 16:20:25").getTime();

function getTimes() {
	const now = new Date().getTime()

	// Find the distance between now and the count down date
	const distance = countDownDate - now

	// Time calculations for days, hours, minutes and seconds
	return {
		days: Math.floor(distance / (1000 * 60 * 60 * 24)),
		hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((distance % (1000 * 60)) / 1000),
	}
}

function _() {

	const times = getTimes()

	const [days, setDays] = useState(times.days)
	const [hours, setHours] = useState(times.hours)
	const [minutes, setMinutes] = useState(times.minutes)
	const [seconds, setSeconds] = useState(times.seconds)

	useEffect(() => {
		const intervalId = setInterval(() => {

			const { days, hours, minutes, seconds } = getTimes()

			setDays(days)
			setHours(hours)
			setMinutes(minutes)
			setSeconds(seconds)

		}, 1000)

		return () => clearInterval(intervalId)

	}, [days, hours, minutes, seconds])

	const secondsStr = String(seconds).split('')

	if (secondsStr.length === 1) {
		secondsStr.unshift('0')
	}

	return (
		<div className={`${googleFont.className} main`}>
			<h1 className="header">Full-stack Developer</h1>
			<h2 className="header">David Gaitsgory</h2>
			<div className="countdown">
				<p className="cdg">
					<span className="label">days</span>
					<span className="value">{days}</span>
				</p>
				<p className="cdg">
					<span className="label">hours</span>
					<span className="value">{hours}</span>
				</p>
				<p className="cdg">
					<span className="label">minutes</span>
					<span className="value">{minutes}</span>
				</p>
				<p className="cdg">
					<span className="label">seconds</span>
					<span>
						<motion.span key={'second0' + secondsStr[0]}
							animate={{ opacity: 1 }}
							initial={{
								opacity: 0,
							}}
							transition={{
								type: "spring",
								stiffness: 100,
								duration: 200
							}}
							className="value">{secondsStr[0]}
						</motion.span>
						<motion.span key={'seconds1' + secondsStr[1]}
							animate={{ opacity: 1 }}
							initial={{
								opacity: 0,
							}}
							transition={{
								ease: "linear",
								duration: 0.2,
								// type:,
								// stiffness: 100,
								// duration: 1000
							}}
							className="value">{secondsStr[1]}
						</motion.span>
					</span>
				</p>
			</div>
			<div id="email">copy email</div>
		</div>
	)
}

export default _
