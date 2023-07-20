let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

let b = document.querySelector('button#print');
b.addEventListener('click', kensaku);

function kensaku() {
  // URL を設定
  let i = document.querySelectorAll('input[name="tosi"]');
  let id;

  for (let r of i) {
    if (r.checked) {        // r が選択されていたら
      id = r.value;
    }
  }
   
  let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/" + id + ".json"

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}

function showResult(resp) {

  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  let n = document.querySelector('span#name');
  n.textContent = "都市名:" + data.name;
  
  let max = document.querySelector('span#max');
  max.textContent = "最高気温:" + data.main.temp_max;

  let min = document.querySelector('span#min');
  min.textContent = "最低気温:" + data.main.temp_min;

  let s = document.querySelector('span#speed');
  s.textContent = "風速:" + data.wind.speed;

  let d = document.querySelector('span#deg');
  d.textContent = "風向:" + data.wind.deg;

  let h = document.querySelector('span#humidity');
  h.textContent = "湿度:" + data.main.humidity;

  let w = document.querySelector('span#description');
  w.textContent = "天気:" + data.weather[0].description;

}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

