$(function (){
   // 全选按钮。全选按钮选中单个商品也选中
   $(".allsel").change(function (){
     let bool=$(this).prop("checked")
     $(".singelsel,.allsel").prop("checked",bool)
     //已经选(多少个)
     sel()
     //总价
  alltotal()
    
   })


   //取消全选，只要有一个没有选中就取消全选
   $(".singelsel").change(function (){
     //获取商品的个数
     let allLen=$(".singelsel").length
     //console.log(allLen);
     //获取选中商品的个数
     let checkLen=$(".singelsel:checked").length
     //console.log(checkLen);
     if(allLen ==checkLen){
       //选中全选按钮
       $(".allsel").prop("checked",true)
     }else{
      $(".allsel").prop("checked",false)
     }
     //总选中
     sel()
   //总价
  alltotal()
     
   })
    
  // 增加数量
  
$(".addNum").click(function (){
  //alert(1)
  //紧邻同辈元素的前面一个元素，只能找到一个
  let num=$(this).prev("input").val()
 
  $(this).prev("input").val(++num)
//小计
subPrice(this,num)
//总价
alltotal()

  
  
})

//减少数量
$(".reNum").click(function (){
  //alert(2)
  let num=$(this).next("input").val()
  if(num  <0 ||num==0) {
    alert("商品不能少于1")
    num=1
  }
  $(this).next().val(--num)
  //小计
  subPrice(this,num)
  //总价
  alltotal()
})
 
 
//选中
 function sel(){
   let checkLen=$(".singelsel:checked").length
   $(".selected").text(`(${checkLen})`)
 }

//小计
function subPrice(obj,sunNum){
//小计
  //获取单价
  let sPrice=$(obj).closest("li").find(".price").text()
 // console.log(sPrice);
  //console.log(num);
  //计算小计 商品的总价等于=商品的单价*商品的个数
  let total=sPrice * sunNum
  //console.log(total);
  //赋值给自定义属性
  $(obj).closest("li").attr("subtotal",total)//attr("subtotal",total)subtotal是给自定义属性=“商品价格”
  
}
//总价
function alltotal(){
  //定义变量保存值
  let allsprice=0;
  //查找选中的复选框
 $(".singelsel:checked").each(function (){
  // console.log(this)each代表每一个项
 let allPrice=parseInt($(this).closest('li').attr('subtotal')) 
 //console.log(allPrice);
 //累加值
   allsprice +=allPrice;
   console.log(allsprice);
 })
 //得到总价渲染到页面中
 $(".footer .alltotal").text(allsprice)

}
})
