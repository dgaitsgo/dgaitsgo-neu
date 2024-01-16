import React from "react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

function Home() {

	const router = useRouter()
	const changeTo = router.locale === 'en' ? 'fr' : 'en'
	const { t } = useTranslation('common')

	const onToggleLanguageClick = (newLocale: string) => {
		const { pathname, asPath, query } = router
		router.push({ pathname, query }, asPath, { locale: newLocale })
	}

	const Header = () =>

		<div className="lg:flex lg:content-start md:flex md:content-start">
			<div className="bg-white border-t-2 border-r-2 flex items-center border-stone-900 p-4 font-medium font-fivo">
				<h1 className="text-6xl">David Gaitsgory</h1>
			</div>
			<img className="lg:max-h-32 md:max-h-32  border-t-2 border-r-2 border-stone-900 bg-cyan-200" src={'/images/dgaitsgo.png'} alt='David Gaitsgory illustration' />
		</div>

	const Description = () => {

		return (
			<div>
				<div>
					<p className="py-4 pl-4 border-t-2 border-r-2 border-b-2 border-stone-900 self-center text-2xl  bg-white font-fivo font-light">
						{t('description')}
					</p>
				</div>
			</div>
		)
	}

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
					{t('recent_work')}
				</h2>
			</div>
			<div className="flex border-t-2 border-b-2 border-stone-900 font-fivo flex-col md:flex-col lg:flex-row">
				<div className="lg:w-6/12 pl-4 lg:pl-16 p-6 border-r-2 border-stone-900 border-b-2 lg:border-b-0">
					<h4 className="text-xl">Upward Facing Cat</h4>
					<div className="flex gap-2 mb-2">
						<span className="font-bold">{t('lead_dev')}</span>
					</div>
					<p className="pt-4 mb-2 lg:h-12">{t('recent_work.ufc')}</p>
					<div className="flex gap-2 mb-4">
						<a className="underline underline-offset-4" href="https://ufc.dance/">Site →</a>
					</div>
				</div>
				<div className="lg:w-6/12 p-6 pl-4 lg:pl-16">
					<h4 className="text-xl font-lighter">Styleep</h4>
					<div className="flex gap-2 mb-2">
						<span className="font-bold">{t('lead_dev')}</span>
					</div>
					<p className="pt-4 mb-2 lg:h-12">{t('recent_work.styleep')}</p>
					<div className="flex gap-2 mb-4">
						<a className="underline underline-offset-4" href="https://www.styleep.com">Site →</a>
					</div>
				</div>
			</div>
		</>

	const Testimonials = () =>
		<>
			<div className="flex bg-white">
				<p className="m-auto px-4 py-4 text-center text-3xl mt-6 underline underline-offset-8 rounded-lg font-fivo font-bold">{t('what_they_say')}</p>
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
					<p className="italic text-stone-700">{t('chris_cabell.praise')}</p>
					<p className="mt-4">- {t('chris_cabell.title')}</p>
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
					<p className="italic text-stone-700">
						{t('mitch_chaiet.praise')}
					</p>
					<p className="mt-4">- {t('mitch_chaiet.title')}</p>
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

	const SatisfiedCustomers = () =>
		<>
			<div className="flex bg-white mt-16 border-b-2 border-stone-900">
				<div className="text-center p-4 ml-12 bg-white border-l-2 border-r-2 border-t-2 border-stone-900">
					{t('other_satisfied_customers')}
				</div>
			</div>
			<div className="flex justify-evenly items-center p-12 flex-wrap gap-4">
				<a href="https://www.healthgorilla.com/" target="_blank" rel="noreferrer">
					<div className="flex items-center gap-4">
						<img className="grayscale w-10 max-h-24" src={'/images/company-logos/hg.svg'} alt='Health Gorilla Logo' />
						<p>Health Gorilla</p>
					</div>
				</a>
				<a href="https://pioneer.buzz/" target="_blank" rel="noreferrer">
					<div className="flex items-center gap-4">
						<img className="grayscale w-10 max-h-24" src={'/images/company-logos/pioneer.png'} alt='Pioneer logo' />
						<h4 className="text-xl font-lighter">Pioneer</h4>
					</div>
				</a>
				<a href="https://www.di-rupt.com/accueil/" target="_blank" rel="noreferrer">
					<div className="flex items-center gap-4">
						<img className="grayscale w-10 max-h-24" src={'/images/company-logos/wisight.png'} alt='WiSight Logo' />
						<h4 className="text-xl font-lighter">WiSight</h4>
					</div>
				</a>
				<a href="https://www.publichealthpost.org/" target="_blank" rel="noreferrer">
					<div className="flex items-center gap-4">
						<img className="grayscale w-10 max-h-24" src={'/images/company-logos/public-health-post.jpeg'} alt='Public Health Post Logo' />
						<h4 className="text-xl font-lighter">Public Health Post</h4>
					</div>
				</a>

			</div>
		</>

	const CTA = () =>
		<div className="bg-white border-t-2 border-stone-900">
			<h1 className="bg-white text-5xl lg:ml-12 mx-4 mt-16 font-fivo font-bold">
				{t('great_idea')}
			</h1>
			<a href="mailto:hi@dgaitsgo.com">
				<button className="text-3xl lg:ml-12 ml-4 text-white p-8 mt-8 bg-purple-900 border-stone-900 border-2">
					{t('lets_begin')} ➛
				</button>
			</a>
		</div>

	const Footer = () =>
		<footer className="m-auto bg-stone-900 mt-12 lg:p-12 p-4 border-t-2 text-white flex gap-4">
			{/* <p>Made in Brasília</p> */}
			{/* <p className="underline underline-offset-4"><a>Feedback</a></p> */}
			{/* <p className="pt-1">All rights reserved</p> */}
			<p className="mt-2 underline underline-offset-4"><a href="https://github.com/dgaitsgo"> 🔗 github</a></p>
			<p className="mt-2 4">•</p>
			{/* <Link href="/" locale={changeTo}> */}
			{/* <button>{t('change-locale', { changeTo })}</button> */}
			{/* </Link> */}
			<p className="mt-2">{t('available')}
				<span className="underline underline-offset-4">
					<Link href="/" locale={changeTo}>
						{t('in_lang')}
					</Link>
				</span>
			</p>
			{/* <Link href={'/blog'} className="">Blog</Link> */}
		</footer>


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
				<SatisfiedCustomers />
				<CTA />
				<Footer />
			</div >
		</>
	)
}


export async function getStaticProps({ locale }: { locale: any }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				'common',
			])),
		},
	}
}


export default Home
