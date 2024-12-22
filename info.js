// info.js
const load=document.querySelector('.loading')


// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get game ID from localStorage
    const gameId = localStorage.getItem('gameId');
    
    console.log(gameId)
    // If we have a game ID, fetch the details
    if (gameId) {
        getGameDetails(gameId);
    }

    // Add close button functionality
    const closeBtn = document.querySelector('.btn-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            window.location.href = 'index.html'; // Return to main page
        });
    }
});

async function getGameDetails(gameId) {
    showLoading()
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bfe5c8f8b1msha0b2ebbac37b335p188cc3jsna188f914bfdc',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        if (response.ok) {
            const gameData = await response.json();
            displayGameDetails(gameData);
        }
    } catch (error) {
        console.error('Error fetching game details:', error);
    }

    hideLoading()
}

function displayGameDetails(gameData) {

    // Update title
    const titleElement = document.querySelector('.card-title');
    if (titleElement) {
        titleElement.textContent = `Title: ${gameData.title}`;
    }

    // Update image
    const imageElement = document.querySelector('.img-fluid');
    if (imageElement) {
        imageElement.src = gameData.thumbnail;
    }

    // Get all badge elements
    const badges = document.querySelectorAll('.badge.text-bg-info');
    
    // Update category/genre
    if (badges[0]) {
        badges[0].textContent = gameData.genre;
    }

    // Update platform
    if (badges[1]) {
        badges[1].textContent = gameData.platform;
    }

    // Update status
    if (badges[2]) {
        badges[2].textContent = gameData.status;
    }

    // Update description
    const descriptionElement = document.querySelector('.card-text');
    if (descriptionElement) {
        descriptionElement.textContent = gameData.description;
    }

    // Update game link
    const gameLinkElement = document.querySelector('.btn.btn-outline-warning');
    if (gameLinkElement) {
        gameLinkElement.href = gameData.game_url;
    }
}



function showLoading(){
    load.classList.remove('d-none')

}
function hideLoading(){
    load.classList.add('d-none')

}