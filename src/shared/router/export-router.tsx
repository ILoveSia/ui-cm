import type { TNovaRoute }  from '@nova/ui-library/types';
import { Outlet } from 'react-router';

// 예제 라우터 가져오기
import CbRouter from '@/domains/cm-cb/router';
import CsRouter from '@/domains/cm-cs/router';

const routes : TNovaRoute[] = [
	{
		path : 'cb',
		element : <Outlet/>,
		children : CbRouter,
	},	
	{
		path : 'cs',
		element : <Outlet/>,
		children : CsRouter,
	}
];

export default routes;