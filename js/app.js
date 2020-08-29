$(function(){
    'use strict';

    $('#about').on('click',function(){
        $('main').load("../about.html");   
    })

    $('#services').on('click',function(){
        $('main').load("../services.html");   
    })

    $('#register').on('click',function(){
        $('main').load("../register.html");   
    })
});