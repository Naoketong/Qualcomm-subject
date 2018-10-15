
 let tmp = {
     data:{
      teacherItemWidth:$('.teacher-item').width(), 
      teacherItemLength:$('.teacher-item').length, 
      teacherSpeed:500,                           
      index:0,                                   
      isLock:false,

      contentHeight:70,
      contentArray:['roll-1','roll-2','roll-3','roll-4','roll-5',],
      bannerHeight:426,
      
     },
     init:function(){
       this.addItem();   
       this.bind();
       this.addition();
      this.roll();
       
        $('.opiton-item-father').on('click',this.add);      
     },
     add:function(){
       let mmp = $(this).parent();
       $(mmp).toggleClass('active');
     },
     bind:function(){
       $('#teacherNext').on('click',this.teacherNext);  
       $('#teacherPrev').on('click',this.teacherPrev);

       $('.content-select-list a').on('click',this.arrive);
    $(window).on('scroll',this.roll);
       
     },
     addItem:function(){
       let teacherItemWidth  = this.data.teacherItemWidth; 
       let teacherItemLength = this.data.teacherItemLength;
       let aa = $('.teacher-item').eq(0).clone(); 
       let bb = $('.teacher-item').eq(1).clone();
       let cc = $('.teacher-item').eq(2).clone();
       let dd = $('.teacher-item').eq(3).clone();
       let ee = $('.teacher-item').eq(teacherItemLength - 1).clone();

       $('.teacher-content').append(aa);//append() 方法在被选元素的结尾（仍然在内部）插入指定内容。
       $('.teacher-content').append(bb);
       $('.teacher-content').append(cc);
       $('.teacher-content').append(dd);
       $('.teacher-content').prepend(ee);//prepend() 方法在被选元素的开头插入指定内容。      
       $('.teacher-content').css('left', - teacherItemWidth +'px');
     },     
     teacherNext:function(){
       let next_index = tmp.data.index + 1;
       tmp.gotoIndex(next_index);
     },  
     teacherPrev:function(){
       let prev_index = tmp.data.index - 1;
       tmp.gotoIndex(prev_index);
     },   
     gotoIndex:function(index){
       //数组长度   
       let teacherItemLength = tmp.data.teacherItemLength;
       //个体宽度
       let teacherItemWidth  = tmp.data.teacherItemWidth;   
       //速度  
       let teacherSpeed = tmp.data.teacherSpeed;   
       //inde：已定义的个数
       let translateX = (teacherItemWidth + teacherItemWidth * index)     
       let isLock = tmp.data.isLock;
       if(isLock){
         return
       }else{
         tmp.data.isLock = true;
       }
       let teacherListEle = $('.teacher-content');      
       teacherListEle.animate({
         'left': - translateX + 'px'
       },
       function(){      
         if(index === -1){         
           index = teacherItemLength -1 ;        
           teacherListEle.css('left', - teacherItemWidth * teacherItemLength +'px');        
           }        
           if(index === teacherItemLength ){           
             index = 0;           
             teacherListEle.css('left', - teacherItemWidth +'px');          
           };           
           tmp.data.index  = index;
           tmp.data.isLock = false;
         });
       },
       // 滚动导航
      addition:function(){
    let contentArray = tmp.data.contentArray;
    let movingRange = (contentArray).map((data) =>{
      return{
        key:data,
        annge:$(`#${data}`).offset().top,
      }
    })
    this.data.contentArray = movingRange;
  },
  roll:function(){
    let windowRoll = $(window).scrollTop();
    let bannerHeight = tmp.data.bannerHeight;
    if(windowRoll >= bannerHeight){
      $('.content-select-section').addClass('roll');
    }else{
      $('.content-select-section').removeClass('roll');
    }
    tmp.bright();
  },
  arrive:function(){
    let isLook = tmp.data.isLook;
    if(isLook){
      return
    }else{
      tmp.data.isLook = true;
    }
    let clickItem = $(this).data('nav');
    let movingRange = $(`#${clickItem}`).offset().top;
    let contentHeight = tmp.data.contentHeight;
    movingRange = movingRange - contentHeight;
    $('html,body').stop();
    $('html,body').animate({scrollTop:movingRange},1000)
    tmp.data.isLook = false;
  },
  bright:function(){
    let windowRoll = $(window).scrollTop();
    let contentArray = this.data.contentArray;
    let contentHeight = tmp.data.contentHeight;
    let storage = '';
    contentArray.forEach((data) =>{
      if(windowRoll >= data.annge - contentHeight){
      storage = data.key;
    }
    })
   
    $(`.content-select-list a`).removeClass('active');
    $(`.content-select-list a[data-nav="${storage}"]`).addClass('active');

  },

     }
   tmp.init();   
