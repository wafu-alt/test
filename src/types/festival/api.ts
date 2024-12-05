/** 축제 상태 */
export enum IFestivalStatus {
  /** 진행중 */
  BEING = 'BEING',
  /** 종료 */
  ENDED = 'ENDED',
  /** 예정 */
  UPCOMING = 'UPCOMING',
}

/** 축제 데이터 리스트 */
export interface IFestivalListData {
  /** 리스트 테이블 기본 키 @example 81 */
  Id: number;
  /** 고유아이디 @example 2485661 */
  ContentId: number;
  /** 관광타입 @example 15 */
  ContentType: number;
  /** 제목 @example '양화진 근대사 뱃길탐방' */
  Title: string;
  /** 시작일 @example '2024-06-26' */
  StartDate: string;
  /** 종료일 @example '2024-07-14' */
  EndDate: string;
  /** 축제 상태 @example 'BEING' | 'UPCOMING' | 'ENDED' */
  Status: IFestivalStatus;
  /** 지역 + 군,구 @example '서울특별시 마포구' */
  ShortAddres: string;
  /** 지역코드 @example 1 */
  AreaCode: number;
  /** 군,구 코드 @example 13 */
  CityCode: number;
  /** 공공데이터에서 가져온 생성날짜 @example '2017-03-15 16:44' */
  ExternalApiCreateDate: string;
  /** 공공데이터에서 수정날짜 @example '2024-07-05 06:36' */
  ExternalApiUpdateDate: string;
  /** 생성날짜 @example '2024-09-05 21:31' */
  CreateDate: string;
  /** 수정날짜 @example '2024-09-05 21:31' */
  UpdateDate: string;
  /** 이미지주소 @example 'http://tong.visitkorea.or.kr/cms/resource/88/3309588_image2_1.jpg' */
  ThumbnailImage: string;
}

/** 서버 응답 상태 메세지 */
export interface IDataResponseStateMsg {
  success: boolean;
  message: string;
}
