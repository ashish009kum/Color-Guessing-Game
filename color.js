var rgab= document.querySelector(".a");
var fit= document.querySelector(".first");
var box =document.querySelectorAll(".box");
var easy =document.querySelector(".ea");
var hard =document.querySelector(".ha");
var ne =document.querySelector(".ne");
var out =document.querySelector(".res");
var val = randoomcolorgenerate(6);
var target=randomcolor();
var na=6;
rgab.innerHTML = target.toUpperCase();
for(var i=0;i<box.length;i++)
{
    box[i].style.backgroundColor=val[i];
    box[i].addEventListener("click",function(){
        if(this.style.backgroundColor===target)
        {
           for(var i=0;i<box.length;i++)
            {
               box[i].style.backgroundColor=target;
            }
            out.innerHTML="CORRECT!";
            ne.innerHTML="PLAY AGAIN";
            fit.style.backgroundColor=target;
        }
        else 
        {
            this.style.backgroundColor="#232323";
            out.innerHTML="TRY AGAIN!";
        }
    });
}
ne.addEventListener("click",function(){
    val=randoomcolorgenerate(na);
    reset();
});
hard.addEventListener("click",function(){
    na=6;
    easy.classList.remove("add");
    hard.classList.add("add");
    for(var i=3;i<box.length;i++)
    {
        box[i].style.display="block";
    }
    val=randoomcolorgenerate(6);
    reset();
});
easy.addEventListener("click",function(){
    hard.classList.remove("add");
    hard.classList.remove("ha");
    easy.classList.add("add");
    for(var i=3;i<box.length;i++)
    {
        box[i].style.display="none";
    }
    na=3;
    val=randoomcolorgenerate(3);
    reset();
});
function reset()
{
    target=randomcolor();
    for(var i=0;i<box.length;i++)
    {
       box[i].style.backgroundColor=val[i];
    }
    rgab.innerHTML=target.toUpperCase();
    ne.innerHTML="NEW COLORS";
    fit.style.backgroundColor="steelblue";
    out.innerHTML="";
}
function randomcolor()
{
    var color = Math.floor(Math.random()*val.length);
    return val[color];
}
function randoomcolorgenerate(num)
{
    var ar=[];
    while(num--)
    {
        var r=Math.floor(Math.random()*255);
        var g=Math.floor(Math.random()*255);
        var b=Math.floor(Math.random()*255);
        var rgba = "rgb("+ r +", "+ g +", " + b + ")";
        ar.push(rgba);
    }
    return ar;
}