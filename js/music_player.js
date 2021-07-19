
const play = document.getElementById('play__');
const pause = document.getElementById('pause__');
const inpFiles = document.querySelector('#files__');

const curr_track = document.getElementById('curr_track');

play.addEventListener('click', (e) => {
     pause.removeAttribute('style');
     play.setAttribute('style', 'display: none;');

     const arr = Array.from(inpFiles.files);
     const len = inpFiles.files.length;

     const track = curr_track.innerText;
     let i;
     for (i=0; i<len; i++){
          if(arr[i].name == track)
               break;
     }

     if(i == len){
          let para = document.createElement('p');
          para.textContent = 'Please select a file.';
          para.style.backgroundColor = 'red';
          para.style.width = '25%';
          para.style.color = 'white';
          para.id = 'temp';
          music_tracks.append(para);

          setTimeout(() => document.querySelector('#temp').remove(), 2000);
          pause.click();
          return;
     }

     document.getElementById('audio').remove();
     
     const audio_tag = document.createElement('audio');
     audio_tag.id = 'audio';
     // audio_tag.setAttribute('loop', '0');
     const src = document.createElement('source');
     src.id = 'source__';
     
     let url = String(URL.createObjectURL(inpFiles.files[i]));
     src.src = url;
     audio_tag.append(src);

     document.querySelector('.music_footer').append(audio_tag);
     
     audio_tag.play();
});
pause.addEventListener('click', (e) => {
     play.removeAttribute('style');
     pause.setAttribute('style', 'display: none;');
     
     const audio_tag = document.getElementById('audio');
     audio_tag.pause();
});


/////////

const prev = document.getElementById('prev');
const next = document.getElementById('next');

next.addEventListener('click', (e) => {

     const arr = Array.from(inpFiles.files);
     const len = inpFiles.files.length;

     if (len == 0)
          return;

     const track = curr_track.innerText;
     let i;
     for (i = 0; i < len; i++) {
          if (arr[i].name == track)
               break;
     }

     if (i != len-1)
          i++;
     else
          return;

     curr_track.innerText = arr[i].name;
     
     pause.click();
     play.click();
});

prev.addEventListener('click', (e) => {

     const arr = Array.from(inpFiles.files);
     const len = inpFiles.files.length;

     if (len == 0) {
          return;
     }

     const track = curr_track.innerText;
     let i;
     for (i = 0; i < len; i++) {
          if (arr[i].name == track)
               break;
     }

     if (i != 0)
          i--;
     else
          return;

     curr_track.innerText = arr[i].name;

     pause.click();
     play.click();
});

///////////

const slider = document.getElementById('slider__');
const curr_time = document.getElementById('left_time');
const full_time = document.getElementById('right_time');


function setTime() {
     const dur = document.getElementById('audio').duration;
     console.log(dur);
     // full_time.innerText =  ':' + String(dur%60);

}
