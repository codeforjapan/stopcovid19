<template>
  <v-container
    id="information"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <base-subheading subheading="Covid19のプロジェクトに関して" />
            <ul id="link-11">
              <li v-for="item in covid19_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="6">
        <v-card>
          <v-card-text>
            <base-subheading subheading="Code for Japanに関して" />
            <ul id="link-12">
              <li v-for="item in c4j_items" :key="item.id">
                <a
                  :href="item.url"
                  target="_blank"
                >{{ item.name }}</a>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'About',
    data: () => ({
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
      ],
    }),
  }
</script>
