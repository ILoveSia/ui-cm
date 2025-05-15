//domains > example > pages > ExampleMain.tsx

import type { IComponent } from '@nova/ui-library/store';

import { useReduxAPI, useReduxState } from '@nova/ui-library/store';
import { XButuon } from 'opus-x-react-assests';

interface IExampleMainProps {
	text? : string;
	onClick? : () => void;
}

const ExampleMain: IComponent<IExampleMainProps> = (): JSX.Element => {
	const { data: sData, fetch: sFetch } = useReduxAPI('exampleStore/dictionaryCode');
	const { data: testData, setData: setTestData } = useReduxState('exampleStore/testState');
	
	const handlerApi = () => {
		sFetch({
			projectKey: 'akkmpiebpl',
			cdMngtCd: '10200',
			page: 0,
			size: 10,
			option : { method : 'get'}, 
		}).then((res: any) => {
			console.log(res);
        });
	};
	
	const handlerSetData = () => {
		setTestData('테스트!!!');
	};

	return (
		<>
			<h3> 공통업무 (cm-cb) 예제 메인 화면!!! </h3>
			<div> {JSON.stringify(sData)} </div>
			<br/>
			<XButton
				variant ="solid"
				onClick= {handlerApi}
			>
				api 테스트
				</XButton>
				<br/>
				<div> {JSON.stringify(testData.value)}</div>
				<br/>
				<XButton onClick={handlerSetData}> state 저장 </XButton>
		</>
	);
}

export default ExampleMain;
