<template>
  <el-button size="medium" @click="onClick">{{value}}</el-button>
</template>

<script>
  export default {
    name: "i-button",
    props: ['buttonType', 'value'],
    methods: {

      /**
       * @param 无参数
       * 判断当前输入的值是否为数字
       * 为数字：1、判断当前有无运算符，无则存入first，有则存入second
       * 为运算符：1、为'+','-','*','/'之一则设置ops为当前值并清空result
       *          2、为'='则先清空ops
       * 每次按下数字键则调用setView函数，父组件监听其变化，界面显示对应数字                                
       */
      onClick: function () {
        var first = this.$store.getters.getFirst
        var second = this.$store.getters.getSecond
        var result = this.$store.getters.getResult
        var ops = this.$store.getters.getOps

        var value = Number(this.value)
        if (Number.isInteger(value) && !result) {
          if (!ops) {
            first = (first * 10 + value) > 99999999999999 ? first : (first * 10 + value) //拼接两个连续的数字
            this.$store.commit('setFirst', first)
            this.$store.commit('setView', first)
          } else {
            second = (second * 10 + value) > 99999999999999 ? second : (second * 10 + value) //拼接两个连续的数字
            this.$store.commit('setSecond', second)
            this.$store.commit('setView', second)
          }

        } else if (!Number.isInteger(value)) { //输入的是运算符
          switch (this.value) {
            case '+':
            case '-':
            case '*':
            case '/':
              this.$store.commit('setOps', this.value)
              this.$store.commit('setResult', 0)
              break
            case '=': //按下等号
              this.$store.commit('setOps', '')
              switch (ops) {
                case '+':
                  this.$store.commit('setResult', first + second)
                  break
                case '-':
                  this.$store.commit('setResult', first - second)
                  break
                case '*':
                  this.$store.commit('setResult', first * second)
                  break
                case '/':
                  this.$store.commit('setResult', first / second)
                  break
                default:
                  break
              }
              this.$store.commit('setFirst', this.$store.getters.getResult)
              this.$store.commit('setView', this.$store.getters.getResult)
              this.$store.commit('setSecond', 0)
              break
            default: //按下清除键
              this.$store.commit('clear')
              break
          }
        }

      }
    }
  }

</script>

<style>
  .el-button:focus {
    color: black;
    border-color: #d8dce5;
    background: transparent;
  }

</style>
