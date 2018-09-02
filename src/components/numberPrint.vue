<template>
  <div class="hello">
    <h1>打印1-100</h1>
    <ul>
        <li v-for="(item,index) in numbers" :key="index">
            {{item}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NumberPrint',
  data () {
    return {
      numbers: [],
      count:100
    }
  },
  created:function(){
      this.printNum();
  },
  methods: {
      printNum:function(){
          for(let i = 0;i<this.count;i++){
              this.numbers.push(i+1);
          }

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
