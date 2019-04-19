<template>
  <tabs :data="tabsData"/>
</template>
<script>
import tabs from './tabs'
export default {
  data(){
    return{
      tabsData:[]
    }
  },
  mounted(){
    for(let i = 1; i<50; i++){
      this.tabsData.push({text: i})
    }
  }
}
</script>
<style scoped>

</style>

