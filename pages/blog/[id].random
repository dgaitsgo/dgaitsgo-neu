import fs from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize';
import Blog from 'layouts/Blog';

function Article({ source }: { source: string }) {
	return (
		<Blog source={source} />
	)
}

export async function getStaticProps(context: any) {

	const { id } = context.req.query.id

	const path = join(process.cwd(), 'pages/blog');
	const fileContents = await serialize(fs.readFileSync(`${path}/${id}`, 'utf8'))
	return { props: { source: fileContents } };
}

export default Article