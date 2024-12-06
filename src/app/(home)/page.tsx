'use server';

import { IFestivalListData } from '@/types/festival/api';
import { IHomeProps } from './client-page';
import Home from './client-page';

const fetchFestivalListData = async (): Promise<IHomeProps> => {
  const page = 1; // 첫 페이지 설정
  const limit = 15; // 한 페이지당 데이터 양
  console.log('1 fetchFestivalListData 시작');

  try {
    // 환경변수 체크
    const backHost = process.env.NEXT_PUBLIC_BACK_HOST;
    const backLocation = process.env.NEXT_PUBLIC_BACK_HOST_LOCATION;

    if (!backHost || !backLocation) {
      throw new Error('환경 변수가 설정되지 않았습니다.');
    }

    // fetch 옵션 추가
    const res = await fetch(`${backHost}${backLocation}?page=${page}&limit=${limit}`, {
      next: { revalidate: 0 }, // 캐시 비활성화
    });

    // 데이터 받기 실패
    if (!res.ok) {
      throw new Error(`전체 축제 일정을 불러올 수 없습니다 status: ${res.status}`);
    }

    // 데이터 파싱
    /**
     * data =  [{}, {}, {} ...]
     */
    const data: IFestivalListData[] = await res.json();

    return {
      success: true,
      message: '',
      events: data,
    };
  } catch (error) {
    // 에러 발생 시 에러 메세지 반환
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
        events: [],
      };
    }

    // 알 수 없는 에러 발생 시 에러 메세지 반환
    return {
      success: false,
      message: '알 수 없는 에러가 발생했습니다.',
      events: [],
    };
  }
};

/**
 * 홈 페이지
 * @param events
 * @description 축제 이벤트 15개로 시작해서 무한 스크롤 추가로 불러온다
 */
export default async function HomeServer() {
  const initialEvents = await fetchFestivalListData();

  return <Home {...initialEvents} />;
}
