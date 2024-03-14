function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Bilawal Bhutto", "Billo Rani");
var album2 = make_album("Aleem rk", "Cold Hours");
var album3 = make_album("Jokhay", "Therapy", 6);
console.log(album1);
console.log(album2);
console.log(album3);
