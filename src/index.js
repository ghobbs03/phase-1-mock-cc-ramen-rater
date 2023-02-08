// write your code here

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(objArray => {



        const div = document.querySelector('#ramen-menu');
        objArray.forEach(ramenObj => {
            const img = document.createElement('img');
            img.src = ramenObj.image;


            img.addEventListener('click', e => {
                console.log(ramenObj.name);
                displayRamenDetails(ramenObj, img);

            })


            //console.log(ramenObj.image)
            div.append(img)
        })
    })


document.querySelector('form#new-ramen').addEventListener('submit', e => {
    e.preventDefault();

    const imgElement = document.createElement('img');
    imgElement.src = e.target["image"].value;
    document.querySelector('#ramen-menu').append(imgElement);


    const formData = {
        name: e.target["name"].value,
        restaurant: e.target["restaurant"].value,
        image: e.target["image"].value,
        rating: e.target["rating"].value,
        comment: e.target["new-comment"].value
    }


    fetch("http://localhost:3000/ramens", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })



})


function displayRamenDetails(ramenObj ,img){
    const imgElement = document.querySelector('.detail-image');
    imgElement.src = img.src;

    const nameElement = document.querySelector('.name');
    nameElement.innerHTML = ramenObj.name;

    const restaurantElement = document.querySelector('.restaurant')
    restaurantElement.innerHTML = ramenObj.restaurant;


    const ratingElement = document.querySelector('#rating-display');
    ratingElement.innerHTML = ramenObj.rating;

    const commentElement = document.querySelector('#comment-display');
    commentElement.innerHTML = ramenObj.comment;

}





