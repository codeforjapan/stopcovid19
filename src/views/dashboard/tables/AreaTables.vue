<template>
  <v-container
    id="area-tables"
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
      <v-col cols="12">
        <TablePane />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // テーブルコンポーネント読み込み
  import TablePane from './TablePane.vue'

  export default {
    name: 'AreaTables',
    components: {
      TablePane,
    },
    data: () => ({
      news_title: 'StopCovid19 全国版の地域詳細一覧',
      update_title: '最終更新：',
      update_date: '2020-04-08 14:34',
      news_note: '東京都の<a href="https://github.com/tokyo-metropolitan-gov/covid19">オープンソース</a>' +
        'を活用した新型コロナウイルス感染症対策サイトの各都道府県のサイトをまとめています。',
    }),
  }
</script>
