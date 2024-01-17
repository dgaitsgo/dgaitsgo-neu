import { MDXRemote } from 'next-mdx-remote';
import ContentWrapper from 'components/ContentWrapper';
import BreadCrumb from 'components/BreadCrumb';

interface PostProps {
	source: string
	date: string
	title: string
	tags: Array<string>
}

function ArticleLayout({ source, date, title, tags }: PostProps) {
	return (
		<ContentWrapper>
			<BreadCrumb crumbs={
				[{label: 'dgaitsgo', href: '/'}, { label: 'blog', href: '/blog'}, { label: date}]
			} />
			<div className="inline-block p-4 font-medium text-4xl min-h-full">
				<h1 className="font-bold header-color">{title}</h1>
			</div>
			<div className='flex bg-white p-4 font-medium'>
				<p className='self-center whitespace-nowrap text-gray-400'>{date}</p>
			</div>
			<div className='inline-block p-4'>
				{/* @ts-ignore */}
				{tags.map((tag, key) =>
					<span className="text-sm font-bold underline mr-2" key={key}>#{tag}</span>
				)}
			</div>
			<div className='bg-white block 0 p-4 max-w-prose blog__prose'>
				{/* @ts-ignore */}
				<MDXRemote {...source} />
			</div>
		</ContentWrapper >
	)
}

export default ArticleLayout