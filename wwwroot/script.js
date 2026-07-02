document.addEventListener('DOMContentLoaded',  async function () {
    loadSharedHeader();
    loadSharedFooter();
    loadMessages();
    changeHomePhoto();
    loadVideo(); 
})

function loadSharedHeader() {
    var placeForHeader = document.getElementById('shared-header');
    if (!placeForHeader) {
        return Promise.resolve(); //returns a resolved promise, meaning it has already been done instead of "undefined"
    }
    return fetch('header.html')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Header load failed');
            }
            return response.text();
         })
        .then(function (html) {
            placeForHeader.innerHTML = html;
        });
}

function loadSharedFooter(){
    var placeForFooter = document.getElementById('shared-footer');
    if (!placeForFooter) {
        return Promise.resolve(); 
    }

    return fetch('footer.html')
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Header load failed');
            }
            return response.text();
         })
        .then(function (html) {
            placeForFooter.innerHTML = html;
        });
}
    function loadMessages() {
    const commentSection = document.getElementById('comments');
    if (!commentSection) {
        return;
    }
    fetch('/api/comment')
        .then(function (response) {
            return response.text();
        })
        .then(function (comment) {
            commentSection.value = comment;
            commentSection.scrollTop = commentSection.scrollHeight;
        })
        .catch(function () {
            commentSection.value = 'Could not load comments';
        });
}
function changeHomePhoto()
{
    var placeForPhoto = document.getElementById('home-photo');
    if (!placeForPhoto){
        return;
    }
       document.getElementById('list-photo').addEventListener('mouseenter', function () {
        placeForPhoto.src = "/Internet Project Photos/photography_thumbnail.jpg";
        document.getElementById('photo-caption').innerHTML= "Photography: untitled, Ofakim collection, 12/2025";
    });
    

    document.getElementById('list-painting').addEventListener('mouseenter', function () {
        placeForPhoto.setAttribute("src","/Internet Project Photos/yael-8_2025.jpg" );
        document.getElementById('photo-caption').innerHTML="Painting: Yael, acrylic on canvas, 8/2025";
    });
    

    document.getElementById('list-video').addEventListener('mouseenter', function () {
        placeForPhoto.src = "/Internet Project Photos/videos_thumbnail.jpg";
        document.getElementById('photo-caption').innerHTML="Videos: still frame from Geut, 5/2026";
    });
}
function loadVideo()
{
    var placeForVideo = document.getElementById('videoplayer');
    if(!placeForVideo){
        return;
    }
    document.getElementById('crumbs').addEventListener('click', function() {
        placeForVideo.src = "https://player.vimeo.com/video/1187461826";
    })
    document.getElementById('geut').addEventListener('click', function() {
        placeForVideo.src = "https://player.vimeo.com/video/1206450923";
    })
    document.getElementById('noa').addEventListener('click', function() {
        placeForVideo.src = "https://drive.google.com/file/d/1-s15e_1CU_NoOtvxljSIVWqeXO2Fmd0h/preview";
    })
}