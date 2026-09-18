const data = [
  ['n(10)','n(2)','max']
];
const N = 5;
for(let i = 2 ** (N - 1);i <= 2 ** N - 1;i++){
  data.push([i,i.toString(2),max(i)]);
}
function max(n){
  let a = n;
  let max = n;
  while(a > 1){
    a % 2 === 0 ? a /= 2 : a = (a * 3 + 1) / 2;
    if(a > max)max = a;
  }
  return max;
}

const table = document.createElement('table');
table.border = '1';
table.id = 'table';
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
/*
document.querySelector('#btn').addEventListener('click', async () => {
  try {
    // ボタンを押したタイミングでライブラリをロード
    //await loadHtml2Canvas();
    
    const target = document.querySelector('#table');
    
    // 画像化を実行
    html2canvas(target).then(canvas => {
      // 連続で押したときのために、前回の結果をクリア
      document.querySelector('#result').innerHTML = '';
      
      // Canvasをimg要素にして画面に表示する
      const imgData = canvas.toDataURL('image/png');
      const img = new Image();
      img.src = imgData;
      
      document.querySelector('#result').append(img);
    });
  } catch (error) {
    console.error(error);
    alert('画像の生成に失敗しました。');
  }
});
*/
