//src > domains > example > router > index.tsx

import type { TNovaRoute } from '@nova/ui-library/types';

// 예제 메인 컴포넌트 페이지 가져오기
import ExampleMain from '@/domains/example/pages/ExampleMain';

const routes: TNovaRoute[] = [
	{
		path: 'ex-main',
		element: <ExampleMain/>,
		name: 'Example/ExampleMain',
	}
];

export default routes;