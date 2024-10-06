import { Link } from '~/components/links/Link';

export function LastCallToAction() {
	return (
		<section className={'flex my-main-2 bg-primary text-white items-stretch'}>
			<div
				className={'flex flex-col items-center justify-center gap-8 w-1/2 p-8'}
			>
				<h2 className={'font-semibold text-3xl'}>
					Petite ou grande rénovation, faîtes appel à LA-Multiservices
				</h2>
				<Link.Button>Demander un avis gratuit</Link.Button>
			</div>
			<img
				src={'/img/last-cta.jpg'}
				alt={'Petite maison suspendue'}
				className={'w-1/2 object-cover'}
			/>
		</section>
	);
}
