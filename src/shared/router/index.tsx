src > shared > router > index.tsx

import type { TNovaRoute } from '@nova/ui-library/types';
import { Navigate }  from 'react-router';
// mock layout 가져오기
import MainLayoutIndx from '../components/layout/MainLayoutIndex';

// 예제 라우터 가져오기
import ExampleRouter from '@/domains/example/router';
// 업무공통 라우터 가져오기
import CbRouter from '@/domains/cm-cb-router';
import CsRouter from '@/domains/cm-cs-router';

const routes : TNovaRouter[] = [
	{
		path : '/',
		element : (
			<Navigate
				to={'/cm/cb/main'}
				replace
			/>
		),
	},
	{
		path :'cm'
		element : <MainLayoutIndex />,
		children : CbRouter,
	},
];

export default routes;