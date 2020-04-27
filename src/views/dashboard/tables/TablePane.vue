<!--テーブルコンポーネント-->
<template>
  <div class="tablePane">
    <v-data-table
      dense
      :headers="headers"
      :items="areas"
      :items-per-page="itemsPerPage"
      class="elevation-1"
      multi-sort
      locale="ja-jp"
      loading-text="読込中"
      no-data-text="データがありません。"
    >
      <template v-slot:item.url="{ item }">
        <span v-if="item.url.length">
          <a
            :href="item.url"
            target="_blank"
          >{{ item.url }}</a>
        </span>
      </template>
      <template v-slot:item.source="{ item }">
        <span v-if="item.source.length">
          <a
            :href="item.source"
            target="_blank"
          >○</a>
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  // Ajax通信ライブラリ
  import DATA from '../../../../public/data/data.json'

  export default {
    name: 'TablePane',
    data: () => ({
      areas: DATA,
      itemsPerPage: 65,
      headers: [
        { text: '状態', sortable: true, value: 'status' },
        { text: '更新日付', sortable: true, value: 'date' },
        { text: '都道府県', sortable: true, value: 'prefecture' },
        { text: '市区町村', sortable: true, value: 'city' },
        { text: '運営者', sortable: true, value: 'team' },
        { text: 'URL', sortable: true, value: 'url' },
        { text: 'GitHub', sortable: true, value: 'source' },
      ],
    }),
  }
</script>

<style scoped>
  /* ローカルスタイル */
</style>

<style>
  /* グローバルスタイル */
</style>
