// 文档加载事件
$(function (){
//轮播图
new Swiper('.swiper1', {
    loop: true, // 循环模式选项
    autoplay: {
      delay: 3000,//3秒切换一次
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination1',
    }
});
// 导航内容轮播
//轮播图
new Swiper('.swiper2', {
  loop: true, // 循环模式选项
  autoplay: {
    delay: 3000,//3秒切换一次
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination2',
  }
});
// 乐购快报
new Swiper('.swiper3', {
  direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  autoplay: {
    delay: 1000,//3秒切换一次
  },
});
});