src > shared > components > layout > sidebar > index.tsx

import type { IComponent } from '@nova/ut-library/types';
import { XIconButton } from 'opus-x-react-assets';

interface ISidebarProps {
}

const Sider : IComponent<ISidebarProps> = (): JSX.Element => {
	return (
		<>
			<div className = "sidebar">
				<div>
					<ul>
						<li>
							<XIconButton />
						</li>
						<li>
							<XIconButton />
						</li>
						<li>
							<XIconButton />
						</li>
						<li>
							<XIconButton />
						</li>
						<li>
							<XIconButton />
						</li>
						<li>
							<XIconButton />
						</li>
						<li>
							<XIconButton />
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<XIconButton />
						</li>
						<li>
							<XIconButton />
						</li>
					</ul>
				<div>
			</div>
		</>
	);

};