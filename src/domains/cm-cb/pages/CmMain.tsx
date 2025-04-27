import type { ICompont } from '@nova/ui-library/types';

interface ICmMainProps {

}

cont CmMain: ICompont<ICmMainProps> = (): JSX.Element => {
	return (
		<>
			<div style={{border: '1px solid red', width: '200px', height: '400px'}} > cm-cb 메인 화면!! </div>
		</>
	);
};

export default CmMain;