// component/search-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    keyWords: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    newList: []
  },

  observers: {
    "title,keyWords"(title, keyWords) {
      this.fn(title, keyWords)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    fn(str, value) {
      let newList = []
      for (let item of str) {
        newList.push({
          text: item,
          color: ''
        })
      }
      for (let it of newList) {
        for (let it1 of value) {
          if (it.text == it1) {
            it.color = 'red'
          }
        }
      }
      console.log(newList)
      this.setData({
        newList,
      })
    }
  }
})