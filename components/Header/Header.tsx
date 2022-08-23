function Header() {
	return (
		<div className="flex content-space-between w-full bor">
			<div className="bg-white border-t-2 border-r-2 flex items-center border-stone-900 p-4 font-medium font-fivo">
				<h1 className="text-6xl">David Gaitsgory</h1>
			</div>
			<img className="max-h-32 border-t-2 border-r-2 border-stone-900 bg-cyan-200" src={'/images/dgaitsgo.png'} alt='David Gaitsgory illustration' />
		</div>
	)
}

export default Header