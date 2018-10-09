   let clickOpen = document.getElementById('click-open');
    let opitonItemChild = document.getElementsByClassName('opiton-item-child')[0];    
    clickOpen.addEventListener('click',function(){
      let tmp = opitonItemChild.getAttribute('class');
      let activeIndex = tmp.indexOf('active');
      if(activeIndex === -1){
          opitonItemChild.setAttribute('class', 'opiton-item-child active');
      }else{
          opitonItemChild.setAttribute('class', 'opiton-item-child');
      }
    });
  



  let tmp = {
      data:{
        teacherItemWidth:$('.teacher-item').width(), 
        teacherItemLength:$('.teacher-item').length, 
        teacherSpeed:500,                           
        index:0,                                   
        isLock:false,                              
      },
      init:function(){
        this.addItem();   
        this.bind();      
      },
      bind:function(){
        $('#teacherNext').on('click',this.teacherNext);  
        $('#teacherPrev').on('click',this.teacherPrev);
      },
      addItem:function(){
        let teacherItemWidth  = this.data.teacherItemWidth; 
        let teacherItemLength = this.data.teacherItemLength;
        let aa = $('.teacher-item').eq(0).clone(); 
        let bb = $('.teacher-item').eq(1).clone();
        let cc = $('.teacher-item').eq(2).clone();
        let dd = $('.teacher-item').eq(teacherItemLength - 1).clone();

        $('.teacher-content').append(aa);//append() 方法在被选元素的结尾（仍然在内部）插入指定内容。
        $('.teacher-content').append(bb);
        $('.teacher-content').append(cc);
        $('.teacher-content').prepend(dd);//prepend() 方法在被选元素的开头插入指定内容。      
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
        }
      }
    tmp.init();   



let mmp = {  
  init:function(){
    $('.opiton-item-father').on('click',this.add); 
  },
  add:function(){
    let mmp = $(this).parent();
    $(mmp).toggleClass('active');
  },
}
mmp.init();

 
