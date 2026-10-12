// Revolucions FM: fill this in when the podcast launches. Empty values = section hidden or "Properament".
window.PODCAST = {
  // e.g. "https://open.spotify.com/show/XXXX" (Spotify for Creators show link)
  spotifyShow: "",
  // e.g. "https://www.youtube.com/@ACClassicsMontgri" or a playlist URL
  youtube: "",
  // First episode date, "YYYY-MM-DD", or "" if not decided
  launchDate: "",
  // Disc de la setmana: { month: "Setmana del 12 d'octubre", artist: "", album: "", year: 1975, cover: "images/...", note: "", carYear: "" } or null
  discDelMes: {
    month: "Setmana del 12 d'octubre",
    artist: "Pink Floyd",
    album: "The Dark Side of the Moon",
    year: 1973,
    cover: "",
    spotify: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv",
    note: "El disc que sonava a tots els cotxes dels setanta. Del 1973, just quan el Fiat X1/9, el nostre cotxe del mes, acabava de sortir al carrer."
  },
  // Newest first. spotifyEpisode = "https://open.spotify.com/episode/XXXX"
  // { num: 1, title: "", date: "2026-11-01", summary: "", spotifyEpisode: "", youtube: "", records: ["Artista - Disc (1978)"] }
  episodes: []
};
