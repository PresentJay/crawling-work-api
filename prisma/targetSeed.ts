import { PrismaClient } from '@prisma/client';
import * as xlsx from '../shared/xlsx';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const xlsxContexts = await xlsx.ToArray('prisma/최종 오리지널 1천개');

  xlsxContexts.forEach(async (row) => {
    const PID = row['PID'];
    const url = row['url'];
    let category;
    switch (row['장르']) {
      case '영화':
        category = 'c1';
        break;
      case '방송':
        category = 'c2';
        break;
      case '방송/영화':
        category = 'c3';
        break;
      case '웹툰':
        category = 'c4';
        break;
    }
    const language = row['제공언어정제'];
    const country = row['국가'] != '-' ? row['국가'] : '없음';
    const rank = row['최종트래픽순위'];
    try {
      await prisma.target.upsert({
        where: { pid: PID },
        update: {},
        create: {
          pid: PID,
          url: url,
          languageKorean: language,
          categoryId: category,
          countryKorean: country,
          rank: rank,
        },
      });
    } catch (err) {
      console.log(err);
      console.log(row);
    }
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
    console.log('seed targets successful.');
  });
