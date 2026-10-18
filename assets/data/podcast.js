// Revolucions FM: fill this in when the podcast launches. Empty values = section hidden or "Properament".
window.PODCAST = {
  // e.g. "https://open.spotify.com/show/XXXX" (Spotify for Creators show link)
  spotifyShow: "https://open.spotify.com/show/5pncXoIyNKvPvPCb5U2esF",
  // e.g. "https://www.youtube.com/@ACClassicsMontgri" or a playlist URL
  youtube: "",
  // First episode date, "YYYY-MM-DD", or "" if not decided
  launchDate: "2026-10-12",
  // Disc de la setmana: { month: "Setmana del 12 d'octubre", artist: "", album: "", year: 1975, cover: "images/...", note: "", carYear: "" } or null
  discDelMes: {
    month: "Setmana del 12 d'octubre",
    artist: "Pink Floyd",
    album: "The Dark Side of the Moon",
    year: 1973,
    cover: "",
    spotify: "https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv",
    note: "Del 1973, com el nostre cotxe de la setmana: el Fiat X1/9."
  },
  // Newest first. spotifyEpisode = "https://open.spotify.com/episode/XXXX"
  // { num: 1, title: "", date: "2026-11-01", summary: "", spotifyEpisode: "", youtube: "", records: ["Artista - Disc (1978)"] }
  episodes: [
    {
      num: 2,
      title: "El Lancia Fulvia i Il mio canto libero",
      date: "2026-10-18",
      summary: "Segon episodi de Revolucions FM, el pòdcast d'AC Classics Montgrí sobre motor i vinil! En Marc ens porta a la Itàlia del 1972: el cotxe de la setmana, el Lancia Fulvia, el petit coupé de motor V4 que aquell any va guanyar el Ral·li de Montecarlo, i el disc de la setmana, Il mio canto libero de Lucio Battisti.",
      spotifyEpisode: "https://open.spotify.com/episode/5OfWsfwsz3Gd4Lp37BgObI",
      youtube: "",
      records: ["Lucio Battisti - Il mio canto libero (1972)"]
    },
    {
      num: 1,
      title: "El Fiat X1/9 i The Dark Side of the Moon",
      date: "2026-10-12",
      summary: "Estrenem Revolucions FM, el pòdcast d'AC Classics Montgrí sobre motor i vinil! En aquest primer episodi, en Marc ens porta dues joies del 1973: el cotxe de la setmana, el Fiat X1/9 de Gandini, un superesportiu de butxaca amb sostre targa, i el disc de la setmana, The Dark Side of the Moon de Pink Floyd.",
      spotifyEpisode: "https://open.spotify.com/episode/6RHr1z9K4vD87YCLTdybgX",
      youtube: "",
      records: ["Pink Floyd - The Dark Side of the Moon (1973)"]
    }
  ]
};
