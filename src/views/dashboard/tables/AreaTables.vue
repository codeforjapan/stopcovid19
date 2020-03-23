<template>
  <v-container
    id="area-tables"
    fluid
    tag="section"
  >
    <v-data-table
      dense
      :headers="headers"
      :items="areas"
      item-key="code"
      class="elevation-1"
      :footer-props="{
        'items-per-page-options': [10, 20, 50],
        showFirstLastPage: true,
      }"
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
  </v-container>
</template>

<script>
  import DATA from '../../../../public/data/data.json'

  export default {
    data: () => ({
      areas: DATA,
      headers: [
        {
          text: '都道府県コード',
          align: 'start',
          sortable: false,
          value: 'code',
        },
        { text: '状態', sortable: true, value: 'status' },
        { text: '都道府県', sortable: true, value: 'prefecture' },
        { text: '市区町村', sortable: true, value: 'city' },
        { text: '運営者', sortable: true, value: 'team' },
        { text: 'URL', sortable: true, value: 'production' },
      ],
    }),
  }
</script>
