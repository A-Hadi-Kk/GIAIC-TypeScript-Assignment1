function make_album(artist: string, title: string, tracks?: number){
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Bilawal Bhutto", "Billo Rani"); 
let album2 = make_album("Aleem rk", "Cold Hours");
let album3 = make_album("Jokhay", "Therapy", 6);
console.log(album1);
console.log(album2);
console.log(album3);
