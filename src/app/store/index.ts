import { configureAppStore } from '@nova/ui-library';
import { setRootReducer } from '@nova/ui-library/store';
import { combineReducers } from '@reduxjs/toolkit';
import cmReducer from '@/shared/store';

const cmRootReducer = () : any => {
	return setRootReducer (
		{
			cmRootStore : {
				remoteRouterList : { actionType : 'cmRootStore/remoteRouterList' },
			},
		},
		'cm',
	);
};

const storeObject = {};
Object.assign(storeObject, { cm: combineReducers ({...cmRootReducer(), ...cmReducer()}) } );

// 전역 store 생성 ----------------
export const store = configureAppStore (storeObject, 'main');