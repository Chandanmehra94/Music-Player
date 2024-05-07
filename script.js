const container = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
const searchBar = document.getElementById("search-bar");
const songsList = document.getElementById("songs-list");
var audios = ``;

// audios.play()

const songs = [
    { title: "Novocaine-Shiloh Dynasty", file: "Novacaine-Shiloh-Dynasty-One-More-Shot-Speed-Up-1.mp3" },
    { title: "A thousand Years", file: "Christina_Perri_-_A_Thousand_Years_CeeNaija.com_.mp3" },
    { title: "Tare gin - Mohit chouhan", file: "WhatsApp Audio 2023-10-20 at 11.39.22_f48e5038.mp3" },
    { title: "Enna sona - Arijit singh", file: "enna sona - arijit singh.mp3" },
    { title: "Chann kithan - ali sethi", file: "chann kithan - ali sehti.mp3" },
    { title: "sapna jahan - sonu nigam , neeti mohan", file: "sapna jahan.mp3" },
    { title: "aaoge jab tum - Rashid khan", file: "aaoge jab tum.mp3" }, 
    { title: "aayat- Arijit singh", file: "aayat - arijit singh.mp3" },
    { title: "aisey kyun - rekha bhardwaj", file: "aisey kyun.mp3" },
    { title: "alag aasman - anuv jain", file: "alag aasman - anuv jain.mp3" },
    { title: "comethrough - jeremy zucker", file: "comethrough.mp3" },
    { title: "Dil kyu ye mer shor kare - KK", file: "dil kyun ye mera shor kare.mp3" }, 
    { title: "fasle - aditya rikhari", file: "fasle aditya rikhri.mp3" },
    { title: "Fir le aaya dil - arijit singh", file: "fir le aaya dil.mp3" },
    { title: "get youo the moon - kina", file: "get you the moon.mp3" },
    { title: "Ghar - bharat chouhan", file: "ghar.mp3" },
    { title: "hawaayen - Arijit singh", file: "hawayien.mp3" },
    { title: "ishq - ali sethi", file: "ishq - ali sethi.mp3" },
    { title: "jaan nisaar - Arijit singh", file: "jaan nisaar remix.mp3" }, 
    { title: "tere bin - Raghav chaitanya", file: "kaise hua ye ke hum ji na sake tere bin.mp3" },
    { title: "kalle kalle - priya saraiya", file: "kalle kalle.mp3" },
    { title: "Khalasi - aditya gadhvi", file: "Khalasi(PagalWorld).mp3" },
    { title: "kho gaye hum kahan - jasleen royal", file: "kho gaye hum kaha.mp3" }, 
    { title: "laaya - mitraz ", file: "kyu lagte tum pass mere.mp3" }, 
    { title: "little do you know - alex & siera", file: "little do you know.mp3" },
    { title: "Mahrama - darshan rawal", file: "maharma .mp3" },
    { title: "Mai tumhara hua -  AR rahman", file: "mai tumhara - dil bechara.mp3" },
    { title: "manga yahi duaawan mai - yasser desai", file: "manga yahi duaawan me.mp3" }, 
    { title: "falling - trevor daniel", file: "my last me feel like .mp3" },
    { title: "playdate - melanie martinez", file: "playdate.mp3" },
    { title: "rangi saari - malini awasthi", file: "rangi saari gulabi.mp3" },
    { title: "ranjish hi sahi - ali sethi", file: "ranjish hi sahi - ali sethi.mp3" },
    { title: "runaway - aurora", file: "runaway - aurora.mp3" }, 
    { title: "samjhawan - Arijit singh", file: "samjhawan arijit singh.mp3" },
    { title: "tu hai ki nahi - Arijit singh", file: "tu hai ki nahi.mp3" },
    { title: "Tu Hai Kahan - AUR ", file: "Tu-Hai-Kahan(PaglaSongs).mp3" },
    { title: "rahogi meri - Arijit singh", file: "tum to rahogi meri.mp3" }, 
    { title: "until i found her (* for her) - stephen sanchez", file: "until i found her (sim) .mp3" },
    { title: "ye mera deewanapan hai - ali sethi", file: "ye mera deewanapan hai - ali sethi.mp3" },
    { title: "zahnaseeb - vishal shekhar", file: "zahnasib.mp3" },
    { title: "billo bagge da illenyan  - kaka", file: "Billo Bagge Billeyan Da Ki Karengi_128-(PagalWorld).mp3" }, 
   // { title: "Enna sona - Arijit singh", file: "ukulele" },
   // { title: "Enna sona - Arijit singh", file: "ukulele" },
   // { title: "Enna sona - Arijit singh", file: "ukulele" },
   // { title: "Enna sona - Arijit singh", file: "ukulele" }, 
   // { title: "Enna sona - Arijit singh", file: "ukulele" }, 
    //{ title: "Enna sona - Arijit singh", file: "ukulele" }, 
   
    // ... (other songs)
];


let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song.title;
   
    audio.src = `${songs[songIndex].file}`;
    cover.src = "C:\\Users\\Chandan Dehariya\\Desktop\\images.jpeg";
}


function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
audio.setAttribute("src",`${songs[songIndex].file}`)

    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
audio.setAttribute("src",`${songs[songIndex].file}`)

    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


function playSong() {
    container.classList.add("play");
    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause");
    audio.play();

}

function pauseSong() {
    container.classList.remove("play");
    playBtn.querySelector("i.fa").classList.add("fa-play");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");
    audio.pause();

}
// Play/Pause Button
playBtn.addEventListener("click", () => {
    const isPlaying = container.classList.contains("play");
    console.log(container.classList.contains("play"))
    if (isPlaying) {
        
        pauseSong();
    } else {
        playSong();
    }
});
// Change Song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/Song Update
audio.addEventListener("timeupdate", updateProgress);

// Click On Progress Bar
progressContainer.addEventListener("click", setProgress);

// Song End
audio.addEventListener("ended", nextSong);

// Search bar functionality
searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    const filteredSongs = songs.filter((song) =>
        song.title.toLowerCase().includes(searchText)
        );
        displaySongs(filteredSongs);
});

// Display the list of songs
function displaySongs(songsToDisplay) {
    songsList.innerHTML = "";
    songsToDisplay.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${song.title}`;
        li.addEventListener("click", () => {
            songIndex = songs.indexOf(song);
            loadSong(song);
            playSong();
        });
        songsList.appendChild(li);
    });
}

// Initial song list display
displaySongs(songs);

// Get the playlist div
const playlist = document.querySelector('#playlist');

// Get the playlist items ul
const playlistItems = document.querySelector('#playlist-items');

// Get the songs list ul
const songsLists = document.querySelector('#songs-list');

// Get the add to playlist button
const addToPlaylistButton = document.querySelector('#add-to-playlist');

// Add an event listener to the add to playlist button
addToPlaylistButton.addEventListener('click', () => {
  // Get the selected song
  const selectedSong = document.querySelector('.song.selected');

  // Create a new playlist item
  const playlistItems = document.createElement('li');

  // Set the playlist item's text to the selected song's title
  playlistItems.textContent = selectedSong.querySelector('.title').textContent;

  // Add the playlist item to the playlist
  playlistItems.appendChild(playlistItems);
});

// Add an event listener to the playlist items
playlistItems.addEventListener('click', (event) => {
  // Get the playlist item that was clicked
  const playlistItem = event.target;

  // Get the song title
  const songTitle = playlistItem.textContent;

  // Find the song in the songs list
  const song = songsLists.querySelector('.song[title="' + songTitle + '"]');

  // Select the song
  song.classList.add('selected');
});


