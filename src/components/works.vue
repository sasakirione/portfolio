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
            <v-card-title>某大企業の共済システムの改修</v-card-title>
            <v-card-text align="left">
              期間：2021/7より現在<br>
              担当：詳細設計とコーディングやテスト全般<br>
              使用技術：Java(Struts)、SQL(その他RDBMS)<br>
              使用業務知識：健康保険法<br>
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
          <v-card elevation="2" shaped height="250">
            <v-card-title>OctopusCDDB</v-card-title>
            <v-card-text align="left">
              持ってる音源のタグデータのバックアップをかねてAPIとクライアントのWebアプリを作成<br>
              <br>
              <hr>
              <br>
              使用技術：JavaScript(Vue.js)、Python<br>
              インフラ：AWS(API Gateway、Lambda、DynamoDB、Amplify)<br>
              <fa icon="github"/>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card elevation="2" shaped height="250">
            <v-card-title>ポケモン対戦シュミレータ</v-card-title>
            <v-card-text align="left">
              ポケモンの対戦部分のシュミレータをプレーンなJavaで作成、途中から徐々にKotlin化<br>
              <br>
              <hr>
              <br>
              使用技術：Java。Kotlin<br>
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