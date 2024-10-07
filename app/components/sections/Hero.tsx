import { Link } from '~/components/links/Link';

export function Hero() {
	return (
		<div
			className={
				'bg-hero-pattern bg-center flex flex-col gap-7 text-light px-main py-main-3'
			}
		>
			<div className={'md:w-10/12 lg:w-2/3'}>
				<h1 className={'text-3xl md:text-5xl font-semibold mb-4'}>
					L-A Multiservices, vous accompagne pour réaliser toutes vos envies
				</h1>
				<p className={'font-medium'}>
					Avec 25 ans d'expérience en tant que maçon à Toulon, nous vous
					accompagnons dans tous vos{' '}
					<b>projets de rénovation intérieure et extérieure.</b>
					<br />
					Cuisine, salle de bain, chambre, terrasse ou jardin, Louati Akram
					écoute, s'adapte et vous <b>conseille sur tous vos besoins.</b>
				</p>
			</div>
			<Link.Button>Demander un devis gratuit</Link.Button>
		</div>
	);
}
