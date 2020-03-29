<template>
  <v-container
    id="area-maps"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <base-subheading>
          <h5 class="font-weight-light">
            {{ news_title }}
          </h5>
        </base-subheading>
        <span v-html="news_note" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <MapPane />
      </v-col>
      <v-col cols="6">
        <TablePaneShort />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MapPane from './MapPane.vue'
  import TablePaneShort from '../tables/TablePaneShort.vue'

  export default {
    name: 'AreaMap',
    components: {
      MapPane,
      TablePaneShort,
    },
    data: function () {
      return {
        news_title: 'StopCovid19 全国版の地域マップ',
        news_note: '東京都 新型コロナウイルス感染症対策サイトの<a href="https://github.com/tokyo-metropolitan-gov/covid19">ソースコード</a>から、' +
          '全国の自治体の新型コロナウイルス感染症対策サイトが派生されています。<br>' +
          '各都道府県のサイトをマップでまとめています。',
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
