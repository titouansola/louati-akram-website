import { Link } from '~/components/links/Link';

export function Footer() {
	return (
		<footer className={'bg-secondary text-white p-main'}>
			<div className={'grid grid-cols-3 gap-10 mb-main'}>
				<div>
					<h2 className={'font-semibold text-3xl mb-4'}>Louati Akram</h2>
					<p>
						LA-Multiservices - Expertise, qualité et confiance pour tous vos
						projets de rénovation.
					</p>
				</div>
				<div>
					<h3 className={'font-semibold text-xl mb-6'}>Contact</h3>
					<ul className={'flex flex-col gap-2'}>
						<li>
							<Link.Telephone />
						</li>
						<li>
							<Link.Mail />
						</li>
						<li>
							Intervention dans le Var, Ollioules, Bandol, Sanary, Six-Fours, La
							Seyne, Toulon.
						</li>
					</ul>
				</div>
				<div>
					<h3 className={'font-semibold text-xl mb-6'}>Services</h3>
					<ul className={'flex flex-col gap-2'}>
						<li>Rénovation</li>
						<li>Peinture</li>
						<li>Maçonnerie</li>
					</ul>
				</div>
			</div>
			<p className={'text-center font-light text-xs'}>
				Site réalisé par <a href="https://titouansola.dev">Titouan Sola</a>
			</p>
		</footer>
	);
}
