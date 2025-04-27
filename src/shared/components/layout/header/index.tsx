src > shared > components > layout > header > index.tsx

import type { IComponent } from '@nova/ui-library/types';
import { XIConButton, XSearchBar, XAvatar, XStatusBadge } from 'opus-x-react-assets';
import logo from '@/assets/images/icons/logo.svg';

import ReouterMenu from '../temporary/RouterMenu';

interface IHeaderProps {

}

const Header : IComponent<IHeaderProps> = (): JSX.Element = > {
	return (
		<>
			<header className="header">
				<div className="header-left">
				<img src={logo} alt=""/>
				<XIconButton />
				<ul className="menu">
					<li>신계약</li>
					<li>계약변경</li>
					<li>입출금</li>
					<li>일반지급</li>
					<li>사고지급</li>
					<li>보험계약대출</li>
					<li>고객관리</li>
					<li>상품관리</li>
					<li>시스템관리</li>
					<li><RouterMenu></li>
				</ul>
				</div>
				<div className="header-right">
				<XIconButton />
				<XSearchBar />
				<XAvatar />
				<XIconButton />
				<XIconButton />
				<XStatusBadge />
				</div>
			</header>
		</>
	)

}