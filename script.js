const AlbumData = [
    {
        imageUrl: './Album/red.png', 
        title: 'Red',
        text: 'Taylor swift'
    },
    { 
        imageUrl: './Album/aashiqui2.jpg', 
        title: 'Aashiqui 2', 
        text: 'Mithoon, Ankit tiwari'
    },
    { 
        imageUrl: './Album/ekThaRaja.jpg', 
        title: 'Ek tha raja', 
        text: 'Baadshah'
    },
    { 
        imageUrl: './Album/dard.jpg', 
        title: 'dard', 
        text: 'Darshan rawal'
    },
    { 
        imageUrl: './Album/sajni.jpg', 
        title: 'Sajni', 
        text: 'Ram sampath, Arjit singh'
    },
    { 
        imageUrl: './Album/aashiqui2.jpg', 
        title: 'Aashiqui 2', 
        text: 'Mithoon, Ankit tiwari'
    },
];

const artistData = [
    {
        imageUrl: './Album/red.png', 
        title: 'Red',
        text: 'Taylor swift'
    },
    { 
        imageUrl: './Album/aashiqui2.jpg', 
        title: 'Aashiqui 2', 
        text: 'Mithoon, Ankit tiwari'
    },
    { 
        imageUrl: './Album/ekThaRaja.jpg', 
        title: 'Ek tha raja', 
        text: 'Baadshah'
    },
    { 
        imageUrl: './Album/dard.jpg', 
        title: 'dard', 
        text: 'Darshan rawal'
    },
    { 
        imageUrl: './Album/sajni.jpg', 
        title: 'Sajni', 
        text: 'Ram sampath, Arjit singh'
    },
    { 
        imageUrl: './Album/aashiqui2.jpg', 
        title: 'Aashiqui 2', 
        text: 'Mithoon, Ankit tiwari'
    },
];

// Function to create card HTML
function createCard(imageUrl, title, text,radius) {
    const cardClass = radius === 'album' ? 'album-card' : 'artist-card';
    return `
        <div class="col-md-2 mb-4">
            <div class="card ${cardClass}">
                <img src="${imageUrl}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${text}</p>
                </div>
            </div>
        </div>
    `;
}

// Function to populate cards
function populateAlbumCards() {
    const container = document.getElementById('Album-container');
    let cardsHtml = '';
    AlbumData.forEach(card => {
        cardsHtml += createCard(card.imageUrl, card.title, card.text,'album');
    });
    container.innerHTML = cardsHtml;
}
function populateArtistCards() {
    const container = document.getElementById('Artist-container');
    let cardsHtml = '';
    AlbumData.forEach(card => {
        cardsHtml += createCard(card.imageUrl, card.title, card.text,'artist');
    });
    container.innerHTML = cardsHtml;
}

// Call the populateCards function when the page loads
document.addEventListener('DOMContentLoaded', populateAlbumCards);
document.addEventListener('DOMContentLoaded', populateArtistCards);