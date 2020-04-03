<template>
  <v-container
    id="information"
    fluid
    tag="section"
  >
    {{ update_title }}{{ update_date }}<br><br>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6">
        <base-material-card
          color="success"
          title="Covid19とStopcovid19のプロジェクトに関して"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <ul id="link-11">
              <li v-for="item in covid19_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6">
        <base-material-card
          color="success"
          title="Code for Japanに関して"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <ul id="link-12">
              <li v-for="item in c4j_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6">
        <base-material-card
          color="success"
          title="データ公開支援"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <ul id="link-21">
              <li v-for="item in data_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6">
        <base-material-card
          color="success"
          title="支援、その他"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <ul id="link-22">
              <li v-for="item in news_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12" md="6" lg="6">
        <base-material-card
          color="success"
          title="StopCovid19まとめサイト"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <ul id="link-1-1">
              <li v-for="item in area_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </base-material-card>
      </v-col>

      <v-col cols="12" sm="12" md="6" lg="6">
        <base-material-card
          color="success"
          title="東京都新型コロナウイルス対策サイト 関連サイト"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <ul id="link-1-2">
              <li v-for="item in tokyo_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'About',
    data: () => ({
      update_title: '最終更新：',
      update_date: '2020-04-03 13:08',
      covid19_items: [
        { id: 1, name: 'Code for Japan Slackサイト <https://cfj.slack.com/>', url: 'https://cfj.slack.com/' },
        { id: 2, name: 'covid19 開発チャンネル：#covid19', url: 'https://app.slack.com/client/T02FMV4EB/CUX3F56LF' },
        { id: 3, name: 'covid19 全国展開用チャンネル：#stopcovid19jp', url: 'https://app.slack.com/client/T02FMV4EB/CUREP6D5G' },
        { id: 4, name: 'Slackの招待', url: 'https://cfjslackin.herokuapp.com/' },
      ],
      c4j_items: [
        { id: 1, name: 'Code for Japan Webサイト', url: 'https://www.code4japan.org/' },
        { id: 2, name: 'Code for Japan Facebookページ', url: 'https://www.facebook.com/codeforjapan/' },
        { id: 3, name: 'Code for Japan Twitter', url: 'https://twitter.com/codeforJP' },
        { id: 4, name: 'シビックテックに参加する10の方法', url: 'https://note.com/kjinnouchi/n/ne6681ec83da6' },
      ],
      news_items: [
        { id: 1, name: '新型コロナウイルス対策融資・保証まとめ最新版', url: 'https://www.startuplist.jp/alliance_posts/6' },
        { id: 2, name: '市民主導のCOVID-19対策の取り組み総まとめ', url: 'https://kristinayasuda.com/posts/fighting-covid-19/' },
      ],
      data_items: [
        { id: 1, name: '新型コロナウイルス感染症対策サイトのためのデータ公開支援', url: 'https://www.code4japan.org/activity/stopcovid19' },
        { id: 2, name: '新型コロナウイルス感染症対策に関するオープンデータ項目定義書', url: 'https://docs.google.com/spreadsheets/d/1fJtqxqh_4OuUwq2LQ_WRx23fwcEB4hNL/edit#gid=1513166793' },
      ],
      area_items: [
        { id: 1, name: 'StopCovid19全国版まとめ(HackMD)', url: 'https://hackmd.io/@homata/ryHz3P4BI' },
        { id: 2, name: 'Googleスプレッドシートのまとめ', url: 'https://docs.google.com/spreadsheets/d/1c50h3YtbsCiHiKOh4cyJQYL-21Vow3X7b8tRoAceVMA/' },
      ],
      tokyo_items: [
        { id: 1, name: '東京都新型コロナウイルス対策サイト', url: 'https://stopcovid19.metro.tokyo.lg.jp/' },
        { id: 2, name: '東京都新型コロナウイルス対策サイト ソースコード (GitHub)', url: 'https://github.com/tokyo-metropolitan-gov/covid19' },
      ],
    }),
  }
</script>
