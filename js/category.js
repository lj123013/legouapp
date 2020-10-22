$(function (){
    //给li添加激活效果
    $(".main .aside li").click(function (){
        //alert(1)
        //干掉所有li的a的激活效果
     $(".main .aside li").removeClass("active")
    //  救活一个
    $(this).addClass("active")
    // //获取当前的索引值
    // let index=$(this).index()
    // //console.log(index);
    // //当前索引相对于top的相对偏移值
    // let sTop=$(".foorBox").eq(index).offset().top
    // //console.log(sTop);
    // //获取窗口html或者body的滑动距离
    // $("html,body").animate({scrollTop : sTop},500)

    
    })
})