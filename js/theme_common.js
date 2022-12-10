var audio_music=document.getElementById('audio_music'); 

//控制音乐切换播放暂停
var img_music=document.getElementById('img_music');
var timeout_music;
function music_switch(){ //切换   
    clearTimeout(timeout_music);  
    if(audio_music.paused){
        console.log('switch music to play');
        audio_music.play();
        $(".div_music_tips").html("正播放").show();                
        timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
    }else{
        console.log('switch music to paused'); 
        audio_music.pause();
        img_music.style.webkitAnimation="";
        $(".div_music_tips").html("已暂停").show();  
        timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500); 
    } 
}