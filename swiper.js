var item = document.querySelectorAll('.carousel .carousel-item');
item.forEach((e)=>{
    const slide = 4;
    let next = e.nextElementSibling;
    for(var i=0; i<slide; i++){
      if(!next){
        next= item[0]
      }  
      let clonechild = next.cloneNode(true)
      e.appendChild(clonechild.children[0])
      next = next.nextElementSibling
    }
})