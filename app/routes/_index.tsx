import type { MetaFunction } from '@remix-run/node';
import { Description } from '~/components/sections/Description';
import { Footer } from '~/components/sections/Footer';
import { Gallery } from '~/components/sections/Gallery';
import { Header } from '~/components/sections/Header';
import { Hero } from '~/components/sections/Hero';
import { LastCallToAction } from '~/components/sections/LastCallToAction';
import { Services } from '~/components/sections/Services';

export const meta: MetaFunction = () => {
	return [
		{ title: 'Louati Akram - Maçon - Peinture - Rénovation' },
		{
			name: 'description',
			content:
				'Louati Akram maçon à Ollioules, réalise vos travaux de rénovation, peinture et maçonnerie.',
		},
	];
};

export default function Index() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
				<Gallery />
				<div className={'w-10/12 lg:w-2/3 m-auto'}>
					<Description />
					<div className={'h-[2px] bg-secondary'} />
					<LastCallToAction />
				</div>
			</main>
			<Footer />
		</>
	);
}
