const carousel=document.querySelector9(".carousel")

const dragging=(e)=>{
    console.log(e.pageX)//pageX returns the horizondal coordinatee of mouse pointer
}
carousel.addEventListener("mousemove",dragging)
