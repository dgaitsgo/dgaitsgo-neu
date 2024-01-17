import Link from "next/link"
import articles from 'constants/articles'
import ContentWrapper from "components/ContentWrapper"
import BreadCrumb from "components/BreadCrumb"

const Footer = () =>
	<footer className="m-auto bg-stone-900 lg:p-12 p-4 text-white flex gap-4">
		<div className="mt-2 ml-4 flex gap-4">
			<p className="underline underline-offset-4"><Link href="/">Home</Link></p>
		</div>
	</footer>

function Blog() {
	return (
		<ContentWrapper>
			<BreadCrumb crumbs={[{ label: 'dgaitsgo', href: '/' }, { label: 'blog' }]}></BreadCrumb>
			<h2 className="article_section__header mt-6 font-bold pt-4 pl-4 pb-0 inline-block text-2xl">Recents Posts</h2>
			<div className="article__cards__wrapper mt-8 flex flex-col gap-8">
				{
					// @ts-ignore
					articles.map((article, key) => {
						return (
							<div className="article__card shadow" key={key}>
								<Link href={`/blog/${article.id}`}>
									<a>
										<div className="p-4">
											<h3 className="block font-bold text-2xl bg-white header-color pb-2">{article.title}</h3>
											<p className="whitespace-nowrap text-gray-400 text-sm pb-2">{article.date}</p>
											<div>
												{/* @ts-ignore */}
												{article.tags.map((tag, key) =>
													<span className="text-sm font-bold underline mr-2" key={key}>#{tag}</span>
												)}


											</div>
											<br></br>
											<p className="text-stone-700 bg-white inline-block">{article.sum}</p>
											<br></br>
											{/* <span className="inline-block p-4"><span className="underline underline-offset-4">Read More</span>&nbsp;→</span> */}
										</div>
									</a>
								</Link>
							</div>
						)
					})
				}
			</div>
		</ContentWrapper >
	)
}

export default Blog