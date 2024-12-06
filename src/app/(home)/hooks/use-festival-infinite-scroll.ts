import { IFestivalListData } from '@/types/festival/api';
import { useCallback, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useFestivalInfiniteScroll = (initialData: IFestivalListData[]) => {
  // 데이터 세팅
  const [data, setData] = useState(initialData);
  const [page, setPage] = useState<number>(2);
  const [isLoading, setIsLoading] = useState(false);

  const loadMoreData = useCallback(async () => {
    // 로딩 중일 때는 데이터 로딩을 하지 않는다.
    if (isLoading) return;

    // 로딩 상태 변경
    setIsLoading(true);

    // 요청할 데이터 수
    const limit = 15;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_HOST}${process.env.NEXT_PUBLIC_BACK_HOST_LOCATION}?page=${page}&limit=${limit}`
      );
      const moreData = await res.json();
      // 기존 데이터 세팅 변경 moreData의 festivals만 선택해서 사용
      setData((currentData) => [...currentData, ...moreData]);

      // 페이지 변경
      setPage((currentPage) => currentPage + 1);
    } catch (error) {
      console.log('error', error);
    } finally {
      // 로딩 상태 변경
      setIsLoading(false);
    }
  }, [page, isLoading]);

  /** 감시 박스를 보이면 데이터를 로딩한다. */
  const { ref } = useInView({
    threshold: 1.0,
    onChange: (inView) => {
      if (inView) {
        loadMoreData(); // 데이터 로딩
      }
    },
  });

  return { data, page, isLoading, setData, setPage, setIsLoading, ref };
};
