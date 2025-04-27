
// url의 타입을 호출 시 사용하기 위하여 선언 해준다.
export type TUrl = (typeof url)[keyof typeof url];

// api/url.ts 파일
const url = {
	// REST API 계속 추가 가능.
	DICTIONARY_CODE: '/metadata/rest/dictionary/code',
} as const;

export default url;