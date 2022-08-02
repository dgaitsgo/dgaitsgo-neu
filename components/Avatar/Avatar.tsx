import styles from './Avatar.module.css'

interface AvatarProps {
	name: string
	imgURL?: string
}

function Avatar({ imgURL, name }: AvatarProps) {
	return (
		<div
			className=
				"w-24 h-24 rounded-full border-2 border-indigo-100 flex items-center align-middle"
		>
			{imgURL
				? <img src={imgURL} alt={name} />
				: <span className='text-tahiti'>{name[0]}</span>
			}
		</div>
	)
}

export default Avatar
