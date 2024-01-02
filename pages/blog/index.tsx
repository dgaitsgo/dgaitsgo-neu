import Link from "next/link"
import articles from 'constants/articles'

const Footer = () =>
	<footer className="m-auto bg-stone-900 lg:p-12 p-4 border-t-2 text-white flex gap-4">
		<div className="mt-2 flex gap-4">
			<p className="underline underline-offset-4"><Link href="/">Home</Link></p>
		</div>
	</footer>

function Blog() {
	return (
		<>
			<div className="subpixel-antialiased font-fivo min-h-screen bg-amber-200 pb-8">
				<div className="lg:pt-12 lg:px-12 md:p-4 sm:px-0 relative h-full">
					<div className="flex justify-between">
						<div className="bg-white border-t-2 border-r-2 border-b-2 inline-block border-stone-900 p-4 font-medium border-l-2 text-4xl min-h-full">
							<h1 className="">Blog</h1>
						</div>
						<Link href={'/'}>← Home</Link>

					</div>
					<div>
						<h2 className="mt-6 bg-fuchsia-300 font-bold p-2 inline-block text-2xl border-stone-900 border-2">Recents Posts</h2>
					</div>

					<div className="mt-8 flex flex-col gap-8">
						{
							Object.keys(articles).map((key, i) => {
								// @ts-ignore
								const article = articles[key];
								return (
									<div className="border-stone-900 border-l-2" key={i}>
										<Link href={`/blog/${article.id}`}>
											<a>
												<h3 className="inline-block font-bold text-lg border-stone-900 border-t-2 border-stone 900 border-r-2 p-4 bg-white">{article.title}</h3>
												<br></br>
												<p className="text-stone-700  border-stone-900 border-t-2 border-r-2 p-4 bg-white border-b-2 inline-block">{article.sum}</p>
												<br></br>
												<span className="bg-lime-200 border-b-2 border-r-2 inline-block border-stone-900 p-4"><span className="underline underline-offset-4">Read More</span>&nbsp;→</span>
											</a>
										</Link>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Blog