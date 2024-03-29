// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { id: 'PresentJay' },
    update: {},
    create: {
      id: 'PresentJay',
      name: '정현재',
    },
  });
  await prisma.user.upsert({
    where: { id: 'jeonjw95' },
    update: {},
    create: {
      id: 'jeonjw95',
      name: '전진우',
    },
  });
  await prisma.user.upsert({
    where: { id: 'devdynam0507' },
    update: {},
    create: {
      id: 'devdynam0507',
      name: '남대영',
    },
  });
  await prisma.user.upsert({
    where: { id: 'hoya-1004' },
    update: {},
    create: {
      id: 'hoya-1004',
      name: '조성호',
    },
  });
  await prisma.user.upsert({
    where: { id: 'subsub-e' },
    update: {},
    create: {
      id: 'subsub-e',
      name: '이승섭',
    },
  });
  await prisma.user.upsert({
    where: { id: 'serepina' },
    update: {},
    create: {
      id: 'serepina',
      name: '이주빈',
    },
  });

  await prisma.crawlingMetadataTemplate.upsert({
    where: { id: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a' },
    update: {},
    create: {
      id: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      name: '클라이언트 요구사항 v1',
      description:
        '한국저작권협회 클라이언트 요구사항이 반영된 크롤링 메타데이터 템플릿입니다.',
    },
  });

  await prisma.crawlingMetadataColumn.createMany({
    data: [
      {
        id: '0be514de-7e04-43ee-b563-8f0ae438921f',
        name: 'site_title',
        description: '번역 전 원문 타이틀입니다.',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: '1003e6d1-3425-492c-8a1c-2036a85885d3',
        name: 'sub_title',
        description: '부제',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: '154898f3-10f8-4ddd-8cb9-0d158d591577',
        name: 'con_gubun',
        description:
          '장르 구분: 공백 없이 콤마(,)로 구분하여 장르 나열, 사이트에 명시된 것을 나열합니다.',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: '34cd304b-7ce2-4342-9415-3a9a25703029',
        name: 'con_country',
        description: '사이트에 명시되어 있는 국가정보를 가져옵니다.',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: '37571d34-c9cf-4a4b-afeb-16a04424ad7f',
        name: 'con_date',
        description:
          '저작물 생성기준일입니다. 영화 개봉일 등, 저작권상 생성일 (사이트상 확인가능한 것으로)',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: '54bbacc0-baf8-4841-ade8-fd2d084dde52',
        name: 'con_contents',
        description: '줄거리, 설명, 시놉시스 등',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: '84a90729-83c8-4412-8d73-b1d45728a4b1',
        name: 'con_views',
        description: '숫자만 남도록 걷어내야 합니다.',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: '940f8c9a-38e3-448e-8b4c-2a0d3b19c4c3',
        name: 'con_director',
        description:
          '감독, 작가, 등 저작물에 영향을 끼친 사람을 모두 공백 없는 콤마로 정리합니다.',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: 'acad16af-26b4-474f-b8b0-d72954ca82ac',
        name: 'con_translator',
        description:
          '저작물의 번역에 영향을 끼친 사람을 모두 공백 없는 콤마로 정리합니다.',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
      {
        id: 'c97d7401-fb23-46e8-97fa-e0e61a233bbf',
        name: 'con_actors',
        description:
          '저작물에 등장하는 사람을 모두 공백 없는 콤마로 정리합니다.',
        crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.work.upsert({
    where: { id: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b' },
    update: {},
    create: {
      id: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b',
      title: '한국리서치 2022 1차 크롤링',
      objectCount: 1000,
      avgAccuracyThreshold: 95,
      failureThreshold: 90,
      crawlingMetadataTemplateId: 'c65f6d5f-e35d-4e71-bdbf-028edf5c722a',
    },
  });

  await prisma.userWork.createMany({
    data: [
      {
        id: '09988522-418b-40cd-a59f-f0db58abddba',
        userId: 'PresentJay',
        workId: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b',
      },
      {
        id: '45905ce9-9b96-4805-bff9-27b6a4537873',
        userId: 'jeonjw95',
        workId: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b',
      },
      {
        id: '551ee7de-37b7-42cf-8ddc-f4c7f6d1e950',
        userId: 'devdynam0507',
        workId: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b',
      },
      {
        id: '9ffde0eb-4852-4e94-aa37-9b40066251ff',
        userId: 'hoya-1004',
        workId: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b',
      },
      {
        id: 'c873dbd2-57fe-4438-9d89-7ce8e855b288',
        userId: 'subsub-e',
        workId: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b',
      },
      {
        id: 'f215e3a0-7bd7-47b3-a40d-88f7c77acdc7',
        userId: 'serepina',
        workId: 'a04717ca-f588-4a2c-bdb3-3c09b8babb4b',
      },
    ],
    skipDuplicates: true,
  });

  await prisma.category.createMany({
    data: [
      { id: 'c1', korean: '영화' },
      { id: 'c2', korean: '방송' },
      { id: 'c3', korean: '영화/방송' },
      { id: 'c4', korean: '웹툰' },
    ],
    skipDuplicates: true,
  });

  await prisma.language.createMany({
    data: [
      { korean: '없음' },
      { korean: '덴마크어' },
      { korean: '독일어' },
      { korean: '러시아어' },
      { korean: '루간다어' },
      { korean: '루마니아어' },
      { korean: '말레이어' },
      { korean: '미얀마어' },
      { korean: '뱅골어' },
      { korean: '베트남어' },
      { korean: '불가리아어' },
      { korean: '스페인어' },
      { korean: '아랍어' },
      { korean: '아르메니아어' },
      { korean: '영어' },
      { korean: '우르두어' },
      { korean: '우크라이나어' },
      { korean: '이탈리아어' },
      { korean: '인도네시아어' },
      { korean: '일본어' },
      { korean: '중국어' },
      { korean: '카자흐어' },
      { korean: '한국어' },
      { korean: '헝가리어' },
      { korean: '타갈로그어' },
      { korean: '태국어' },
      { korean: '터키어' },
      { korean: '페르시아어' },
      { korean: '포르투갈어' },
      { korean: '프랑스어' },
      { korean: '핀란드어' },
    ],
    skipDuplicates: true,
  });

  await prisma.country.createMany({
    data: [
      { korean: '없음' },
      { korean: '베네수엘라' },
      { korean: '베트남' },
      { korean: '벨기에' },
      { korean: '벨라루스' },
      { korean: '볼리비아' },
      { korean: '불가리아' },
      { korean: '브라질' },
      { korean: '리투아니아' },
      { korean: '말레이시아' },
      { korean: '멕시코' },
      { korean: '모로코' },
      { korean: '미국' },
      { korean: '미얀마' },
      { korean: '방글라데시' },
      { korean: '엘살바도르' },
      { korean: '영국' },
      { korean: '오스트레일리아' },
      { korean: '우간다' },
      { korean: '우루과이' },
      { korean: '우즈베키스탄' },
      { korean: '우크라이나' },
      { korean: '사우디아라비아' },
      { korean: '세르비아' },
      { korean: '스위스' },
      { korean: '스페인' },
      { korean: '아르헨티나' },
      { korean: '알제리' },
      { korean: '에스토니아' },
      { korean: '조지아' },
      { korean: '중국' },
      { korean: '체코' },
      { korean: '칠레' },
      { korean: '카자흐스탄' },
      { korean: '캄보디아' },
      { korean: '캐나다' },
      { korean: '이라크' },
      { korean: '이란' },
      { korean: '이집트' },
      { korean: '이탈리아' },
      { korean: '인도' },
      { korean: '인도네시아' },
      { korean: '일본' },
      { korean: '콜롬비아' },
      { korean: '태국' },
      { korean: '터키' },
      { korean: '파키스탄' },
      { korean: '팔레스타인' },
      { korean: '페루' },
      { korean: '포르투갈' },
      { korean: '폴란드' },
      { korean: '프랑스' },
      { korean: '필리핀' },
      { korean: '한국' },
      { korean: '헝가리' },
      { korean: '홍콩' },
      { korean: '그리스' },
      { korean: '나이지리아' },
      { korean: '대만' },
      { korean: '독일' },
      { korean: '러시아' },
      { korean: '루마니아' },
      { korean: '리비아' },
    ],
    skipDuplicates: true,
  });

  await prisma.pagingType.createMany({
    data: [
      { name: '무한스크롤 방식' },
      { name: '원버튼 방식' },
      { name: '페이지네이션' },
    ],
    skipDuplicates: true,
  });

  await prisma.ticketState.createMany({
    data: [
      { name: '정보 없음' },
      { name: '접속 가능' },
      { name: '목록 수집 가능' },
      { name: '전체 데이터 수집 가능' },
      { name: '수집 중' },
      { name: '수집 실패' },
      { name: '수집 성공' },
    ],
    skipDuplicates: true,
  });

  await prisma.dataProcessingStrategy.createMany({
    data: [
      { name: '(SINGLE) ONLY TEXT' },
      { name: '(MULTI) ONLY TEXT' },
      { name: 'TEXT JOIN WITH COMMA' },
      { name: 'REPLACE SINGLE TARGET TO EMPTY' },
      { name: 'COUNT LENGTH OF ELEMENTS' },
      { name: '(SINGLE) ONLY NUMERIC' },
      { name: '(SINGLE) SPLIT AND SELECT SOME CHOICE' },
      { name: '(MULTI) SPLIT AND SELECT AND JOIN SOME CHOICE' },
    ],
  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
