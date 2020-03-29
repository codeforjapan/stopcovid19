<template>
  <v-container
    id="information"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <base-subheading subheading="Covid19のプロジェクトに関して" />
            Covid19のプロジェクトに関しては、Code for JapanのSlackにご参加ください。
            <ul id="link-1">
              <li v-for="item in items" :key="item.id">
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
      items: [
        { id: 1, name: 'Code for Japan Slack <https://cfj.slack.com/>', url: 'https://cfj.slack.com/' },
        { id: 2, name: 'covid19 開発チャンネル：#covid19', url: 'https://app.slack.com/client/T02FMV4EB/CUX3F56LF' },
        { id: 3, name: 'covid19 全国展開用チャンネル：#stopcovid19jp', url: 'https://app.slack.com/client/T02FMV4EB/CUREP6D5G' },
        { id: 4, name: 'Slackの招待', url: 'https://cfjslackin.herokuapp.com/' },
      ],
    }),
  }
</script>
