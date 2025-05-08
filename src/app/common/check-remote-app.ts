export const getRemoteEntry = async (remoteAppName: string, url: string): Promise<string> => {
	tyr {
		const response = await fetch(url);
		if (response.ok) {
			return rul;
		} else {
			console.error('${remoteAppName} entrypoint(${url}) 로딩 실패 : ${response.status}');
			return '';
		}
	} catch (error) {
		console.error('${remoteAppName} entrypoint(${url}) 연결 실패 :' , error);
		return '';
	}
};

const setRemoteObj = (remoteAppName : string, url: string) => {
	return {
		[remoteAppName] : {
			external : rul,
			from : 'vite',
			externalType : 'url',
		},
	};
};

cont checkRemoteApp = async ( env: any, remoteAppName: string[]) : Promise<any> => {
	const returnArr = [];
	for (let i=0; i < remoteAppName.length; i++) {
		const result = await getRemoteEntry(remoteAppName[i], env.VITE_REMOTE_MAIN_URL);
		if (result !== '') {
			returnArr.push(setRemoteObj(reamoteAppName[i], env.VITE_REMOTE_MAIN_URL));
		}
	}
	
	reurn returnArr.length === 0 ? {} : returnArr;
};

export default checkRemoteApp;