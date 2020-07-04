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
        {{ update_title }}{{ update_date }}<br><br>
        <span v-html="news_note" />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6">
        <MapPane />
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6">
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
        update_title: '最終更新：',
        update_date: '2020-07-04 16:11',
        news_note: '東京都の<a href="https://github.com/tokyo-metropolitan-gov/covid19">オープンソース</a>' +
          'を活用した新型コロナウイルス感染症対策サイトの各都道府県のサイトをまとめています。',
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
