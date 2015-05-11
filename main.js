window.onload = function(){ 
    var oUl = document.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var oH = document.getElementById('h');
    var oM = document.getElementById('m');
    var oS = document.getElementById('s');
    for(var i = 0; i<12; i++){
        var deg = 30*(i+1)/360*2*Math.PI;
        aLi[i].style.top = -80 * Math.cos(deg) + 'px';
        aLi[i].style.left = 80 * Math.sin(deg) + 'px';
    }
    var oTime = new Date();
        var H = oTime.getHours();
        var M = oTime.getMinutes();
        var S = oTime.getSeconds();
        oH.style.WebkitTransform = 'rotate('+(30*H+M/2)+'deg)';
        oM.style.WebkitTransform = 'rotate('+(6*M)+'deg)';
        oS.style.WebkitTransform = 'rotate('+(6*S)+'deg)';
    setInterval(function(){ 
        var oTime = new Date();
        var H = oTime.getHours();
        var M = oTime.getMinutes();
        var S = oTime.getSeconds();
        oH.style.WebkitTransform = 'rotate('+(30*H+M/2)+'deg)';
        oM.style.WebkitTransform = 'rotate('+(6*M)+'deg)';
        oS.style.WebkitTransform = 'rotate('+(6*S)+'deg)';
    },1000)
    

};