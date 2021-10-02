<template>
  <div>
    <v-container>
      <br>
      <h2>実務経験</h2>
      <hr>
      <br>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="2" shaped height="200">
            <v-card-title>10万人規模の共済システムの改修</v-card-title>
            <v-card-text align="left">
              ・期間：2021/7より現在<br>
              ・担当：詳細設計とコーディングやテスト全般<br>
              ・使用技術：Java(Struts)、SQL(その他RDBMS)<br>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <br>
      <h2>個人開発</h2>
      <hr>
      <br>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="2" shaped height="200">
            <v-card-title>CDDB</v-card-title>
            <v-card-text align="left">
              使用技術：JavaScript(Vue.js)、Python<br>
              インフラ：AWS(API Gateway、Lambda、DynamoDB、Amplify)<br>
              <fa icon="github"/>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="2" shaped height="200">
            <v-card-title>ポケモン対戦シュミレータ</v-card-title>
            <v-card-text align="left">
              使用技術：Java<br>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "works"
}
</script>

<style scoped>

</style>