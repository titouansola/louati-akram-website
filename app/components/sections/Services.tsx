export function Services() {
	return (
		<section className={'py-main-2 bg-pattern'}>
			<div className={'flex items-center justify-between gap-10 w-2/3 m-auto'}>
				<div className={'flex flex-col gap-4 border-2 border-primary p-8'}>
					<h2 className={'text-4xl font-semibold'}>
						25 ans d'expérience à Ollioules
					</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur. Euismod non varius
						vestibulum eget sagittis leo. Orci tincidunt id id sed vel mauris
						neque ante eget. Fames molestie purus ornare purus tempor augue
						dolor arcu. Vel sit et lorem at.
					</p>
				</div>
				<div className={'flex flex-col gap-8'}>
					<div className={'service'}>
						<div className={'service__left'}>
							<img
								className={'service__img'}
								src={'/img/icons/paint-roller.svg'}
								alt={'Icône peinture'}
							/>
							<h3 className={'service__title'}>Peinture</h3>
						</div>
						<div className={'service__desc'}>
							<p>À l’intérieur ou l’extérieur, pose d’enduit et ponçage</p>
						</div>
					</div>
					<div className={'service'}>
						<div className={'service__left'}>
							<img
								className={'service__img'}
								src={'/img/icons/trowel-bricks-solid.svg'}
								alt={'Icône maçonnerie'}
							/>
							<h3 className={'service__title'}>Maçonnerie</h3>
						</div>
						<div className={'service__desc'}>
							<p>
								Rénovation, réparation de murs, pose de placo, chapes de béton
							</p>
						</div>
					</div>
					<div className={'service'}>
						<div className={'service__left'}>
							<img
								className={'service__img'}
								src={'/img/icons/handshake-angle-solid.svg'}
								alt={'Icône conseil'}
							/>
							<h3 className={'service__title'}>Conseil</h3>
						</div>
						<div className={'service__desc'}>
							<p>Mise à disposition de 25 ans d’expérience dans le métier</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
