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
				Louati Akram, maçon à Ollioules
			</h2>
			<p className={'my-6'}>
				Lorem ipsum dolor sit amet consectetur. Nulla molestie porttitor ac
				vitae ut tincidunt risus leo odio. Arcu nunc lorem amet eget sit gravida
				mollis nisl. A penatibus gravida sed eget purus quam vulputate tortor.
				Faucibus eleifend odio ac pretium semper. Ipsum vel amet dolor erat.
				Felis bibendum proin non tortor porttitor. Elementum pharetra ut sit
				orci sit.
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
