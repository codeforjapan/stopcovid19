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
            東京都の<a href="https://github.com/tokyo-metropolitan-gov/covid19">オープンソース</a>を活用した新型コロナウイルス感染症対策サイトの各都道府県のサイトをまとめています。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-text>
            <base-subheading subheading="リンク集" />
            <ul id="link-1-1">
              <li v-for="item in area_items" :key="item.id">
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
            <base-subheading subheading="東京都新型コロナウイルス対策サイト 関連サイト" />
            <ul id="link-1-2">
              <li v-for="item in tokyo_items" :key="item.id">
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
