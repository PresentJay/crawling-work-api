import * as XLSX from 'xlsx';

/**
 * 엑셀 파일을 array of array object로 변환합니다.
 * @param {string} filename
 * @returns
 */
export async function ToArray(filename) {
  const workbook = await XLSX.readFile(`${filename}.xlsx`);

  const sheetData = await XLSX.utils.sheet_to_json(
    workbook.Sheets[workbook.SheetNames[0]],
  );

  return sheetData;
}

/**
 * Array of Array 형식의 데이터를 받아, filename의 엑셀 파일을 생성합니다.
 * @param {[[string]]} data
 * @param {string} filename
 */
export async function save(data, filename, verbose = true) {
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet(data));
  XLSX.writeFile(workbook, `config/${filename}.xlsx`);
  if (verbose) console.log(`save data in "config/${filename}.xlsx"`);
}
