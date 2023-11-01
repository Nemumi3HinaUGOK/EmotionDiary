'use strict';

var chartData = {
  labels: ["喜", "怒", "悲", "驚", "嫌", "恐"],
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0], // 各項目の初期値
      backgroundColor: [
        "#ffb2ff",
        "#ffb2b2",
        "#b2b2ff",
        "#ffd8b2",
        "#a3d6cc",
        "#d8b2ff",
      ],
    },
  ],
};

var clickCounts = [0, 0, 0, 0, 0, 0];

var clickCountElements = [
  document.getElementById("count1"),
  document.getElementById("count2"),
  document.getElementById("count3"),
  document.getElementById("count4"),
  document.getElementById("count5"),
  document.getElementById("count6"),
];

// チャートを表示する要素を取得
var ctx = document.getElementById("myEmoChart").getContext("2d");

// チャートを初期化
var myEmoChart = new Chart(ctx, {
  type: "doughnut",
  data: chartData,
  options: {
    responsive: true,
  },
});

// ボタン要素を取得
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");

var totalCountElement = document.getElementById("total-count");


// ボタンタップ時の処理
button1.addEventListener("touchstart", function () {
  button1.style.borderRadius = "50%";
  button1.style.boxShadow = "0 0px 0px";
  button1.style.backgroundColor = "rgb(193, 182, 198)";
  updateChartData(0);
});

button2.addEventListener("touchstart", function () {
  button2.style.borderRadius = "50%";
  button2.style.boxShadow = "0 0px 0px";
  button2.style.backgroundColor = "rgb(193, 182, 198)";
  updateChartData(1);
});

button3.addEventListener("touchstart", function () {
  button3.style.borderRadius = "50%";
  button3.style.boxShadow = "0 0px 0px";
  button3.style.backgroundColor = "rgb(193, 182, 198)";
  updateChartData(2);
});

button4.addEventListener("touchstart", function () {
  button4.style.borderRadius = "50%";
  button4.style.boxShadow = "0 0px 0px";
  button4.style.backgroundColor = "rgb(193, 182, 198)";
  updateChartData(3);
});

button5.addEventListener("touchstart", function () {
  button5.style.borderRadius = "50%";
  button5.style.boxShadow = "0 0px 0px";
  button5.style.backgroundColor = "rgb(193, 182, 198)";
  updateChartData(4);
});

button6.addEventListener("touchstart", function () {
  button6.style.borderRadius = "50%";
  button6.style.boxShadow = "0 0px 0px";
  button6.style.backgroundColor = "rgb(193, 182, 198)";
  updateChartData(5);
});

//ボタンタップ後の処理
button1.addEventListener("touchend", function () {
  button1.style.borderRadius = "";
  button1.style.boxShadow = "";
  button1.style.backgroundColor = "";
});

button2.addEventListener("touchend", function () {
  button2.style.borderRadius = "";
  button2.style.boxShadow = "";
  button2.style.backgroundColor = "";
});

button3.addEventListener("touchend", function () {
  button3.style.borderRadius = "";
  button3.style.boxShadow = "";
  button3.style.backgroundColor = "";
});

button4.addEventListener("touchend", function () {
  button4.style.borderRadius = "";
  button4.style.boxShadow = "";
  button4.style.backgroundColor = "";
});

button5.addEventListener("touchend", function () {
  button5.style.borderRadius = "";
  button5.style.boxShadow = "";
  button5.style.backgroundColor = "";
});

button6.addEventListener("touchend", function () {
  button6.style.borderRadius = "";
  button6.style.boxShadow = "";
  button6.style.backgroundColor = "";
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

var lastTouchEnd = 0;
document.addEventListener("touchend", function (event) {
  var now = new Date().getTime();
  if (now - lastTouchEnd <= 300) {
    event.preventDefault();
  }
  lastTouchEnd = now;
});

var today = new Date();
var year = today.getFullYear(); // 年
var month = today.getMonth() + 1; // 月（0から11の値なので+1する）
var day = today.getDate(); // 日

var dateDisplay = document.getElementById("date-display");

// 日付を表示
dateDisplay.textContent =  year + "." + month + "." + day;
