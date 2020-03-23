<template>
  <v-container
    id="area-maps"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        {{ news_title}}
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div>
          {{ map_title }}
        </div>
        <div id="map" />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  // Mapbox GL JSを読み込み
  import mapboxgl from 'mapbox-gl'
  import MapboxLanguage from '@mapbox/mapbox-gl-language'

  export default {
    name: 'AreaMap',
    data: function () {
      return {
        news_title: 'お知らせ: 東京都 新型コロナウイルス感染症対策サイト の派生サイトのマップです',
        map_title: '地域展開マップ',
      }
    },
    mounted: function () {
      // マップオブジェクト生成
      this.mapCreate()
    },
    methods: {
      // マップオブジェクト生成 Your Access Token
      mapCreate: function () {
        mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESSTOKEN
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v10',
          center: [139.767, 35.681],
          zoom: 4,
        })
        // コントロール関係表示
        map.addControl(new mapboxgl.NavigationControl())

        // 日本語表記
        // mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js')
        map.addControl(new MapboxLanguage())

        // GeoJSON Load
        map.on('load', function () {
          map.addSource('japan_map', {
            type: 'geojson',
            data: '/data/area.geojson',
          })

          map.addLayer({
            id: 'japan_all',
            type: 'line',
            source: 'japan_map',
            layout: {},
            paint: {
              'line-color': '#088',
              'line-width': 1.0,
            },
          })

          // リリース
          map.addLayer({
            id: 'area_map_1',
            type: 'fill',
            source: 'japan_map',
            layout: {},
            paint: {
              'fill-outline-color': '#f00',
              'fill-color': '#00f',
              'fill-opacity': 0.5,
            },
            filter: ['==', 'status', 1],
          })

          // 開発中
          map.addLayer({
            id: 'area_map_2',
            type: 'fill',
            source: 'japan_map',
            layout: {},
            paint: {
              'fill-outline-color': '#FF4F02',
              'fill-color': '#FF4F02',
              'fill-opacity': 0.5,
            },
            filter: ['==', 'status', 2],
          })

          // map.setFilter('area_map', ['==', 'pref', 1]);
        })
      },
    },
  }
</script>

<style scoped>
  #map {
    z-index: 0;
    width: 100%;
    height: 800px;
  }
</style>
