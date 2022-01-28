const videoID = prompt('video id', 'dQw4w9WgXcQ');

let video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoID}" title="YouTube video player" id="vid" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
let style = '<style> #vid { position: fixed; bottom: 0; right: 0; } </style>';

if(document.querySelector("#vid") != null || document.querySelector("#vid") != undefined) return;

document.body.insertAdjacentHTML('beforeend', video);
document.body.insertAdjacentHTML('beforeend', style);
