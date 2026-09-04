const data = [
  [n,max]
];
const N = 7;
for(let i = 2 ** (N - 1);i <= 2 ** N - 1;i++){
  data.push([i,max(i)]);
}
function max(n){
  let a = n;
  let max = n;
  while(a > 1){
    a % 2 === 0 ? a /= 2 : a = a * 3 + 1;
    if(a > max)max = a;
  }
  return max;
}

const table = document.createElement('table');
table.border = '1';
// 行とセルの生成
data.forEach((rowData, rowIndex) => {
  const tr = document.createElement('tr');
  
  rowData.forEach(cellData => {
    // 1行目は見出し（th）、それ以外はデータ（td）にする
    const tag = (rowIndex === 0) ? 'th' : 'td';
    const cell = document.createElement(tag);
    cell.textContent = cellData;
    tr.append(cell);
  });

  table.append(tr);
});

// 指定したコンテナにテーブルを追加
document.querySelector('#content').append(table);
