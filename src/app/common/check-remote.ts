
export const getRemoteEntry = async (remoteAppName: string, url: string): Promise<string> => {
	try {
		console.log(remoteAppName);
		const response = await fetch(url);
		if (response.ok) {
			return url;
		} else {
			//console.error ('${remoteAppName} entrypoint(${url}) 로딩 실패 : ${response.status} ');
			return '';
		}
	} catch (error) {
		//console.error(('${remoteAppName} entrypoint(${url}) 연결 실패 :  ' ,  error );
		return '';
	}

}