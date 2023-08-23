// Portfolio Image
let image = document.getElementById('image');
// variable to store image URL and exporting URL variable to getValues.js
export let url;

// function to get image data as URL
function imgURL(e){
    const file = image.files[0];
    const reader = new FileReader(file);

    reader.addEventListener('load', function(){
        url = reader.result;
    })

    reader.readAsDataURL(file);
}

image.addEventListener('change', imgURL);