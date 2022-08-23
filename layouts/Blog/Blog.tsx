import { MDXRemote } from 'next-mdx-remote'

interface BlogProps {
	source: string
}

function Blog({ source }: BlogProps) {
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

export default Blog