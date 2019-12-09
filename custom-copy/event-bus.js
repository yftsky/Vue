//定义全局事件模块
(function (window) {
  //定义eventBus对象
  const eventBus = {}
  //容器
  let listenerContainer = {}
  let id = 0
//1). on(eventName, listener): 绑定事件监听
  eventBus.on = function(eventName,listener){
      let listeners = listenerContainer[eventName]
      if (!listeners) {
        listeners = {}
        listenerContainer[eventName] = listeners
      }
      const uid = `uid_${eventName}_${++id}`
      listeners[uid] = listener
      return uid
    }
//2). emit(eventName, data): 分发事件
  eventBus.emit =function(eventName,data){
      const listeners = listenerContainer[eventName]
      if (listeners) {
        Object.values(listeners).forEach(listener =>{
          setTimeout(()=>{
            listener(data)
          })
        })
      }
    }
// 3). off(eventName):移除事件监听
  eventBus.off = function(flag){
    if (flag===undefined) {
      listenerContainer = {}
    }else if (typeof flag === "string" && flag.indexOf("uid_") === 0) {
      Object.values(listenerContainer).forEach(listeners=>{
      delete listeners[flag]
      })
    }else{
      delete listenerContainer[flag]
    }
  }
  window.eventBus = eventBus
})(window)


