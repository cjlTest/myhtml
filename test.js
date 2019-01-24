var img = document.getElementsByClassName("slider-img")[0].getElementsByTagName("li");
console.log(img);

var btn = document.getElementsByClassName("slider-btn")[0].getElementsByTagName("li");
console.log(btn);

var prev = document.getElementsByClassName("prev")[0];
var next = document.getElementsByClassName("next")[0];

var number = 0;

var timer = null;

function mover(num) {
    for(var c=0;c<btn.length;c++){
        img[c].className = "";
        btn[c].className = "";
    }
    img[num].className = "show";
    btn[num].className = "on";
}

for(var i=0;i<btn.length;i++){
    myDot = btn[i];
    myDot.index = i;
    myDot.onclick = function () {
        number = this.index;
        mover(number);
    }
}

next.onclick = function () {
    number++;
    if(number >= img.length){
        number = 0;
    }
    mover(number);
};

prev.onclick = function () {
    number--;
    if (number < 0 ){
        number=img.length-1;
    }
    mover(number);
};

timer = setInterval(function () {
    number++;
    if(number >= img.length){
        number = 0;
    }
    mover(number)
},3000);

function moverOver(list){
    for(var d=0;d<list.length;d++){
        list[d].onmouseover = function () {
            clearInterval(timer);/*停止定时器*/
        };
        list[d].onmouseout = function () {
            timer = setInterval(function () {
                number++;
                if(number >= img.length){
                    number = 0;
                }
                mover(number)
            },3000);
        }
    }
}
moverOver([document.getElementsByClassName("slider-btn")[0],prev,next]);

console.log("喜提彩蛋：可获酸奶一瓶、瓜子一包、棒棒糖一根、辣条一包、" +
    "洋芋一个、开心果一包、饼干一盒、巧克力一个、凉粉一碗、小粑粑一个，如果这些你都不要，你将获得小可爱一个yeah")
