import React, { useState, useEffect } from "react";
import { JetBrains_Mono } from '@next/font/google'
import { motion } from 'framer-motion'

const googleFont = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
})

const countDownDate = new Date("May 16, 2091 16:20:25").getTime();

const work = [
	{
		title: 'Silversea',
		desc: 'Tablet app and design system for luxury cruise market leader.',
		tags: ['Angular', 'C#', '.NET', 'SASS']
	},
	{
		title: 'UpwardFacingCat',
		desc: 'SaaS for dance instructors to manage classes',
		tags: ['React', 'Next', 'PostgreSQL', 'AWS', 'TypeScript', 'Playwright']
	},
	{
		title: 'Styleep',
		desc: 'SaaS matching hair-stylists and salons',
		tags: ['React', 'Node', 'PostgreSQL']
	},
	{
		title: 'Pioneer.buzz',
		desc: 'Developing an automated tool to convert raw tables into dynamic visualizations of marketing benchmarks in the cannabis industry.',
		tags: ['python', 'D3', 'HTML/CSS']
		
	},
	{
		title: 'WiSight',
		desc: 'UI for a security, knowledge base and asset management mobile application for French airports.',
		tags: ['ReactNative', 'Typescript', 'xcode']
	},
	{
		title: 'memetic influence',
		desc: 'Created interactive visualizations for an analysis of meme propagation by Russian misinformation campaigns during the 2018 U.S. presidential election.',
		tags: ['D3', 'HTML/CSS', 'Canvas'],
	},
	{
		title: 'Public Health Post',
		desc: 'Created custom data visualizations using a broad toolset to effectively communicate public health research to a larger audience.',
		tags: ['D3', 'python', 'Jupyter notebooks', 'QGIS', 'Adobe Suite'],
	},
	{
		title: 'Health Gorilla',
		desc: 'Implemented user interfaces and interactive, novel data visualizations for enterprise health care applications servicing large hospitals and medical centers.',
		tags: ['D3', 'React', 'MongoDB', 'heroku'],
	},
	{
		title: 'Appworks Inc.',
		desc: 'Built web applications from requirements to delivery. Business analysis, wire-framing for mobile and web applications, interactive data dashboards and structuring Restful APIs.',
		tags: ['D3', 'React', 'ReactNative', 'node', 'PostgreSQL', 'Jenkins']
	}
]

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
		<div className='main'>
			<div className='header'>
			<h1>David Gaitsgory</h1>
				<h2>Full-stack developer</h2>
				<p>
					4 years of experience in full stack development from concept to application.	
				</p>
				{/* <div id='email'>copy email</div> */}
			</div>
			<div className='section'>
				<h3 className='section-header'>WORK</h3>
				<div className='projects'>
					{
						work.map((w) => {
							return (
								<div className='project-card'>
									<h4 className='project-card__title'>{w.title}</h4>
									<p>{w.desc}</p>
									<div className="project-card__tags">
										{w.tags?.map((tag) => {
											return (
												<span className="project-card__tag">{tag}</span>
											)
										})}
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			<div className='section'>
				<h3 className='section-header'>Projects</h3>
			</div>
		</div>
	)
}

export default _
