<template>
  <div id="app">
    <h1>JavaScript Calculator</h1>
    <p>Dont divided zero</p>
    <el-row>
      <el-col :span="5" :offset="2">
        <i-button button-type="number" value="C" />
      </el-col>
      <el-col :span="13" :offset="1">
        <i-view :view-value="result" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="2">
        <i-button button-type="number" value="7" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="8" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="9" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="+" @show="showValue" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="2">
        <i-button button-type="number" value="4" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="5" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="6" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="-" @show="showValue" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="2">
        <i-button button-type="number" value="1" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="2" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="3" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="*" @show="showValue" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="5" :offset="2">
        <i-button button-type="number" value="0" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="." @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="=" @show="showValue" />
      </el-col>
      <el-col :span="5">
        <i-button button-type="number" value="/" @show="showValue" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import iButton from './components/i-button'
  import viewer from './components/i-view'
  import store from './store'
  export default {
    name: 'app',
    store,
    data: function () {
      return {
        view: 0
      }
    },
    computed: {
      result: function () {
        if (this.$store.getters.getSecond || this.$store.getters.getFirst) {
          return this.$store.getters.getSecond || this.$store.getters.getFirst
        }

        return 0
      }
    },
    methods: {
      showValue: function (value) {
        return value
      }
    },
    components: {
      'i-button': iButton,
      'i-view': viewer
    }
  }

</script>

<style>
  #app {
    width: 400px;
    height: auto;
    margin: 60px auto 0 auto;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #app>h1 {
    margin: 0;
    font-weight: 300;
    color: #464c5b
  }

  .el-button {
    width: 56px;
    height: 56px;
  }

  .el-row {
    margin: 20px 0;
  }

</style>
