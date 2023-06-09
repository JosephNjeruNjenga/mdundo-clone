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

interface NewsProps {
  title: string;
  date: string;
  image: string;
}

interface ArtistSongsProps {
  title: string;
  time: string;
  genre: string;
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
    name: "KRG THE DON",
    image:
      "https://mdundo.com/media/picture/301659_aWEhFH7sGppCdcub8iWEkbOockgW_s.jpg",
  },
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

export const news: Array<NewsProps> = [
  {
    title: "New Music Kenya: Willy Paul Ft. Miss P 'Popo'",
    date: "05 May",
    image: "https://mdundo.com/media/article-thumbs/t43982.jpg",
  },
  {
    title: "NYIMBO ZA TANZANIA ZINAZOFANYA VIZURI KENYA WIKI HII.",
    date: "05 May",
    image: "https://mdundo.com/media/article-thumbs/t43981.jpg",
  },
  {
    title: "Anjella Atangaza Ujio Wake Mpya",
    date: "05 May",
    image: "https://mdundo.com/media/article-thumbs/t43980.jpg",
  },
  {
    title: "New Music Kenya: Savara 'Reggae Ya Kinyozi' Remix",
    date: "02 May",
    image: "https://mdundo.com/media/article-thumbs/t43959.jpg",
  },
  {
    title: "Whozu Aachia  “VAVAYO” Video Akiwa na Marioo",
    date: "02 May",
    image: "https://mdundo.com/media/article-thumbs/t43958.jpg",
  },
  {
    title: "Nyimbo Mpya Tanzania Wiki Hii",
    date: "02 May",
    image: "https://mdundo.com/media/article-thumbs/t43957.jpg",
  },
  {
    title: "New Music Kenya: King Kaka Ft. Solomon Mkubwa 'Nakimbilia Kwako'",
    date: "02 May",
    image: "https://mdundo.com/media/article-thumbs/t43956.jpg",
  },
  {
    title:
      "Prince Indah's New Album 'Puonj Mag Dak' Records Huge Success Days After Release",
    date: "02 May",
    image: "https://mdundo.com/media/article-thumbs/t43955.jpg",
  },
];
export const featured: Array<SongProps> = [
  {
    title: "IDAN Vibes- Rema, Joeboy",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "40:07",
    genre: "DJ Mixes",
  },
  {
    title: "Have A Good Day DJ Mix - Johnny Drille, Spyro, Tiwa Savage",
    artist: "Naija Mixes",
    time: "21:10",
    genre: "DJ Mixes",
  },
  {
    title: "Trending DJ Mix - Johnny Drille, Magixx, Bayanni",
    artist: "Mavin Mixes",
    time: "19:56",
    genre: "DJ Mixes",
  },
];
export const artistSongs: Array<ArtistSongsProps> = [
  {
    title: "How are you (My Friend)",
    time: "3:16",
    genre: "Afro Pop",
  },
  {
    title: "Loving is Harder",
    time: "2:29",
    genre: "Afro Pop",
  },
  {
    title: "Forever",
    time: "3:46",
    genre: "Afro Pop",
  },
  {
    title: "Shine",
    time: "4:40",
    genre: "Afro Pop",
  },
  {
    title: "Before I Let Go",
    time: "2:36",
    genre: "Afro Pop",
  },
  {
    title: "Mystery Girl",
    time: "2:33",
    genre: "Afro Pop",
  },
  {
    title: "Sweet As A Mother's Love",
    time: "3:16",
    genre: "Afro Pop",
  },
  {
    title: "Count On You",
    time: "3:57",
    genre: "Afro Pop",
  },
  {
    title: "Driving In The Rain feat Ladipoe",
    time: "2:45",
    genre: "Afro Pop",
  },
  {
    title: "Journey Of Our Lives  ft Adekunle Gold",
    time: "3:48",
    genre: "Afro Pop",
  },
  {
    title: "Only God Knows (Beautiful Mind)",
    time: "3:10",
    genre: "Afro Pop",
  },
  {
    title: "Papa",
    time: "3:42",
    genre: "Afro Pop",
  },
  {
    title: "Bad Dancer",
    time: "3:52",
    genre: "Afro Pop",
  },
  {
    title: "Sell My Soul",
    time: "3:39",
    genre: "Afro Pop",
  },
  {
    title: "Come In The Light feat Ayra Starr",
    time: "3:26",
    genre: "Afro Pop",
  },
  {
    title: "Ova feat Don Jazzy",
    time: "3:23",
    genre: "Afro Pop",
  },
  {
    title: "My Kind Of Brown",
    time: "3:41",
    genre: "Afro Pop",
  },
  {
    title: "Ludo",
    time: "2:42",
    genre: "Afro Pop",
  },
  {
    title: "Finding Efe",
    time: "3:00",
    genre: "Afro Pop",
  },
];

