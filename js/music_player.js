const audio_tag = document.getElementById('audio');

const play = document.getElementById('play__');
const pause = document.getElementById('pause__');
const inpFiles = document.querySelector('#files__');

const src = document.getElementById('source__');
const curr_track = document.getElementById('curr_track')

play.addEventListener('click', (e) => {
     pause.removeAttribute('style');
     play.setAttribute('style', 'display: none;');

     let arr = Array.from(inpFiles.files);
     let len = inpFiles.files.length;

     const track = curr_track.innerText;
     console.log(track);
     let i;
     for (i=0; i<len; i++){
          if(arr[i].name == track)
               break;
     }
     console.log(i);

     let url = String(URL.createObjectURL(inpFiles.files[i]));
     src.setAttribute('src', url);
     audio_tag.play();
});
pause.addEventListener('click', (e) => {
     play.removeAttribute('style');
     pause.setAttribute('style', 'display: none;');

     src.removeAttribute('src');
     audio_tag.pause();
});
