//* Date를 yyyy-mm-dd 데이터로 교체해준다.
export function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더함
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}