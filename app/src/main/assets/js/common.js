/*var app = (function(){ //객체화
    var init = function(){

    }
    return {init:init}
})()//즉시실행함수*/



var app = (function(){ //객체화(클래스 선언)
    var init = function(){

        location.href='second.html';

    }
    var move = function(){

    }
    return {
        init:init,
        move:move
    }
})()