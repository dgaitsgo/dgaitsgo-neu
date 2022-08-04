import fs from 'fs'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

interface PostProps {
	source: string
}

function _1({ source }: PostProps) {
	return (
		<div className="subpixel-antialiased font-fivo min-h-screen">
			<div className="lg:pt-12 lg:px-12 md:p-4 sm:px-0 bg-amber-200 relative">
				<div className='bg-white border-t-2 border-l-2 border-r-2 max-w-full border-b-2 inline-block border-stone-900 p-4'>
					{/* @ts-ignore */}
					<MDXRemote {...source} />
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const path = join(process.cwd(), 'pages/blog');
	const fileContents = await serialize(fs.readFileSync(`${path}/rctg1.md`, 'utf8'))
	return { props: { source: fileContents } };
}

export default _1