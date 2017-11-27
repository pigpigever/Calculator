<template>
  <div class="view">
    <p>{{viewValue}}</p>
  </div>
</template>

<script>
  export default {
    name: 'view',
    props: ['viewValue'],
    computed: {
      isNumber: function () {
        var viewValue = Number(this.viewValue)
        if (Number.isInteger(viewValue)) {
          return true
        }
      }
    }
  }

</script>

<style>
  .view {
    height: 56px;
    padding-right: 5px;
    line-height: 56px;
    text-align: right;
    border: 1px solid #d8dce5;
    border-radius: 5px;
  }

  .view>p {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 24px;
  }

  @keyframes zoom {
    0% {
      transform: scale(.2);
      opacity: 1;
    }

    70% {
      transform: scale(1);
    }

    100% {
      opacity: 0;
    }
  }

</style>
