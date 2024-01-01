import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote';

interface PostProps {
	source: string
	date: string
	title: string
}

function ArticleLayout({ source, date, title}: PostProps) {
	return (
		<div className="subpixel-antialiased font-fivo min-h-screen bg-amber-200">
			<div className="lg:pt-12 lg:px-12 md:p-4 sm:px-0 relative">
				<div className='flex justify-between items-center'>
					<div className="flex">
						<div className="bg-white border-t-2 border-r-2 inline-block border-stone-900 p-4 font-medium border-l-2 text-4xl min-h-full">
							<h1>{title}</h1>
						</div>
						<div className='flex bg-white border-t-2 border-r-2 border-stone-900 p-4 font-medium'>
							<p className='self-center whitespace-nowrap'>{date}</p>
						</div>
					</div>
					<div>
						<Link href={'/blog'}><span className="underline underline-offset-4 self-center whitespace-nowrap m-4">← Back</span></Link>
					</div>
				</div>
				<div className='bg-white border-t-2 border-l-2 border-r-2 max-w-full border-b-2 inline-block border-stone-900 p-4'>
					{/* @ts-ignore */}
					<MDXRemote {...source} />
				</div>
			</div>
		</div>
	)
}

export default ArticleLayout