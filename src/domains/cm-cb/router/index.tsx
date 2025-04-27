
import type { TNovaRoute } from '@nova/ui-library/types';

// 업무공통 메인 컴포넌트 페이지 가져오기
import CmMain from '@/domains/cm-cb/pages/CmMain';

const routes: TNovaRoute[] = [
	{
		path: 'main',
		element: <CmMain />,
		name: 'cm-cb/CmMain',
	},
];

export default routes;