
const add_btn = document.querySelector('#music_add');
const filesInp = document.querySelector('#files__');
const music_tracks = document.querySelector('.music_tracks');


function update_track(){
     let files = filesInp.files;

     let container = document.createElement('div');
     
     for (let i = 0; i < files.length; i++) {
          let para = document.createElement('p');
          para.id = i;
          para.innerText = files[i].name;
          para.style.margin = '2% 4%'
          container.append(para);

          para.addEventListener('mouseover', (e) => {
               para.style.color = 'rgb(255, 255, 255)';
          });
          para.addEventListener('mouseout', (e) => {
               para.style.color = 'rgb(190, 190, 190)';
          });

          para.addEventListener('click', (e) => {
               const curr_track = document.getElementById('curr_track');
               curr_track.innerText = para.innerText;

               pause.click();
               play.click();
          });
     }
     music_tracks.innerText = '';
     music_tracks.append(container);
}

function update(e) {
     filesInp.click();
}

add_btn.addEventListener('click', update);
