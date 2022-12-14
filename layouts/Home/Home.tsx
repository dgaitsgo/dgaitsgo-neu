import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Header = () =>
	<div className="lg:flex lg:content-start md:flex md:content-start">
		<div className="bg-white border-t-2 border-r-2 flex items-center border-stone-900 p-4 font-medium font-fivo">
			<h1 className="text-6xl">David Gaitsgory</h1>
		</div>
		<img className="lg:max-h-32 md:max-h-32  border-t-2 border-r-2 border-stone-900 bg-cyan-200" src={'/images/dgaitsgo.png'} alt='David Gaitsgory illustration' />
	</div>

const Description = () =>
	<div>
		<div>
			<p className="py-4 pl-4 border-t-2 border-r-2 border-b-2 border-stone-900 self-center text-2xl  bg-white font-fivo font-light">
				Full-stack software developer who gets early start-ups off the ground.
				From tech strategy to implementation, my goal is to get you from idea to MVP as fast as possible.
			</p>

			{/* <div className=" bg-white block">
									<Image src={'/images/dgaitsgo.png'} layout='fixed' width={300} height={300} alt='David Gaitsgory illustration' />
								</div> */}
		</div>
		{/* <p className="m-auto text-4xl md:border-r-2 lg:border-r-2 border-stone-900 border-b-2 border-t-2 pt-4 pb-4 text-center font-fivo font-bold">
			Velocity <span className="italic">and</span> quality
		</p> */}
		{/* <span className="text-xl">Every delivery is:</span> */}

		{/* <p className="mt-4" style={{ fontFamily: 'Fivo', fontWeight: 'lighter'}}>
							What I deliver is:
						</p> */}
	</div>

const SLAs = () =>
	<div>
		<div className="mt-10 border-r-2 border-l-2 inline-block bg-white border-stone-900">
			<p className="p-4 border-stone-900 mb-2 border-t-2">
				<span className="underline underline-offset-4">Every</span> delivery is:
			</p>
		</div>
		<div className="grid border-t-2 border-l-2  border-stone-900 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
			<div className="border-r-2  border-b-2 border-stone-900 p-4 bg-white">
				<p className="font-semibold"> ✓ Tested</p>
				<span>Requirements are translated directly into tests. Full unit and e2e coverage.</span>
			</div>
			<div className="border-r-2 border-b-2 border-stone-900 p-4 bg-white">
				<p className="font-semibold"> ✓ Performant</p>
				<span>Pass lighthouse accessibility, speed and SEO metrics with flying colors.</span>
			</div>
			<div className="border-r-2  border-b-2 border-stone-900 p-4 bg-white">
				<p className="font-semibold"> ✓ Scalable</p>
				<span>Not just code but a product online, with infrastructure ready to scale.</span>
			</div>
			<div className="p-4 bg-white border-b-2 border-r-2 border-stone-900">
				<p className="font-semibold "> ✓ Mobile-first</p>
				<span>Apps that rock on small screens and slow networks</span>
			</div>
			<div className="border-r-2 border-b-2 border-stone-900 p-4 bg-white ">
				<p className="font-semibold"> ✓ Secure</p>
				<span>Leveraging best practices and risk assessment so security is the default.</span>
			</div>
			<div className="border-r-2 border-b-2 border-stone-900 p-4 bg-white ">
				<p className="font-semibold"> ✓ Observable</p>
				<span>Know your app is working and who is using it.</span>
			</div>
		</div>
	</div>

const RecentWork = () =>
	<>
		<div className="mt-10 flex">
			<h2 className="text-right p-4 bg-white border-r-2 border-t-2 border-l-2 border-stone-900 sm:ml-0 md:ml-0 lg:ml-12">
				Recent Work :
			</h2>
		</div>
		<div className="flex border-t-2 border-b-2 border-stone-900 font-fivo flex-col md:flex-col lg:flex-row">
			<div className="lg:w-6/12 pl-4 lg:pl-16 p-6 border-r-2 border-stone-900 border-b-2 lg:border-b-0">
				<h4 className="text-xl">Upward Facing Cat</h4>
				<div className="flex gap-2 mb-2">
					<span className="font-bold">Principle Architect</span>
				</div>
				<p className="pt-4 mb-2 lg:h-12">SaaS for dance instructors to manage classes</p>
				<div className="flex gap-2 mb-4">
					<a className="underline underline-offset-4" href="https://ufc.dance/">Site →</a>
				</div>
			</div>
			<div className="lg:w-6/12 p-6 pl-4 lg:pl-16">
				<h4 className="text-xl font-lighter">Styleep</h4>
				<div className="flex gap-2 mb-2">
					<span className="font-bold">Lead Dev</span>
				</div>
				<p className="pt-4 mb-2 lg:h-12">SaaS matching hair-stylists and salons</p>
				<div className="flex gap-2 mb-4">
					<a className="underline underline-offset-4" href="https://styleep.com">Site →</a>
				</div>
			</div>
		</div>
	</>

