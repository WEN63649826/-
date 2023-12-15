var btnSend=document.getElementById('btnSend');
var words=document.getElementById('words');
var ulBoard=document.querySelector('.board ul');
btnSend.onclick=function(){
if(words.value==''){alert('输入内容不能为空');return;}
var txt=words.value+"["+ new Date().toTimeString()+"]";
var li=document.createElement('li');
li.innerHTML=txt;
var button=document.createElement('button');
button.innerHTML='删除';
button.onclick=function(){
    ulBoard.removeChild(this.parentNode);
}
li.appendChild(button);//把a插入到li中
ulBoard.insertBefore(li,ulBoard.children[0]);//在前面插入
words.value='';//清空输入框内容
}