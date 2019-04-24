<template>
  <div class="tabs-demo">
    <ButtonGroup style='margin-bottom:10px;'>
      <Button @click="changePosition(item)" v-for="(item, index) in poss" :key="index">{{item}}</Button>
    </ButtonGroup>
    <ButtonGroup style='margin-bottom:10px;'>
      <Button @click="changeOffset(index)" type="primary" v-for="(item, index) in moreBtns" :key="index" :icon="item"></Button>
    </ButtonGroup>
    <ButtonGroup style='margin-bottom:10px;'>
      <Button @click="addItem(item)">增加</Button>
    </ButtonGroup>
    <ButtonGroup style='margin-bottom:10px;'>
      <Button @click="changeActiveTab(index)" v-for="(item, index) in changeActive" :key="index">{{item}}</Button>
      <span>切到指定的tab:</span>
      <Input v-model='activeTab' style="width: 80px" placeholder="输入指定tab id"/>
    </ButtonGroup>
    <div style="height:300px;width:100%;position:relative">
      <tabs :data="tabsData" :tab-position="position" closable @on-active-tab-change="onChangeActive" ref="tabs" :active-name="activeTab"/>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tabsData:[],
      poss:['top','bottom','left','right'],
      moreBtns: ['ios-skip-backward', 'ios-skip-forward'],
      changeActive: ['切回选中的tab'],
      position: 'top',
      activeTab: ''
    }
  },
  methods: {
    changePosition(pos){
      this.position = pos
    },
    changeOffset(index){
      if(index === 0){
        this.$refs.tabs.scrollPrev()
      }else{
        this.$refs.tabs.scrollNext()
      }
    },
    addItem(){
      this.tabsData.push({id: (this.tabsData.length+1).toString(), text:this.tabsData.length+1})
      this.activeTab = this.tabsData.length.toString()
    },
    changeActiveTab(index){
      this.$refs.tabs.scrollToActiveTab()
    },
    onChangeActive(id){
      this.activeTab = id
    }
  },
  mounted(){
    for(let i = 1; i<50; i++){
      this.tabsData.push({id: i.toString(), text: i})
    }
  }
}
</script>
<style scoped>
.tabs-demo{
  width: 800px;
  height: 600px;
  margin-left: 200px;
  margin-top: 50px;
  overflow: hidden;
}
</style>

