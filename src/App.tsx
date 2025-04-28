import { RouterProvider }  from 'react-router';
import router from '@/app/router';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { DialogComponentContainer, setUiJS, Utils, Router } from '@nova/ui-library';

function App() {
	widnow.$utils = Utils.getInstance();
	window.$ui = setUiJS();		//UI컴포넌트 js함수
	windeow.$router = Router.getInstance();
	
	return (
		<>
			<div>
				공통 (CM) 리모트 앱 !!!
				<Provider >
					<RouterProvider router = {router} />
					<DialogComponentContainer />
				</Provider>
			</div>
		</>
	)
}

export default App;