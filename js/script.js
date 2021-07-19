// Add JavaScript code here

let maps = document.querySelector('#map');
let music = document.querySelector('.music_panel');

let map_btn = document.querySelector('#map_button');
let music_btn = document.querySelector('#music_button');


function map_event(e){
     maps.removeAttribute('style');
     music.setAttribute('style', "display: none;");
}
map_btn.addEventListener('click', map_event);

map_btn.addEventListener('mouseover', (e) => {
     map_btn.style.width = '4%';
     map_btn.style.height = '5vh';
     map_btn.style.color = 'rbg(0,0,0)';
});
map_btn.addEventListener('mouseout', (e) => {
     map_btn.style.width = 'auto';
     map_btn.style.height = 'auto';
});


function music_event(e) {
     music.removeAttribute('style');
     maps.setAttribute('style', "display: none;");
}
music_btn.addEventListener('click', music_event);

music_btn.addEventListener('mouseover', (e) => {
     music_btn.style.width = '4%';
     music_btn.style.height = '5vh';
});
music_btn.addEventListener('mouseout', (e) => {
     music_btn.style.width = 'auto';
     music_btn.style.height = 'auto';
});


function alert__(x){
     if(x.innerText > 50)
          alert('Slow Down, You have a Family');
}



const add = document.getElementById('music_add');

add.addEventListener('mouseover', (e) => {
     add.style.color = 'rgb(255, 255, 255)';
});
add.addEventListener('mouseout', (e) => {
     add.setAttribute('style', 'color: rgb(151, 151, 151);');
});



