// components/w-tabbar/w-tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    item_click(e){
      let index = e.currentTarget.dataset.index
      this.setData({
        currentIndex:index
      })
      console.log(index)
      this.triggerEvent('item_click', index)
    }
  }
})
