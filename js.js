// First, ensure all elements exist
document.addEventListener('DOMContentLoaded', () => {
    const mmorpg = document.getElementById('mmorpg');
    const shooter = document.getElementById('shooter');
    const sailing = document.getElementById('sailing');
    const permadeath = document.getElementById('permadeath');
    const superhero = document.getElementById('superhero');
    const pixel = document.getElementById('pixel');
  
    

    // Correct way to add a class
    if (mmorpg) {
        mmorpg.classList.add('color');
        getApi('mmorpg');
    }

    // Add event listeners only if elements exist
    if (mmorpg) {
        mmorpg.addEventListener('click', (e) => {
             mmorpg.classList.add('color');
            shooter.classList.remove('color');
            pixel.classList.remove('color');
            superhero.classList.remove('color');
            permadeath.classList.remove('color');
            sailing.classList.remove('color');
            getApi(e.target.id);
        });
    }

    if (shooter) {
        shooter.addEventListener('click', (e) => {
            mmorpg.classList.remove('color');
            shooter.classList.add('color');
            pixel.classList.remove('color');
            superhero.classList.remove('color');
            permadeath.classList.remove('color');
            sailing.classList.remove('color');
            getApi(e.target.id);
        });
    }

    if (pixel) {
        pixel.addEventListener('click', (e) => {
            mmorpg.classList.remove('color');
            shooter.classList.remove('color');
            pixel.classList.add('color');
            superhero.classList.remove('color');
            permadeath.classList.remove('color');
            sailing.classList.remove('color');
            getApi(e.target.id);
        });
    }

    if (superhero) {
        superhero.addEventListener('click', (e) => {
            mmorpg.classList.remove('color');
            shooter.classList.remove('color');
            pixel.classList.remove('color');
            superhero.classList.add('color');
            permadeath.classList.remove('color');
            sailing.classList.remove('color');
            getApi(e.target.id);
        });
    }

    if (permadeath) {
        permadeath.addEventListener('click', (e) => {
            mmorpg.classList.remove('color');
            shooter.classList.remove('color');
            pixel.classList.remove('color');
            superhero.classList.remove('color');
            permadeath.classList.add('color');
            sailing.classList.remove('color');
            getApi(e.target.id);
        });
    }

    if (sailing) {
        sailing.addEventListener('click', (e) => {
            mmorpg.classList.remove('color');
            shooter.classList.remove('color');
            pixel.classList.remove('color');
            superhero.classList.remove('color');
            permadeath.classList.remove('color');
            sailing.classList.add('color');
            getApi(e.target.id);
        });
    }
});

async function getApi(a) {
    showLoading()
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bfe5c8f8b1msha0b2ebbac37b335p188cc3jsna188f914bfdc',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
       const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${a}`, options);
        if (response.ok) {
            const data = await response.json();
            
            display(data);
        }

     hideLoading()
}

function display(a){
    let cartona=''
    for(let i=0;i<a.length;i++){
        cartona+=`
        <a href="./info.html">
        <div class="col "id=${a[i].id}>
            <div class="card" style="width: 100%;" id=${a[i].id}>
                <div class="img p-3">
                <img src="${a[i].thumbnail}" class="card-img-top img" id=${a[i].id} alt="...">
            </div>
                <div class="card-body " id=${a[i].id}>
                    <div class="d-flex justify-content-between pb-2" id=${a[i].id}>
                        <span> <h5 class="card-title" id=${a[i].id}>${a[i].title}</h5></span>
                        <span><button class="bg-primary" id=${a[i].id}>free</button></span>
                    </div>
                  <p class="card-text text-center" id=${a[i].id}>${a[i].short_description}</p>
                </div>
                
                <footer class="card-footer small d-flex justify-content-between card-body"id=${a[i].id}>
                  <span id=${a[i].id}>${a[i].genre}</span>
                  <span id=${a[i].id}>${a[i].platform}</span>
                </footer>
              </div>
        </div>
    </a>
        
        `
    }
    document.getElementById('show').innerHTML=cartona;
}

// js.js
function gameId() {
    document.addEventListener('click', (e) => {
        const clickedId = e.target.id;
        if (clickedId && !isNaN(clickedId)) { 
            localStorage.setItem('gameId', clickedId);
            console.log( clickedId);
        }
    });
}
v=gameId()
console.log(v)




const load=document.querySelector('.loading')
function showLoading(){
    load.classList.remove('d-none')
}
function hideLoading(){
    load.classList.add('d-none')

}