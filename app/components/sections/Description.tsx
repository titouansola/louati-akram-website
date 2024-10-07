const qualities = [
	'Qualité supérieure',
	'Satisfaction client',
	'Innovation et créativité',
	'Transparence et intégrité',
	"Respect de l'environnement",
];

export function Description() {
	return (
		<section className={'py-main-2'}>
			<h2 className={'font-semibold text-3xl'}>
				Rénovation intérieure et extérieure
			</h2>
			<p className={'my-6'}>
				Louati Akram, <b>maçon à Toulon</b>, réalise vos rénovations intérieures
				: cuisine, salle de bain, chambre à coucher, penderie et salon.
				<br />
				Ainsi qu'à l'extérieur : terrasse, véranda, balcon et jardin.
				<br />
				<b>Votre satisfaction est centrale</b> dans le suivi de votre chantier,
				c'est pourquoi LA-Multiservices se rend disponible pour{' '}
				<b>répondre à toutes vos questions</b> et vous fournir des{' '}
				<b>conseils avisés et expérimentés.</b>
				<br />
				La réalisation nécessite une <b>qualité exemplaire</b>, garantie par{' '}
				<b>plus de 25 ans d'expérience</b> dans la rénovation intérieure et
				extérieure.
			</p>
			<ul className={'flex flex-col gap-3 font-medium'}>
				{qualities.map((quality) => (
					<li key={quality} className={'flex gap-2'}>
						<img src={'/img/icons/check.svg'} alt={'Icône check'} />
						<span>{quality}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
