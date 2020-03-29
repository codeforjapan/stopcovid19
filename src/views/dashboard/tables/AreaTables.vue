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
      news_title: 'StopCovid19 全国版の地域一覧',
      news_note: '東京都 新型コロナウイルス感染症対策サイトの<a href="https://github.com/tokyo-metropolitan-gov/covid19">オープンソースコード</a>を活用した、' +
        '新型コロナウイルス感染症対策サイトが派生されています。<br>' +
        '各都道府県のサイトを表でまとめています。',
    }),
  }
</script>
