
$(function(){
        //给搜索框添加获取焦点事件
        $("#keyword").focus(function(){
            //alert(1)
            //跳转到搜索页面
            location.href='./search.html'
        })
        // 退回上一级
        $("#return").click(function (){
            //alert(1)
            history.go(-1)
        })
        activeNav()
        //给底部添加激活样式
        function activeNav(){
            let path=location.pathname.substr(11);
            //console.log(path);
             //干掉所有a的激活样式
             $(".footer li a").removeClass("active")
            //拼接字符串
           // $('.footer li a[href="'+path+'"]').addClass("active")
           //es6的写法
           $(`.footer li a[href="${path}"]`).addClass("active")
        }
})