import { Link } from '~/components/links/Link';

export function Services() {
	return (
		<section className={'py-main-2 bg-pattern'}>
			<div
				className={
					'flex items-center justify-between gap-10 lg:w-2/3 lg:min-w-[1100px] max-lg:px-main m-auto max-lg:flex-col'
				}
			>
				<div className={'border-2 border-primary p-8'}>
					<h2 className={'text-4xl font-semibold'}>Maçon à Ollioules</h2>
					<p className={'my-4'}>
						Louati Akram vous propose ses services de{' '}
						<b>maçonnerie et peinture</b> pour tous vos projets de rénovation.
						Avec <b>25 ans d'expérience</b> et de passion dans le métier,
						LA-Multiservices vous fournira des <b>conseils de qualité</b> et
						adaptés à vos besoins.
					</p>
					<Link.Button>Obtenir un devis</Link.Button>
				</div>
				<div className={'flex max-md:flex-col md:flex-row lg:flex-col gap-8'}>
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
