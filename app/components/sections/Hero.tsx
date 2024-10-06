import { Link } from '~/components/links/Link';

export function Hero() {
	return (
		<div
			className={
				'bg-hero-pattern bg-center flex flex-col gap-7 text-light px-main py-main-3'
			}
		>
			<div className={'md:w-10/12 lg:w-2/3'}>
				<h1 className={'text-5xl font-semibold mb-4'}>
					L-A Multiservices, lorem ipsum zrgz zerhlkgjh argh arlgkjzhfg dhvjkh
					rglizrtuhkg
				</h1>
				<p className={'font-medium'}>
					Lorem ipsum dolor sit amet consectetur. Ac posuere aenean tellus
					tempus dis sollicitudin justo.
				</p>
			</div>
			<Link.Button>Demander un devis gratuit</Link.Button>
		</div>
	);
}
