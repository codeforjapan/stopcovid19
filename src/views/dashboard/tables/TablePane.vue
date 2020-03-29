<!--テーブルコンポーネント-->
<template>
  <div class="tablePane">
    <v-data-table
      dense
      :headers="headers"
      :items="areas"
      :items-per-page="itemsPerPage"
      item-key="code"
      class="elevation-1"
      multi-sort
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
  </div>
</template>

<script>
  // Ajax通信ライブラリ
  import axios from 'axios'
  import DATA from '../../../../public/data/data.json'

  export default {
    name: 'TablePane',
    data: () => ({
      areas: DATA,
      itemsPerPage: 60,
      headers: [
        { text: '状態', sortable: true, value: 'status' },
        { text: '都道府県', sortable: true, value: 'prefecture' },
        { text: '市区町村', sortable: true, value: 'city' },
        { text: '運営者', sortable: true, value: 'team' },
        { text: 'URL', sortable: true, value: 'production' },
      ],
    }),
    mounted: function () {
      // テーブルオブジェクト生成
      // this.tableCreate()
    },
    methods: {
      // テーブルオブジェクト生成
      tableCreate: function () {
        axios.get('/data/data.json').then(function (response) {
          this.area = response.data
          // console.log(this.area)
        }.bind(this)).catch(function (e) {
          // console.error(e)
        })
      },
    },
  }
</script>

<style scoped>
  /* ローカルスタイル */
</style>

<style>
  /* グローバルスタイル */
</style>