const Testimonials = () =>
	<>
		<div className="flex bg-white">
			<p className="m-auto px-4 py-4 text-center text-3xl mt-6 underline underline-offset-8 rounded-lg font-fivo font-bold">What they say:</p>
		</div>
		<div className="flex bg-white flex-col lg:flex-row gap-8">
			{/* self-start max-w-lg lg:max-w-md lg:mx-12 pb-4 border-2 border-stone-900 relative mt-8 shadow-brut-md */}
			<div className="
				p-4	
				lg:self-start
				max-w-lg lg:mx-12 mx-6 border-2 border-stone-900 relative mt-8 shadow-brut-md
			">
				<span className="font-serif text-4xl pt-5 absolute rounded-full w-10 h-10 top-0  text-black border-2 border-stone-900 bg-white"
					style={{
						transform: `translate(-50%, -50%)`,
						left: '0%',
						display: 'grid',
						placeContent: 'center'
					}}
				>&#8220;</span>
				<p className="italic text-stone-700">David was a pleasure to work with. Project was completed on time with great results.</p>
				<p className="mt-4">- Christopher Cabell, Co-Founder and CEO of RxPhoto</p>
				<div className="grid place-content-center left-full font-serif text-4xl pt-5 absolute rounded-full w-10 h-10 -bottom-1/4  text-black border-2  border-stone-900 -translate-x-1/2 -translate-y-1/2 bg-white"
				>&#8221;</div>
			</div>
			<div className="max-w-lg lg:mx-12 mx-6 pb-4 border-2 border-stone-900 relative mt-8 p-4 shadow-brut-md">
				<span className="font-serif text-4xl pt-5 absolute rounded-full w-10 h-10 top-0  text-black border-2  border-stone-900 bg-white"
					style={{
						transform: `translate(-50%, -50%)`,
						left: '0%',
						display: 'grid',
						placeContent: 'center'
					}}
				>&#8220;</span>
				<p className="italic text-stone-700">David is an extremely talented dev, and an artist when it comes to data
					visualization. I couldn&apos;t have asked for a better partner in bringing my data to life. You&apos;re in great hands when it comes to professional communications, well-measured milestones, and easily understood goals. 10/10 and I hope to work with him on more projects.</p>
				<p className="mt-4">- Mitch Chaiet, Co-Founder and CEO of Memetic Influence</p>
				<div className="font-serif text-4xl pt-5 absolute rounded-full w-10 h-10 text-black border-2  border-stone-900 bg-white"
					style={{
						transform: `translate(-50%, 0%)`,
						left: '100%',
						display: 'grid',
						placeContent: 'center',
					}}>&#8221;</div>
			</div>
		</div>
	</>

const CTA = () =>
	<div className="bg-white border-t-2 border-stone-900 mt-16">
		<h1 className="bg-white text-5xl lg:ml-12 mx-4 mt-16 font-fivo font-bold">
			Have a great idea?
		</h1>
		<a href="mailto:hi@dgaitsgo.com">
			<button className="text-3xl lg:ml-12 ml-4 text-white p-8 mt-8 bg-purple-900 border-stone-900 border-2">
				Let&apos;s begin ➛
			</button>
		</a>
	</div>

const Footer = () =>
	<footer className="m-auto bg-stone-900 mt-12 lg:p-12 p-4 border-t-2 text-white">
		{/* <p>Made in Brasília</p> */}
		{/* <p className="underline underline-offset-4"><a>Feedback</a></p> */}
		{/* <p className="pt-1">All rights reserved</p> */}
		<p className="mt-2 underline underline-offset-4"><a href="https://github.com/dgaitsgo"> 🔗 github</a></p>
		{/* <Link href={'/blog'} className="">Blog</Link> */}
	</footer>

function Home() {
	return (
		<>
			<div className="subpixel-antialiased text-black bg-white max-w-max">
				<div className="lg:pt-12 lg:px-12 sm:px-0 relative">
					<div
						className="border-l-2 border-stone-900 min-h-full"
					>
						<Header />
						<Description />
					</div>
					{/* <SLAs /> */}

				</div>
				<RecentWork />
				<Testimonials />

				<CTA />
			<Footer /> 
			</div >
		</>
	)
}

export default Home