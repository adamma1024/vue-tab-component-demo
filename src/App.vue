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
      <tabs :data="tabsData" 
      :tab-position="position" 
      closable 
      @on-click="onClick" 
      ref="tabs"
      type="card"
      :active-name="activeTab"
      @on-tab-remove="removeTab"/>
    </div>
    <div style="height:300px;width:100%;position:relative">
      <tabs :data="tabsData" 
      :tab-position="position" 
      closable 
      @on-click="onClick" 
      ref="tabs1"
      type="line"
      :active-name="activeTab"
      @on-tab-remove="removeTab"/>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tabsData:[],
      poss:['top','bottom','left','right'],
      moreBtns: ['ios-skip-backward-outline', 'ios-skip-backward', 'ios-skip-forward', 'ios-skip-forward-outline'],
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
      switch (index) {
        case 0 :
          this.$refs.tabs.goBegin()
          break;
        case 1 :
          this.$refs.tabs.scrollPrev()
          break;
        case 2 :
          this.$refs.tabs.scrollNext()
          break;
        case 3 :
          this.$refs.tabs.goEnd()
          break;
      }
    },
    changeActiveTab(index){
      this.$refs.tabs.scrollToActiveTab()
    },
    onClick(id){
      this.activeTab = id
    },
    addItem(){
      this.tabsData.push({id: (this.tabsData.length+1).toString(), text:this.tabsData.length+1})
      this.activeTab = this.tabsData.length.toString()
    },
    removeTab(id){
      let index = this.tabsData.findIndex(item => item.id === id)
      this.$delete(this.tabsData, index)
    }
  },
  mounted(){
    for(let i = 1; i<500; i++){
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

