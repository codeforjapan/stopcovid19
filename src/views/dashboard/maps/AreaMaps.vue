<template>
  <v-container
    id="area-maps"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        {{ news_title }}
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <MapPane />
      </v-col>
      <v-col cols="6">
        <v-data-table
          dense
          :headers="headers"
          :items="areas"
          item-key="prefecture"
          class="elevation-1"
          locale="ja-jp"
          loading-text="読込中"
          no-data-text="データがありません。"
        >
          <template v-slot:item.production="{ item }">
            <a
              :href="item.production"
              target="_blank"
            >{{ item.production }}</a>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import DATA from '../../../../public/data/data.json'

  // マップコンポーネント読み込み
  import MapPane from './MapPane.vue'
  export default {
    name: 'AreaMap',
    components: {
      MapPane,
    },
    data: function () {
      return {
        news_title: 'お知らせ: 東京都 新型コロナウイルス感染症対策サイト の派生サイトのマップです',
        map_title: '地域展開マップ',
        areas: DATA,
        headers: [
          { text: '都道府県', sortable: true, value: 'prefecture' },
          { text: '市区町村', sortable: true, value: 'city' },
          { text: 'URL', sortable: true, value: 'production' },
        ],
      }
    },
    mounted: function () {
    },
    methods: {
    },
  }
</script>

<style scoped>
</style>
