window.onload=function () {
    var designWidth=750;


    function resize() {
        var DeviceWidth=window.innerWidth;
        var rem=DeviceWidth/designWidth*100+'px';
        document.querySelector('html').style.fontSize=rem;
    }
    window.onresize=function () {
        resize();
    }
   resize();

}
