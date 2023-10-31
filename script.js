'use strict';

var chartData = {
  labels: ["喜", "怒", "哀", "楽", "驚"],
  datasets: [
    {
      data: [0, 0, 0, 0, 0], // 各項目の初期値
      backgroundColor: ["#ff7fff", "#ff7f7f", "#7f7fff", "#ffff7f", "#ffbf7f"],
    },
  ],
};

var clickCounts = [0, 0, 0, 0, 0];

var clickCountElements = [
  document.getElementById("count1"),
  document.getElementById("count2"),
  document.getElementById("count3"),
  document.getElementById("count4"),
  document.getElementById("count5"),
];

// チャートを表示する要素を取得
var ctx = document.getElementById("myEmoChart").getContext("2d");

// チャートを初期化
var myEmoChart = new Chart(ctx, {
  type: "doughnut",
  data: chartData,
  options: {
    responsive: false,
  },
});

// ボタン要素を取得
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

var totalCountElement = document.getElementById("total-count");

// ボタンクリック時の処理
button1.addEventListener("click", function () {
  updateChartData(0);
});

button2.addEventListener("click", function () {
  updateChartData(1);
});

button3.addEventListener("click", function () {
  updateChartData(2);
});

button4.addEventListener("click", function () {
  updateChartData(3);
});

button5.addEventListener("click", function () {
  updateChartData(4);
});

// チャートデータを更新する関数
function updateChartData(index) {
  // 選択したボタンに対応するデータを1ずつ加算
  chartData.datasets[0].data[index]++;
  clickCounts[index]++;

  // チャートを更新
  myEmoChart.update();

  clickCountElements[index].textContent = clickCounts[index];

  // 総数を計算して表示
  var totalCount = clickCounts.reduce((a, b) => a + b, 0);
  totalCountElement.textContent = totalCount;
}

var today = new Date();
var year = today.getFullYear(); // 年
var month = today.getMonth() + 1; // 月（0から11の値なので+1する）
var day = today.getDate(); // 日

var dateDisplay = document.getElementById("date-display");

// 日付を表示
dateDisplay.textContent =  year + "." + month + "." + day;