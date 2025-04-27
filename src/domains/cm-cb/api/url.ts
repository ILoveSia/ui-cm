// url의 타입을 호출 시 사용하기 위하여 선언 해준다.
export type TUrl = (typeof url)[keyof typeof url];

// api/url.ts파일
const url = {
    EX_API: '/metadata/rest/dictionary/codes',    // url  등록 예제 코드
    // REST API 계속 추가..
} as const;

export default url;
