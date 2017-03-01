// calls function that generates the html for each item and inputs a value for each property(?)
createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 1',
    author: 'Author 1',
    price: 'Price 1'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 2',
    author: 'Author 2',
    price: 'Price 2'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 3',
    author: 'Author 3',
    price: 'Price 3'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 4',
    author: 'Author 4',
    price: 'Price 4'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 5',
    author: 'Author 5',
    price: 'Price 5'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 6',
    author: 'Author 6',
    price: 'Price 6'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 7',
    author: 'Author 7',
    price: 'Price 7'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 8',
    author: 'Author 8',
    price: 'Price 8'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 9',
    author: 'Author 9',
    price: 'Price 9'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 10',
    author: 'Author 10',
    price: 'Price 10'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 11',
    author: 'Author 11',
    price: 'Price 11'
});

createCard({
    src: 'https://unsplash.it/250?image=999',
    caption: 'Item 12',
    author: 'Author 12',
    price: 'Price 12'
});

// creates function that links to HTML file and creates outline for the cards

function createCard(image) {
    var card = `<div class="col-sm-4">
        <div class="card">
        <img src="${image.src}" alt="Image"/>
        <h5 class="card-caption">${image.caption}</h5>
        <div class="row">
            <h6 class="card-author col-sm-6">${image.author}</h6>
            <h6 class="card-price text-right col-sm-6">${image.price}</h6>
        </div>
        </div>
    </div>`;

    document.querySelector('.itemCards').innerHTML += card; 
}