export const artistNews: Array<NewsProps> = [
  {
    title:
      "Johnny Drille Releases First Single of 2023 'Believe Me' (Download)",
    date: "11 April",
    image: "https://mdundo.com/media/article-thumbs/t43715.jpg",
  },
  {
    title: "Why ‘How Are You’ by Johnny Drille Has Been Successful",
    date: "28 February",
    image: "https://mdundo.com/media/article-thumbs/t43153.jpg",
  },
  {
    title: "Johnny Drille Releases Valentine Day Special For Singles - Listen",
    date: "14 February",
    image: "https://mdundo.com/media/article-thumbs/t38284.jpg",
  },
  {
    title: "Free Download: Johnny Drille - Before We Fall Asleep Album",
    date: "08 September",
    image: "https://mdundo.com/media/article-thumbs/t34786.jpg",
  },
  {
    title: "Johnny Drille Holds Pyjamas Themed Album Listening Party (Photos)",
    date: "30 August",
    image: "https://mdundo.com/media/article-thumbs/t34520.jpg",
  },
  {
    title: "New Single Release Nigeria By Johnny Drille 'Something Better'",
    date: "26 March",
    image: "https://mdundo.com/media/article-thumbs/t19733.jpg",
  },
];

export const playlistSongs: Array<SongProps> = [
  {
    title: "Trending Mix 2022",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "14:57",
    genre: "DJ Mixes",
  },
  {
    title: "My Friend",
    artist: "Bella Shmurda",
    time: "3:03",
    genre: "Afro Pop",
  },
  {
    title: "Latest Afropop Mix",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "15:04",
    genre: "DJ Mixes",
  },
  {
    title: "Baby Riddim",
    artist: "FAVE",
    time: "3:14",
    genre: "R&B",
  },
  {
    title: "Hot Mix Naija",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "15:33",
    genre: "DJ Mixes",
  },
  {
    title: "New Hot Mix",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "13:01",
    genre: "DJ Mixes",
  },
  {
    title: "Ozumba Mbadiwe",
    artist: "Ozumba Mbadiwe",
    time: "3:32",
    genre: "Afro Pop",
  },
  {
    title: "Fresh DJ Mix",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "13:01",
    genre: "DJ Mixes",
  },
  {
    title: "Latest Afropop Mix 2022",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "15:11",
    genre: "DJ Mixes",
  },
  {
    title: "Mercy Chinwoo, Pv Idemudia, Janet Otieno Gospel DJ Mix #DJMixes",
    artist: "Nigerian Gospel DJ Mixes ✔️",
    time: "14:49",
    genre: "DJ Mixes",
  },
  {
    title: "Bad Gurl",
    artist: "Nellamich",
    time: "2:51",
    genre: "Afro Pop",
  },
  {
    title: "Soundgasm",
    artist: "Rema",
    time: "3:24",
    genre: "Afro Pop",
  },
  {
    title: "Running To You ft. Simi",
    artist: "Chiké",
    time: "3:11",
    genre: "Pop",
  },
  {
    title: "2022 DJ Mixtape",
    artist: "Afrobeats DJ Mixes ✔️",
    time: "15:07",
    genre: "DJ Mixes",
  },
];