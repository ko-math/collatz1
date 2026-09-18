function loadHtml2Canvas() {
  return new Promise((resolve, reject) => {
    // すでに読み込まれている場合はスキップ
    if (window.html2canvas) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cloudflare.com';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('html2canvas の読み込みに失敗しました'));
    document.head.append(script);
  });
}
const data = [
  ['2','n','max']
];
const N = 4;
for(let i = 2 ** (N - 1);i <= 2 ** N - 1;i++){
  data.push([i.toString(2),i,max(i)]);
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
