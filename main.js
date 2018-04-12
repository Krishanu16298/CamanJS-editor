const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
let filename = '';
let newFilename = '';
let ext = '';
let index = 0;

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

document.addEventListener('click',(e) =>{
    if(e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('brightness-add')){
            Caman('#canvas', img, function(){
                this.brightness(5).render();
            });
        }
        else if (e.target.classList.contains('brightness-remove')) {
            Caman('#canvas', img, function () {
                this.brightness(-5).render();
            });
        }
        else if (e.target.classList.contains('contrast-add')) {
            Caman('#canvas', img, function () {
                this.contrast(5).render();
            });
        }
        else if (e.target.classList.contains('contrast-remove')) {
            Caman('#canvas', img, function () {
                this.contrast(-5).render();
            });
        }
        else if (e.target.classList.contains('saturation-add')) {
            Caman('#canvas', img, function () {
                this.saturation(20).render();
            });
        }
        else if (e.target.classList.contains('saturation-remove')) {
            Caman('#canvas', img, function () {
                this.saturation(-20).render();
            });
        }
        else if (e.target.classList.contains('vibrance-add')) {
            Caman('#canvas', img, function () {
                this.vibrance(20).render();
            });
        }
        else if (e.target.classList.contains('vibrance-remove')) {
            Caman('#canvas', img, function () {
                this.vibrance(-20).render();
            });
        }
        else if (e.target.classList.contains('vintage-add')) {
            Caman('#canvas', img, function () {
                this.vintage().render();
            });
        }
        else if (e.target.classList.contains('lomo-add')) {
            Caman('#canvas', img, function () {
                this.lomo().render();
            });
        }
        else if (e.target.classList.contains('clarity-add')) {
            Caman('#canvas', img, function () {
                this.clarity().render();
            });
        }
        else if (e.target.classList.contains('sincity-add')) {
            Caman('#canvas', img, function () {
                this.sinCity().render();
            });
        }
        else if (e.target.classList.contains('crossprocess-add')) {
            Caman('#canvas', img, function () {
                this.crossProcess().render();
            });
        }
        else if (e.target.classList.contains('pinhole-add')) {
            Caman('#canvas', img, function () {
                this.pinhole().render();
            });
        }
        else if (e.target.classList.contains('nostalgia-add')) {
            Caman('#canvas', img, function () {
                this.nostalgia().render();
            });
        }
        else if (e.target.classList.contains('hermajesty-add')) {
            Caman('#canvas', img, function () {
                this.herMajesty().render();
            });
        }
    }
});

revertBtn.addEventListener('click', e => {
    Caman('#canvas', img, function(){
        this.revert();
    });
});

uploadFile.addEventListener('change',() => {

    const file = document.getElementById('upload-file').files[0];

    const reader = new FileReader();

    if(file){
        filename = file.name;
        reader.readAsDataURL(file);
    }

    reader.addEventListener('load',() => {
        img = new Image();
        img.src = reader.result;

        img.onload = function(){
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img,0,0,img.width,img.height);
            canvas.removeAttribute('data-caman-id');
        }
    },false);

});

downloadBtn.addEventListener('click', (e) => {
    
    for(let i=0;i<filename.length;i++){
        // console.log(filename[i]);
        if(filename[i] === '.'){
            index = i;
            break;
        }
        newFilename+=filename[i];
    }
    newFilename += '(edited)';
    download(canvas, newFilename);
});

function download(canvas, fileName){
    let e;
    const link = document.createElement('a');
    link.download = fileName;
    link.href = canvas.toDataURL('image/jpeg', 0.8);
    e = new MouseEvent('click');
    link.dispatchEvent(e);
}