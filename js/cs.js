
// let tmp = {
//   data:{
//     contentHeight:70,
//     contentArray:['roll-1','roll-2','roll-3','roll-4','roll-5',],
//     bannerHeight:426,
//   },
//   init:function(){
//     this.bind();
//     this.addition();
//     this.roll();
//   },
//   bind:function(){
//     $('.content-select-list a').on('click',this.arrive);
//     $(window).on('scroll',this.roll);
//   },
//   addition:function(){
//     let contentArray = tmp.data.contentArray;
//     let movingRange = (contentArray).map((data) =>{
//       return{
//         key:data,
//         annge:$(`#${data}`).offset().top,
//       }
//     })
//     this.data.contentArray = movingRange;
//   },
//   roll:function(){
//     let windowRoll = $(window).scrollTop();
//     let bannerHeight = tmp.data.bannerHeight;
//     if(windowRoll >= bannerHeight){
//       $('.content-select-section').addClass('roll');
//     }else{
//       $('.content-select-section').removeClass('roll');
//     }
//     tmp.bright();
//   },
//   arrive:function(){
//     let isLook = tmp.data.isLook;
//     if(isLook){
//       return
//     }else{
//       tmp.data.isLook = true;
//     }
//     let clickItem = $(this).data('nav');
//     let movingRange = $(`#${clickItem}`).offset().top;
//     let contentHeight = tmp.data.contentHeight;
//     movingRange = movingRange - contentHeight;
//     $('html,body').stop();
//     $('html,body').animate({scrollTop:movingRange},1000)
//     tmp.data.isLook = false;
//   },
//   bright:function(){
//     let windowRoll = $(window).scrollTop();
//     let contentArray = this.data.contentArray;
//     let contentHeight = tmp.data.contentHeight;
//     let storage = '';
//     contentArray.forEach((data) =>{
//       if(windowRoll >= data.annge - contentHeight){
//       storage = data.key;
//     }
//     })
   
//     $(`.content-select-list a`).removeClass('active');
//     $(`.content-select-list a[data-nav="${storage}"]`).addClass('active');

//   },
// }
// tmp.init();


let tmp = {
  data:{  
    isLook:false,  
    contentHeight:70,
    contentArray:['roll-1','roll-2','roll-3','roll-4','roll-5'],
    bannerHeight:426,
  },
  init:function(){   
    this.bind();
    this.addition();
    this.roll();
  }, 
  bind:function(){
    $('.content-select-list a').on('click',this.arrive);
    $(window).on('scroll',this.roll);
  },
  
  addition:function(){
    let contentArray = this.data.contentArray;
    let movingRange = (contentArray).map((data) => {
      return{
          key:data,
          aange:$(`#${data}`).offset().top,
        }
    })
    this.data.contentArray = contentArray;
  },
  roll:function(){
    let windowRoll = $(window).scrollTop();
    let bannerHeight = tmp.data.bannerHeight;
    if (windowRoll >= bannerHeight) {
      $('.content-select-section').addClass('roll');
    }else{
      $('.content-select-section').removeClass('roll');
    }
    tmp.bright();
  },
  arrive:function(){
     let isLook = tmp.data.isLook;
    if (isLook) {
      return
    } else {
      tmp.data.isLook = true;
    }
    let clickItem = (this).data('nav') ;
    let movingRange = $(`#${clickItem}`).offset().top;
    let contentHeight = tmp.data.contentHeight;
    movingRange = movingRange - contentHeight;
    $('html,body').stop();
    $('html,body').animate({scrollTop:movingRange},1000)
    tmp.data.isLook = false;
  }
  bright:function(){
    let windowRoll = $(window).scrollTop();
    let contentArray = this.data.contentArray;
    let contentHeight =  this.data.contentHeight;
    let storage = '';
    contentArray.forEach((data) => {
      if(windowRoll >= data.aange - contentHeight){
        storage = data.key;
      }
    })
    $(`.content-select-list a`).removeClass('active');
    $(`.content-select-list a[data-roll="${storage}"]`).addClass('active');
  }
  


}
tmp.init();

