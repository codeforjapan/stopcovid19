<!--マップコンポーネント-->
<template>
  <div class="mapPane">
    <!--マップ表示-->
    <div id="map" />
  </div>
</template>

<script>
  // Ajax通信ライブラリ
  import axios from 'axios'
  // Leafletを読み込み
  import L from 'leaflet'

  // デフォルトマーカーアイコン設定
  delete L.Icon.Default.prototype._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })

  export default {
    name: 'MapPane',
    data: function () {
      return {
        map: null,
        tileLayer: null,
        area: null,
      }
    },
    mounted: function () {
      // マップオブジェクト生成
      this.mapCreate()
    },
    methods: {
      // マップオブジェクト生成
      mapCreate: function () {
        // OSM
        const layerOsm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: 'map data &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        })
        // 地理院タイル
        const layerGsi = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
          attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
        })
        // 地理院タイル(淡色)
        const layerGsiPale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
          attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>',
        })
        // 地理院タイル(オルソ)
        const layerGsiOrt = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/ort/{z}/{x}/{y}.jpg', {
          attribution: '<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank">国土地理院</a>',
        })

        // MAP読み込み
        const map = L.map('map', {
          center: [35.981, 139.543],
          zoom: 4,
          zoomControl: true,
          layers: [layerOsm],
        })

        // 背景レイヤ
        const MapBaseLayer = {
          OpenStreetMap: layerOsm,
          地理院地図: layerGsi,
          '地理院地図(淡色)': layerGsiPale,
          '地理院地図(オルソ)': layerGsiOrt,
        }

        // レイヤ設定
        L.control.layers(
          MapBaseLayer,
          null,
        ).addTo(map)

        // geojson読み込み
        axios.get('/data/area.geojson').then(function (response) {
          this.area = response.data
          // console.log(this.area)
          var geojson = L.geoJson(this.area, {
            style: function (feature) {
              var status = feature.properties.status
              var style = null
              if (status === 1) {
                style = {
                  color: '#477AC2',
                  weight: 1,
                  opacity: 1.0,
                  fillColor: '#477AC2',
                  fillOpacity: 0.6,
                }
              } else if (status === 2) {
                style = {
                  color: '#448D40',
                  weight: 1,
                  opacity: 1.0,
                  fillColor: '#448D40',
                  fillOpacity: 0.6,
                }
              } else {
                style = {
                  color: '#808080',
                  weight: 1,
                  opacity: 1.0,
                  fillColor: '#E8E6E0',
                  fillOpacity: 0.4,
                }
              }
              return style
            },
            onEachFeature: function (feature, layer) {
              // var field = '<a href="' + feature.properties.url + '" target="_blank">' + feature.properties.name + '</a>'
              var field = feature.properties.name
              layer.bindPopup(field)
            },
          })
          geojson.addTo(map)
        }.bind(this)).catch(function (e) {
          // console.error(e)
        })

        /* Legend specific */
        var legend = L.control({ position: 'bottomleft' })
        legend.onAdd = function (map) {
          var div = L.DomUtil.create('div', 'legend')
          div.innerHTML += '<h4>ステータス</h4>'
          div.innerHTML += '<i style="background: #477AC2"></i><span>リリース</span><br>'
          div.innerHTML += '<i style="background: #448D40"></i><span>開発中</span><br>'
          div.innerHTML += '<i style="background: #E6E696"></i><span>検討中</span><br>'
          div.innerHTML += '<i style="background: #E8E6E0"></i><span>なし</span><br>'
          return div
        }
        legend.addTo(map)
      },
    },
  }
</script>

<style scoped>
  /* ローカルスタイル */
  /*マップサイズ*/
  #map {
    z-index: 0;
    height: 600px;
    text-align: left;
  }
</style>

<style>
  /* グローバルスタイル */
  .legend {
    padding: 6px 8px;
    font: 14px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255, 255, 255, 0.8);
    /*box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);*/
    /*border-radius: 5px;*/
    line-height: 24px;
    color: #555;
  }
  .legend h4 {
    text-align: center;
    font-size: 16px;
    margin: 2px 12px 8px;
    color: #777;
  }
  .legend span {
    position: relative;
    bottom: 3px;
  }
  .legend i {
    width: 18px;
    height: 18px;
    float: left;
    margin: 0 8px 0 0;
    opacity: 0.7;
  }
  .legend i.icon {
    background-size: 18px;
    background-color: rgba(255, 255, 255, 1);
  }
</style>
