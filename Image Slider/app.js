var sliderimg = document.querySelector(".slide") // slide se pehle . nh lagaya tha queryselector me . lagate hain cass ho to aur id hoto #
var images = ['001.jpg', '002.jpg', '003.jpg', '004.jpg']
var i = 0

function prev(){
    if (i <= 0) i = images.length;
     i--;
     return setImg(); 
}
function next(){
    if (i >= images.length -1) i = -1;
    i++;
    return setImg();
}
function setImg() {
    console.log(sliderimg)
     sliderimg.setAttribute('src', 'images/' + images[i]);
}
