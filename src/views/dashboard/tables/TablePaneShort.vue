<!--テーブルコンポーネント-->
<template>
  <div class="tablePaneShort">
    <v-data-table
      dense
      :headers="headers"
      :items="areas"
      :items-per-page="itemsPerPage"
      :page.sync="page"
      class="elevation-1"
      locale="ja-jp"
      loading-text="読込中"
      no-data-text="データがありません。"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <template v-slot:item.url="{ item }">
        <span v-if="item.url.length">
          <a
            :href="item.url"
            target="_blank"
          >{{ item.team }}</a>
        </span>
      </template>
    </v-data-table>
    <div class="text-center py-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
        :total-visible="totalVisible"
        circle
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      />
    </div>
  </div>
</template>

<script>
  import DATA from '../../../../public/data/data.json'

  export default {
    name: 'TablePaneShort',
    data: () => ({
      areas: DATA,
      itemsPerPage: 20,
      page: 1,
      pageCount: 0,
      totalVisible: 7,
      headers: [
        { text: '都道府県', sortable: true, value: 'prefecture' },
        { text: '市区町村', sortable: true, value: 'city' },
        { text: 'URL', sortable: true, value: 'url' },
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
