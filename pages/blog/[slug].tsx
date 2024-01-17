import fs from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import ArticleLayout from 'layouts/Blog/ArticleLayout'
import articles from 'constants/articles'
import articlesMap from 'constants/articlesMap'
import IconButton from 'components/IconButton'
import Link from 'next/link'

interface PostProps {
	source: string
	slug: string
}

function Article({ source, slug }: PostProps) {

	// @ts-ignore
	const { title, date, tags } = articlesMap.get(slug)

	return (
		<ArticleLayout
			tags={tags}
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

	// @ts-ignore
	const paths = articles.map((article) => {
		return {
			params: {
				slug: article.id
			}
		}
	})

	return {
		paths,
		fallback: false
	}
}

export default Article