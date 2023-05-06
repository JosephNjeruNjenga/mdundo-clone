interface SongProps {
  title: string;
  artist: string;
  time: string;
  genre: string;
}

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}

interface ArtistsProps {
  name: string;
  image: string;
}

export const djMixes: Array<SongProps> = [
  {
    title: "diamond platnumz baikoko mix",
    artist: "bongo mix 2023 - DJ BEE✔️",
    time: "12:34",
    genre: "DJ Mixes",
  },
  {
    title: "Jay Melody – Nakupenda #ExclusiveMix #01 #MdundoMixes",
    artist: "Bongo Mix 2023 - DJ BEE ✔️",
    time: "12:07",
    genre: "DJ Mixes",
  },
  {
    title:
      "Romantic Love songs Vol.5 ft. Rema, Ajebutter22, Simi, Yemi Alade, C4pedro",
    artist: "DJ LYTA Mixes✔️",
    time: "09:55",
    genre: "DJ Mixes",
  },
  {
    title:
      "Gospel Songs Vol. 1 ft. Sinach, Kwaya ya Arusha, Ruth matete, Rose muhando, Latest Gospel Dj Mixes",
    artist: "Nyimbo Za Injili | Gospel Songs |",
    time: "11:01",
    genre: "DJ Mixes",
  },
  {
    title: "Rayvanny, Fikfameika, Fena Gitu, Boondocks gang",
    artist: "DJ LYTA Mixes✔️",
    time: "12:02",
    genre: "DJ Mixes",
  },
  {
    title: "Best of Lucky Dube _ 2023 Reggae Mix",
    artist: "REGGAE Mix 2023 - Mc FUll.STOP ✔️",
    time: "10:55",
    genre: "DJ Mixes",
  },
  {
    title: "Latest Bongo 2023 Mix _ Jay Melody, Kusah",
    artist: "Bongo Mix 2023 - DJ BEE ✔️",
    time: "11:38",
    genre: "DJ Mixes",
  },
  {
    title: "Calm Down Mix ft Rema",
    artist: "DJ Jaydee DJ Mixes",
    time: "15:31",
    genre: "DJ Mixes",
  },
  {
    title: "alikiba mahaba Extended",
    artist: "Dj Jackdee",
    time: "03:28",
    genre: "DJ Mixes",
  },
  {
    title: "Tanzania Gospel Mix #01 : Best of Christopher mwahangila.",
    artist: "Nyimbo Za Injili | Gospel Songs |",
    time: "13:09",
    genre: "DJ Mixes",
  },
];

export const topSongs: Array<SongProps> = [
  {
    title: "Believe Me",
    artist: "Johnny Drille",
    time: "03:31",
    genre: "Afro Pop",
  },
  {
    title: "Shugga Daddy",
    artist: "JUX",
    time: "04:36",
    genre: "Afro Pop",
  },
  {
    title: "Rush",
    artist: "Ayra Starr",
    time: "03:05",
    genre: "Afro Pop",
  },
  {
    title: "Happy",
    artist: "Kizz daniel",
    time: "02:45",
    genre: "Hip-Hop",
  },
  {
    title: "Ask About Me",
    artist: "Mohbad",
    time: "02:55",
    genre: "Afro-Beat",
  },
  {
    title: "diamond platnumz baikoko mix",
    artist: "bongo mix 2023 - DJ BEE✔️",
    time: "12:34",
    genre: "DJ Mixes",
  },
  {
    title: "Sability",
    artist: "Ayra Starr",
    time: "02:46",
    genre: "World",
  },
  {
    title: "Soso",
    artist: "Omah Lay",
    time: "03:03",
    genre: "Afro Pop",
  },
  {
    title: "Divai - Mercy Masika & Christina Shusho",
    artist: "Mercy Masika",
    time: "03:52",
    genre: "Gospel",
  },
  {
    title: "Ayayaya ft Saxablaster",
    artist: "Boy Sean",
    time: "02:44",
    genre: "Naija",
  },
];

export const playlists: Array<CardProps> = [
  {
    title: "Hot Party Mixes",
    subtitle: "118",
    image: "https://mdundo.com/media/playlist/39446_LzbTNJMX_t.jpg",
  },
  {
    title: "Fik Fameika | Exclusive",
    subtitle: "38",
    image: "https://mdundo.com/media/playlist/14571_InUk25QK_t.jpg",
  },
  {
    title: "E choke DJ Mix",
    subtitle: "87",
    image: "https://mdundo.com/media/playlist/44490_fQM0mqL4_t.jpg",
  },
  {
    title: "MAD Exclusive",
    subtitle: "129",
    image: "https://mdundo.com/media/playlist/11742_myzVlgLS_t.jpg",
  },
  {
    title: "Boutross Exclusive",
    subtitle: "39",
    image: "https://mdundo.com/media/playlist/5927_p8VidUyG_t.jpg",
  },
];

export const topArtists: Array<ArtistsProps> = [
  {
    name: "Lucky Dube",
    image:
      "https://mdundo.com/media/picture/171070_FHRO8gXTohyeXdpIDCOm8jjPr9PW_s.jpg",
  },
  {
    name: "Ayra Starr",
    image:
      "https://mdundo.com/media/picture/235084_wdh2wxQtcWIVUkrgm2y1lEYGoM4K_s.jpg",
  },
  {
    name: "Kizz Daniel",
    image:
      "https://mdundo.com/media/picture/146141_76LZyIWWhJhBR6aVoKirD6kLE0oL_s.jpg",
  },
  {
    name: "Bongo Mix",
    image:
      "https://mdundo.com/media/picture/145727_fTrUjImmRRUt2FbjvwcEUP6Yx4za_s.jpg",
  },
  {
    name: "Omah Lay",
    image:
      "https://mdundo.com/media/picture/188909_q9rjnvar7WNQLHUqO1TVnkZNy4Am_s.jpg",
  },
  {
    name: "Baraka Oscar",
    image:
      "https://mdundo.com/media/picture/109063_7Ccf9wFP6zhcBEgKBMW1S0R0J6ja_s.jpg",
  },
  {
    name: "Rema",
    image:
      "https://mdundo.com/media/picture/151004_070Fyp86aKRFfSlLtUK4ZvJvkvYX_s.jpg",
  },
  {
    name: "Dj Lyta Mixes✔️",
    image:
      "https://mdundo.com/media/picture/6790_505wAN04kwFphgWR2qOaMrkp1KEk_s.jpg",
  },
  {
    name: "Victony",
    image:
      "https://mdundo.com/media/picture/264280_rt9BlDZpmkFvexB5uEVsF6cdaLKj_s.jpg",
  },
];
export const newArtists: Array<ArtistsProps> = [
  {
    name: "Vodacom Uni",
    image:
      "https://mdundo.com/media/picture/279753_lcBO2qgwPeDYPnBF2hW9IgLAOa5U_s.jpg",
  },
  {
    name: "Boy sean",
    image:
      "https://mdundo.com/media/picture/19840_hzV1ku0klpuaDhbBlDcx9jxnUW5z_s.jpg",
  },
  {
    name: "Danny Nanone",
    image:
      "https://mdundo.com/media/picture/301148_C9BpuzFFEWKpymSFpxEMFSbVQaGJ_s.jpg",
  },
  {
    name: "Karole Kasita",
    image:
      "https://mdundo.com/media/picture/251419_37JXU3A2ENW0CHAII0AkL5r9oFg6_s.jpg",
  },
];
