import type { PropsWithChildren } from 'react';
import {
	HREF_MAIL,
	HREF_TELEPHONE,
	MAIL,
	TELEPHONE,
} from '~/constants/contact';

function LinkComponent({
	link,
	children,
}: PropsWithChildren<{ link: string }>) {
	return (
		<a href={link} target={'_blank'} rel={'noreferrer'}>
			{children}
		</a>
	);
}

export const Link = {
	Mail({ children }: PropsWithChildren) {
		return <LinkComponent link={HREF_MAIL}>{children ?? MAIL}</LinkComponent>;
	},
	Telephone({ children }: PropsWithChildren) {
		return (
			<LinkComponent link={HREF_TELEPHONE}>
				{children ?? TELEPHONE}
			</LinkComponent>
		);
	},
	Button({ children }: PropsWithChildren) {
		return (
			<LinkComponent link={HREF_MAIL}>
				<button type={'button'} className={'btn'}>
					{children}
				</button>
			</LinkComponent>
		);
	},
};
