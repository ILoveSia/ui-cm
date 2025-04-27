//src > domains > example > store > index.ts

import url from '@/domains/example/api/url';

// Example 스토어 타입 ==================
export interface IExampleStore<T = IRootState> {
	// search: T;
	dictionaryCode: T;
	testState: T;
}

// Example Action 객체 ===================
// 생성할 Stroe state의 이름을 정하고, 값으로 actionType과 url을 입력한다.
// API호출이 아닌 경우에는 url을 입력 하지 않아도 된다. (state만 생성할때)
// actionType 이름은 전역 store에 연결 되어있는 이름과 '/'로 합쳐서 생성한다.
const exampleAction : IExampleStore<IActionObject> = {
	testState : { actionType : 'exampleStore/testState' },
	dictionaryCode :{ actionType : "exampleStore/dictionaryCode', url: url.DICTONARY_CODE },

} as const;

export default exampleAction;