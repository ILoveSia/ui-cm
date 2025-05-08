import type { IUtils, IUiJS, IRouter } from '@nova/ui-library/types';

export {};

declare global {
	interface Window {
		$ui : IUiJS;
		$utils : IUtils;
		$router : IRouter;
	}
	
	const $ui : IUiJS;
	const $utils : IUtils;
	const $router : IRouter;

}

declare module '@main/MainLayout';