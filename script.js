var index=0;
function changeColor(){
   var colors=["rgb(23,54,67)","rgb(233,54,64)","rgb(42,84,95)","rgb(32,44,234)"];
    document.getElementsByTagName("body")[0].style.background=colors[index++];
    if(index>colors.length-1){
        index=0;
    }
    
}
