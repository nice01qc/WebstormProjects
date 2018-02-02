var oli=document.getElementById('rightMenu').getElementsByTagName('li');
var subli=new Array;
var time0=null;
for(var i=0;i<oli.length;i++){
  if(oli[i].className=="sub"){
    subli.push(oli[i]);
  }
}
var wrapdiv=document.getElementById('rightMenu');
 document.onclick=function(){
   wrapdiv.style.display="none";
 }
document.oncontextmenu=function(){
  var event=event||window.event;
  wrapdiv.style.display="block";
  wrapdiv.style.top=event.clientY+"px";
  wrapdiv.style.left=event.clientX+"px";
  return false;
}
// 给每个class='sub'添加事件使其显示
var pan=-1;
for(var i=0;i<subli.length;i++){
  subli[i].index=i;

  subli[i].onmouseover=function(){
    this.getElementsByTagName('ul')[0].style.display="block";
  }

  subli[i].onmouseout=function(){
      this.getElementsByTagName('ul')[0].style.display="none";
  }
}
