import { Link } from '~/components/links/Link';

export function Header() {
	return (
		<header>
			<div
				className={'bg-primary text-light px-main py-2 flex justify-between'}
			>
				<span>
					Demander un devis <Link.Telephone />
				</span>
				<Link.Mail />
			</div>
			<div className={'px-main py-5 flex items-center justify-between'}>
				<span className={'text-xl font-semibold'}>Louati Akram</span>
				<Link.Button>Demander un devis</Link.Button>
			</div>
		</header>
	);
}
