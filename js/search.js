$(function (){
    
    //给搜索按钮添加一个点击事件
    $("#search-btn").click(function (){
        //alert(1)
        //获取搜索框的内容
        let kw=$("#search-input").val()
        //alert(kw)
        //搜索框没有值，不执行下面
        if(!kw) return false
        //加入到本地存储 没有值、直接添加/有值直接追加
        let keyword=localStorage.getItem("keyword")
        //判断是否有值
        if(keyword){//有值
            //将本地存储的数据转成字符串
           let arr=JSON.parse(keyword)
           arr.push(kw)
            //字符串转数组
            localStorage.setItem("keyword",JSON.stringify(arr))
        }else{//没有值
          let arr=[]
           arr.push(kw)//添加数据进去
           //字符串转数组
           localStorage.setItem("keyword",JSON.stringify(arr))
        }
        getSearchDate()
        //后端实现搜索功能
        alert("正在搜索中...请稍后")
    })
    getSearchDate()
     //获取数据
    function getSearchDate(){
        let keyword=localStorage.getItem('keyword')
        if(!keyword) return false
        let date=JSON.parse(keyword)//转为数组
        //遍历(倒着)
        
        let resHTML=""
        for(let i=date.length-1;i>=0 ;i--){
             resHTML+=`<li>${date[i]}</li>`
        }
        //渲染到页面
        $(".item").html(resHTML)
    }
      //删除本地存储
      $("#del").click(function (){
          //alert(1)
         
          if(confirm('你确定要删除吗？再留一会吧')){
            localStorage.removeItem('keyword')
          }
          //刷新页面
          history.go(0)
      })  
       
    
})