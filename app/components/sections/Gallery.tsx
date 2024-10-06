export function Gallery() {
	return (
		<div className={'p-main pb-main-2 bg-primary'}>
			<h2
				className={
					'text-center w-fit mx-auto mb-main py-2 border-y-2 border-light font-semibold text-light text-2xl'
				}
			>
				Galerie photo
			</h2>
			<div className={'flex md:grid md:grid-cols-3 gap-2 overflow-x-auto'}>
				{new Array(7)
					.fill(null)
					.map((_, i) => i + 1)
					.map((i) => (
						<img
							key={i}
							className={'gallery-img'}
							src={`/img/gallery-${i}.jpg`}
							alt={`Galerie ${i}`}
						/>
					))}
			</div>
		</div>
	);
}
