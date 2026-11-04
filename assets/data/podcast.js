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
    month: "Setmana del 2 de novembre",
    artist: "The Waterboys",
    album: "Fisherman's Blues",
    year: 1988,
    cover: "",
    spotify: "https://open.spotify.com/album/0lIGBQj12ehBETiO01zUZx",
    note: "Un disc que va contra el seu temps, com el nostre cotxe de la setmana: el BMW 2002, que va néixer perquè dos enginyers de BMW es van posar un motor de dos litres al seu propi cotxe."
  },
  // Newest first. spotifyEpisode = "https://open.spotify.com/episode/XXXX"
  // Leave spotifyEpisode "" while an episode is not on Spotify yet: no player is shown,
  // only the note "Àudio aviat disponible". Paste the link later to turn the player back on.
  // { num: 1, title: "", date: "2026-11-01", summary: "", spotifyEpisode: "", youtube: "", records: ["Artista - Disc (1978)"] }
  episodes: [
    {
      num: 4,
      title: "El 2002 i el blues del pescador",
      date: "2026-11-01",
      summary: "Quart episodi de Revolucions FM, el pòdcast d'AC Classics Montgrí sobre motor i vinil! En Marc ens presenta el BMW 2002, la berlina petita que va néixer perquè dos enginyers de la marca es van posar un motor de dos litres al seu propi cotxe, i el 2002 turbo que va anar contra el seu temps. I el junta amb Fisherman's Blues, el disc del 1988 en què els Waterboys canvien el rock d'estadi pel violí i la costa d'Irlanda.",
      spotifyEpisode: "",
      youtube: "",
      records: ["The Waterboys - Fisherman's Blues (1988)"]
    },
    {
      num: 3,
      title: "Fiesta a tot volum",
      date: "2026-10-25",
      summary: "Tercer episodi de Revolucions FM, el pòdcast d'AC Classics Montgrí sobre motor i vinil! En Marc celebra els 50 anys del primer Ford Fiesta, l'utilitari que l'octubre del 1976 va començar a sortir de la fàbrica d'Almussafes, i el junta amb l'Eurodisco de Colònia: Hot Girls, Bad Boys, el primer disc dels Bad Boys Blue, el de «You're a Woman». Fiesta a tot volum!",
      spotifyEpisode: "",
      youtube: "",
      records: ["Bad Boys Blue - Hot Girls, Bad Boys (1985)"]
    },
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
