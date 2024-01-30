import React from "react"
import { JetBrains_Mono } from '@next/font/google'

const googleFont = JetBrains_Mono({
	weight: '400',
	subsets: ['latin'],
})

function _() {

	return (
		<div className={`${googleFont.className} main`}>
			<h1 className="header">Coming soon</h1>
			<div className="countdown">
				<p className="cdg">
					<span className="label">days</span>
					<span className="value">30</span>
				</p>
				<p className="cdg">
					<span className="label">hours</span>
					<span className="value">12</span>
				</p>
				<p className="cdg">
					<span className="label">minutes</span>
					<span className="value">44</span>
				</p>
				<p className="cdg">
					<span className="label">seconds</span>
					<span className="value">39</span>
				</p>
			</div>
			<div id="email">copy email</div>
		</div>
	)
}

export default _
