
export const getRemoteEntry = async (remoteAppName: string, url: string): Promise<string> => {
	try {
		const response = await fetch(url);
		if (response.ok) {
			return url;
		} else {
			console.error('${remoteAppName} entrypoint(${url}) 로딩 실패: ${response.status}' );
			return '';
		}
	} catch (error) {
		console.error('${remoteAppName} entrypoint(${url}) 연결 실패:' , error );
		return '';
	}
};

const setRemoteObj = (remoteAppName: string, url: string) => {
	return {
		[remoteAppNme] : {
			external : url,
			from : 'vite',
			externalType : 'url',
		},
	};
};

const checkRemoteApp = async (env: any, remoteAppName: string[]) : Promis<any> => {
	const returnArr = [];
	for (let i=0; i < remoteAppName.length; i++) {
		if (remoteAppName[i] === '@main') {
			const result = await getRemoteEntry(remoteAppName[i]);
			if (result !== ''){
				returnArr.push (setRemoteObj(remoteAppName[i]. env.VITE_REMOTE_MAIN_URL));
			}
		}
	}
	
	return returnArr.length === 0 ? {} : returnArr;
};

export default checkRemoteApp;