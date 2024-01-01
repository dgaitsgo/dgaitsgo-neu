import fs from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import ArticleLayout from 'layouts/Blog/ArticleLayout'
import articles from 'constants/articles'

interface PostProps {
	source: string
	slug: string
}

function Article({ source, slug }: PostProps) {

	// @ts-ignore
	const { title, date } = articles[slug]

	return (
		<ArticleLayout
			title={title}
			date={date}
			source={source}
		/>
	)
}

export async function getStaticProps({ params }: { params: any }) {
	const { slug } = params
	const path = join(process.cwd(), 'articles')
	const fileContents = await serialize(fs.readFileSync(`${path}/${slug}.md`, 'utf8'))
	return { props: { source: fileContents, slug } }
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'recreate-that-graph-water-quality' } },
			{ params: { slug: 'tiles-in-bbox-open-closed' } }
		],
		fallback: false
	  }
}

export default Article