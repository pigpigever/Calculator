<template>
  <el-button type="" @click="onClick">{{value}}</el-button>
</template>

<script>
  export default {
    name: "i-button",
    props: ['buttonType', 'value'],
    methods: {
      onClick: function () {
        var first = this.$store.getters.getFirst
        var second = this.$store.getters.getSecond
        var result = this.$store.getters.getResult
        var ops = this.$store.getters.getOps

        var value = Number(this.value)
        if (Number.isInteger(value) && !result) {
          if (!ops) {
            first = first * 10 + value //拼接两个连续的数字
            this.$store.commit('setFirst', first)
            console.log(`first:${first}`)
          } else {
            var second = second * 10 + value //拼接两个连续的数字
            this.$store.commit('setSecond', second)
            console.log(`second:${second}`)
          }

        } else { //输入的是运算符
          console.log(this.value)
          switch (this.value) {
            case '+':
            case '-':
            case '*':
            case '/':
              this.$store.commit('setOps', this.value)
              this.$store.commit('setResult', 0)
              console.log(`ss first:${this.$store.getters.getFirst}`)
              break
            case '=':
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
              this.$store.commit('setSecond', 0)
              break
            default:
              this.$store.commit('clear')
              break
          }
        }

      }
    }
  }

</script>
