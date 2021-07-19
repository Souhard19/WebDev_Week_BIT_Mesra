
const add_btn = document.querySelector('#music_add');
const filesInp = document.querySelector('#files__');
const track = document.querySelector('.music_tracks');


function update_track(){
     let files = filesInp.files;

     let container = document.createElement('div');
     
     for (let i = 0; i < files.length; i++) {
          let para = document.createElement('p');
          para.id = i;
          para.innerText = files[i].name;
          container.append(para);

          para.addEventListener('mouseover', (e) => {
               para.setAttribute('style', 'color: rgb(255, 255, 255);');
          });
          para.addEventListener('mouseout', (e) => {
               para.setAttribute('style', 'color: rgb(190, 190, 190);');
          });

          para.addEventListener('click', (e) => {
               const curr_track = document.getElementById('curr_track');
               curr_track.innerText = para.innerText;

               
          });
     }
     track.innerText = '';
     track.append(container);
}

function update(e) {
     filesInp.click();
}

add_btn.addEventListener('click', update);
