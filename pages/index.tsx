import Link from "next/link";

const work = [
	{
		title: 'Silversea',
		pitch: 'Luxury tablet app',
		// desc: 'Tablet app and design system for luxury cruise market leader.',
		location: 'Monaco',
		year: 2023,
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
		desc: 'Convert raw tables into dynamic visualizations of marketing benchmarks.',
		tags: ['python', 'D3', 'HTML/CSS']

	},
	{
		title: 'WiSight',
		desc: 'UI mobile application for French airports.',
		tags: ['ReactNative', 'Typescript', 'xcode']
	},
	{
		title: 'memetic influence',
		desc: 'Interactive visualizations to analyse meme propagation.',
		tags: ['D3', 'HTML/CSS', 'Canvas'],
	},
	{
		title: 'Public Health Post',
		desc: 'Data visualizations to communicate public health research to a larger audience.',
		tags: ['D3', 'python', 'Jupyter notebooks', 'QGIS', 'Adobe Suite'],
	},
	{
		title: 'Health Gorilla',
		desc: 'Interfaces and interactive, novel data visualizations for enterprise health care applications.',
		tags: ['D3', 'React', 'MongoDB', 'heroku'],
	},
	{
		title: 'Appworks Inc.',
		desc: 'Data dashboards, APIs for web and mobile apps.',
		tags: ['D3', 'React', 'ReactNative', 'node', 'PostgreSQL', 'Jenkins']
	}
]

function _() {

	return (
		<div className='main'>
			<div className='header'>
				<h1>David Gaitsgory</h1>
				<h2>Full-stack developer</h2>
				<div className='contact-tabs'>
					<p className="pill">Email</p>
					<p className="pill">LinkedIn</p>
				</div>
				<p>
					{/* 4 years of experience in full stack development from concept to application. */}
				</p>
			</div>
			<div className='section'>
				<h3 className='section-header'>WORK</h3>
				{/* <hr></hr> */}
				{/* <br></br> */}
				<div className='works'>
					{
						work.map((w, i) => {
							return (
								<div className="grid-parent">
									<div className="div1">site.com</div>
									<div className="div2">{w.location}</div>
									<div className="div3">{i}</div>
									<div className="div4">{w.title}</div>
									<div className="div5">{w.tags.map((tag) => <span>&nbsp;{tag} / </span>)}</div>
									<div className="div6">{w.pitch}</div>
									<div className="div7">Full stack</div>
									<div className="div8">2023</div>
									<div className="div9">X</div>
								</div>
								// <Link className='work-link' href={`/work/${i}`}>
								// 	<div className='work-card'>
								// 		<div className='work-card__top'>
								// 			<h4 className='work-card__title'>{w.title}</h4>
								// 			<p className='work-card__desc'>{w.desc}</p>
								// 			{/* <canvas id="canv" width="32" height="32"></canvas> */}
								// 		</div>
								// 		<div className='work-card__tags'>
								// 			{w.tags?.map((tag) => {
								// 				return (
								// 					<span className="work-card__tag">{tag}</span>
								// 				)
								// 			})}
								// 		</div>
								// 	</div>
								// </Link>
							)
						})
					}
				</div>
			</div>
			<div className='section'>
				<h3 className='section-header'>PROJECTS</h3>
				{/* <hr></hr> */}
				<br></br>
				<div className='project-section'>
					<div className='project-item'>
						<a href='/'>Interactive data visualizations with D3</a>
						<span className='project-desc'>Tutorials and open source code</span>
					</div>
					<div className='project-item'>
						<a href='/'>emotif.live</a>
						<span className='project-desc'>Algorithmic art and web3</span>
					</div>
					<div className='project-item'>
						<a href='/'>Biking the Americas</a>
						<span className='project-desc'>Algorithmic art and web3</span>
					</div>
					<div className='project-item'>
						<a href='/blog'>Blog</a>
						<span className='project-desc'>Algorithmic art and web3</span>
					</div>
					<div className='project-item'>
						<a href='/'>Radio Glorioso</a>
						<span className='project-desc'>Record Label</span>
					</div>
				</div>
			</div>
			<br></br>
			<h3 className='section-header' style={{"color": "white"}}>CONTACT</h3>
			<hr></hr>
			<br></br>
			<div className='section'>
				{/* <p>LinkedIn</p> */}
				<div className='contact-section'>
					<div id='email'>copy email</div>
				</div>
			</div>
		</div>
	)
}

export default _
