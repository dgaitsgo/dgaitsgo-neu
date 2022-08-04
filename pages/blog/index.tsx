import Link from "next/link"

const articles = [
	{
		title: 'Reacreate that graph: Water Quality',
		sum: "What can we find out about the areas with the most water quality violations? I go through the steps to collect, refind and visualize the data to answer that quesiton.",
		tags: ["D3", 'Data Viz', 'python', 'scraping'],
		link: "rctg1"
	}
]

function Blog() {
	return (
		<div className="subpixel-antialiased font-fivo min-h-screen">
			<div className="lg:pt-12 lg:px-12 md:p-4 sm:px-0 bg-amber-200 relative">
				<div className="bg-white border-t-2 border-r-2 border-b-2 inline-block border-stone-900 p-4 font-medium border-l-2 text-4xl min-h-full ">
					<h1 className="">Blog</h1>
				</div>
				<div>
					<h2 className="mt-6 bg-fuchsia-300 font-bold p-2 inline-block text-2xl border-stone-900 border-2">Recents Posts</h2>
				</div>

				<div className="mt-8">
					{
						articles.map((article, i) => {
							return (
								<div className="border-stone-900 border-l-2" key={i}>
									<h3 className="inline-block font-bold text-lg border-stone-900 border-t-2 border-stone 900 border-r-2 p-4 bg-white">{article.title}</h3>
									<p className="text-stone-700  border-stone-900 border-t-2 border-r-2 p-4 bg-white border-b-2 inline-block">{article.sum}</p>
									{

									}
									<Link href={`/blog/${article.link}`}>
										<a className="bg-lime-200 border-b-2 border-r-2 inline-block border-stone-900 p-4"><span className="underline underline-offset-4">Read More</span>&nbsp;→</a>
									</Link>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Blog