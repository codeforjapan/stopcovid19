<template>
  <v-container
    id="about"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <base-subheading subheading="当サイトについて" />
            東京都 新型コロナウイルス感染症対策サイトのソースコードから、全国の自治体の新型コロナウイルス感染症対策サイトが派生されています。
            当サイトは各都道府県のサイトについてまとめたものです。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <base-subheading subheading="リンク集" />
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

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <base-subheading subheading="ライセンス" />
            <ul id="link-2">
              <li><a href="https://www.creative-tim.com/product/vuetify-material-dashboard?ref=vtymdp-readme">
                Vuetify Material Dashboard</a> Copyright 2018 Creative Tim. <a href="https://github.com/timcreative/freebies/blob/master/LICENSE.md">MIT License</a></li>
              <li>このサイトの内容物は、<a href="https://creativecommons.org/licenses/by/4.0/deed.ja">クリエイティブ・コモンズ 表示 4.0 </a>ライセンス の下に提供されています。
                Copyright 2020 <a href="https://twitter.com/homata">@homata</a></li>
              <li>当サイトへのリンクは自由です。</li>
              <li>当サイトのソースコードはMITライセンスです。<a href="https://github.com/codeforjapan/stopcovid19">GitHubリポジトリ</a>をご確認ください。</li>
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
        { id: 1, name: '自治体実施状況とりまとめ（政府外サイト、自治体非公式サイトを含む）', url: 'https://hackmd.io/@homata/ryHz3P4BI' },
        { id: 2, name: 'Googleスプレッドシートのまとめ', url: 'https://docs.google.com/spreadsheets/d/1c50h3YtbsCiHiKOh4cyJQYL-21Vow3X7b8tRoAceVMA/' },
        { id: 3, name: '東京都新型コロナウイルス対策サイト', url: 'https://stopcovid19.metro.tokyo.lg.jp/' },
        { id: 4, name: '東京都新型コロナウイルス対策サイトリ GitHubソースコード', url: 'https://github.com/tokyo-metropolitan-gov/covid19' },
      ],
    }),
  }
</script>
