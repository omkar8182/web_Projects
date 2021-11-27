var resource=["cartoon.jfif","cartoon1.jfif","cartoon2.jpg"];
var a=document.getElementsByClassName('gallery')[0];

   
     function fun(){
      for(var i=0;i<3;i++)
      {
    // a.classList.toggle('g');
  //  alert(i);
    document.getElementsByTagName("img")[0].src=resource[1];
   }
}
