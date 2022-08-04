import React from "react"

function H1({ children }: { children: React.ReactNode }) {
	return (
		<h1 className="">
			{children}
		</h1>
	)
}

function Home() {
	return (
		<div className="subpixel-antialiased">
			<div className="lg:pt-12 lg:px-12 md:p-4 sm:px-0 h-screen bg-amber-200">
				<div
					className="border-l-2  border-stone-900 relative"
				>
					<div className="">
						<div className="bg-white border-t-2 border-r-2 inline-block border-stone-900 p-4" style={{ fontFamily: 'Fivo', fontWeight: 'medium' }}>
							<h1 className="text-6xl">David Gaitsgory</h1>
						</div>
						{/* */}
						<div className="">
							<p className="py-4 pl-4 border-t-2 border-b-2 border-r-2 border-stone-900 self-center text-2xl  bg-white" style={{ fontFamily: 'Fivo', fontWeight: 'lighter' }}>
								Full-stack software developer who gets early start-ups off the ground.
								From tech strategy to implementation, my goal is to go from idea to MVP as fast as possible.

							</p>
							{/* <span className="text-xl">Every delivery is:</span> */}

							{/* <p className="mt-4" style={{ fontFamily: 'Fivo', fontWeight: 'lighter'}}>
							What I deliver is:
						</p> */}
						</div>
					</div>
				</div>
				<div>
				</div>
				<button className="text-3xl ml-0 text-white p-8 bg-purple-900 border-stone-900 border-b-2 border-x-2">
					<a href="mailto:hi@dgaitsgo.com">
						say hi ➛
					</a>
				</button>
			</div>
		</div >
	)
}

export default Home