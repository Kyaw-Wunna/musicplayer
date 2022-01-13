const togglebtn = document.getElementById('toggle');
// Sign up button
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const navclose = document.getElementById('navclose');
const close = document.getElementById('close');

togglebtn.addEventListener('click',()=>{
   document.body.classList.add('shownav');
   togglebtn.classList.add('close');
});

navclose.addEventListener('click',()=>{
   document.body.classList.remove('shownav');
   togglebtn.classList.remove('close');
});

openbtn.addEventListener('click',()=>{
   modal.classList.add('showmodal');
});

close.addEventListener('click',()=>{
   modal.classList.remove('showmodal');
});

const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title');

const audio = document.getElementById('audio');

const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nextbtn = document.getElementById('next');

let songindex = 0;

const songs = ['Any%20Way%20You%20Want%20It','Lola%20Montez','Hate%20Me'];
// console.log(songs[songindex]);

loadsong(songs[songindex]);

function loadsong(music){

   let mtitle;
   if(music === 'Any%20Way%20You%20Want%20It'){
      mtitle = 'Any Way You Want It';
   }else if(music === 'Lola%20Montez'){
      mtitle = "Lola Montez";
   }else if(music === 'Hate%20Me' ){
      mtitle = "Hate Me";
   }
   title.innerText = mtitle;
   audio.src = `music/${music}.mp3`;
   cover.src = `img/${music}.jpg`;
}

prevbtn.addEventListener('click',prevsong);

function prevsong(){
   songindex--;
   if(songindex < 0){
      songindex = songs.length - 1;
   }
   loadsong(songs[songindex]);
   playsong();
}

nextbtn.addEventListener('click',nextsong);


function nextsong(){
   songindex++;
   if(songindex > songs.length -1){
      songindex = 0;
   }
   loadsong(songs[songindex]);
   playsong();
}

playbtn.addEventListener('click',()=>{
   const isplaying = musiccontainer.classList.contains('play');
   if(isplaying){
      pausesong();
   }else{
      playsong();
   }
});



function playsong(){
   musiccontainer.classList.add('play');

   playbtn.querySelector('i.fas').classList.remove('fa-play');
   playbtn.querySelector('i.fas').classList.add('fa-pause');

   audio.play();
}

function pausesong(){
   musiccontainer.classList.remove('play');

   playbtn.querySelector('i.fas').classList.add('fa-play');
   playbtn.querySelector('i.fas').classList.remove('fa-pause');

   audio.pause();
}

const progress = document.getElementById('progress');
const progresscontainer = document.getElementById('progress-container');


function updateprogress(){
   const progresspercent = (audio.currentTime / audio.duration) * 100;
   progress.style.width = `${progresspercent}%`;
}


audio.addEventListener('timeupdate', updateprogress);

progresscontainer.addEventListener('click', setprogress);

function setprogress(e){

   const width = e.target.clientWidth;
   const clickx = e.offsetX;
   const duration = audio.duration;

   audio.currentTime = (clickx/width) * duration;
}

audio.addEventListener('ended', nextsong);


// Lyrics

const lyricsbtn = document.getElementById('lyricsbtn');
const lyrics = document.getElementById('lyrics');
const body = document.querySelector('body');
const closelyrics = document.getElementById('closelyrics');

lyricsbtn.addEventListener('click',()=>{
   lyrics.classList.add('active');
   body.style.height = "auto";
   lyricsbtn.classList.add('active');
   body.style.overflow = "scroll";

});

closelyrics.addEventListener('click',()=>{
   lyrics.classList.remove('active');
   body.style.height = "100vh";
   lyricsbtn.classList.remove('active');
   body.style.overflow = "hidden";
});

const login = document.getElementById('login');
const logincontainer = document.getElementById('login-container');
const loginclose = document.getElementById('login-close');

login.addEventListener('click', ()=>{
   logincontainer.classList.add('showmodal');
});

loginclose.addEventListener('click',()=>{
   logincontainer.classList.remove('showmodal');
});






