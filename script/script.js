const ctx = document.getElementById("chart").getContext("2d");
var strTime = new Date();
var labels = [
  `${strTime.getHours()}:${strTime.getMinutes()}:${strTime.getSeconds()}`,
  "+30s",
  "+30s",
  "+30s",
  "+30s",
  "+30s",
  "+30s",
  "+30s",
  "+30s",
  "+30s",
];
var data = {
  labels: labels,
  datasets: [],
};
const config = {
  type: "line",
  data,
  options: {
    // animation: false,
  },
};

var myChart = new Chart(ctx, config);

function getRandomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

function updateChartData(cpuData) {
  if (data.datasets.length == 0) {
    var ds = [];
    for (var i = 0; i < cpuData.length; i++) {
      var col = getRandomColor();
      ds.push({
        label: `P${i + 1}`,
        backgroundColor: col,
        borderColor: col,
        data: [cpuUsage(cpuData[i].usage, i)],
        borderWidth: 1
      });
    }
    data.datasets = ds;
  } else {
    for (var i = 0; i < cpuData.length; i++) {
      if (data.datasets[i].data.length > 9) {
        data.datasets[i].data.shift();
      }
      data.datasets[i].data.push(cpuUsage(cpuData[i].usage, i));
    }
  }
  myChart.update();
}

function invkUpdChart() {
  updateChartData(
    JSON.parse(document.getElementById("cpu-proc-usage").innerText)
  );
}
function calculateValue(usage) {
  return Math.floor((usage.user / usage.total) * 10000);
}
var previousCpuInfo = [];
function cpuUsage(usage, i) {
  if (previousCpuInfo[i]) {
    var oldUsage = previousCpuInfo[i];
    usedSectionWidth = Math.floor(
      ((usage.kernel + usage.user - oldUsage.kernel - oldUsage.user) /
        (usage.total - oldUsage.total)) *
        100
    );
  } else {
    usedSectionWidth = Math.floor(
      ((usage.kernel + usage.user) / usage.total) * 100
    );
  }
  previousCpuInfo[i] = usage;
  return usedSectionWidth;
}
// setInterval(function () {
//   addData(Math.floor(Math.random() * 100) + 1);
//   data.datasets[0].data.push(Math.floor(Math.random() * 100) + 1);
//   data.labels.push("+30s");
//   myChart.update();
// }, 2000);

/*
    
    {data}
    upd
    
    
    
    */

//  function getData() {
//    return Math.random();
//  }
