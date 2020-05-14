import {getMultidata,getGoodsData} from '../../services/home'
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    recommend:[],
    index:0,
    goods:{
      'new':{page:0,list:[]},
      'pop':{page:0,list:[]},
      'sell':{page:0,list:[]}
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页轮播图推荐数据
    this._getMultiData()
    // 获取商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  // 获取首页轮播图推荐数据
  _getMultiData(){
    getMultidata().then(res => {
      //取出数据
      const banner = res.data.data.banner.list;
      const recommend = res.data.data.recommend.list;
      this.setData({
        banner,
        recommend
      })
    })
  },
// 获取商品数据
  _getGoodsData(type){
    // 获取页码
    const page = this.data.goods[type].page + 1;
    console.log(page)
    // 发送请求
    getGoodsData('pop',page).then(res => {
      console.log(res)
      // 取出数据
      const list = res.data.data.list;
      // 存入数据
      const oldList = this.data.goods[type].list.push(...list)
      const typeKey = `goods.${type}.list`
      const pageKey = `goods.${type}.page`
      this.setData({
        [typeKey]: oldList,
        [pageKey]:page + 1
      })
    })
  },

  // 点击tabbar
  tabbar_click(e){
    console.log(e)
    this.setData({
      index:e.detail
    })
  }
})