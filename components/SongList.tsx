import MoreBtn from "./MoreBtn";
import Song from "./Song";

interface SongListProps {
  display: boolean;
  // data: Array<object>;
}

const SongList: React.FC<SongListProps> = ({display}) => {
  return (
    <div className="lg:max-w-[1000px]">
      <h2
        className={`uppercase text-gray-700 pl-1 text-2xl small:text-2xl medium:text-3xl pb-4 lg:pb-8 ${
          display ? "" : "hidden"
        }`}
      >
        top songs
      </h2>

      <Song
        title="diamond platnumz baikoko mix"
        artist="bongo mix 2023 - DJ BEE✔️"
        time="12:34"
        genre="DJ Mixes"
      />
      <Song
        title="Jay Melody – Nakupenda #ExclusiveMix #01 #MdundoMixes"
        artist="Bongo Mix 2023 - DJ BEE ✔️"
        time="12:07"
        genre="DJ Mixes"
      />
      <Song
        title="Romantic Love songs Vol.5 ft. Rema, Ajebutter22, Simi, Yemi Alade, C4pedro"
        artist="DJ LYTA Mixes✔️"
        time="09:55"
        genre="DJ Mixes"
      />
      <Song
        title="Gospel Songs Vol. 1 ft. Sinach, Kwaya ya Arusha, Ruth matete, Rose muhando, Latest Gospel Dj Mixes"
        artist="Nyimbo Za Injili | Gospel Songs |"
        time="11:01"
        genre="DJ Mixes"
      />
      <Song
        title="Rayvanny, Fikfameika, Fena Gitu, Boondocks gang"
        artist="DJ LYTA Mixes✔️"
        time="12:02"
        genre="DJ Mixes"
      />
      <Song
        title="Best of Lucky Dube _ 2023 Reggae Mix"
        artist="REGGAE Mix 2023 - Mc FUll.STOP ✔️"
        time="10:55"
        genre="DJ Mixes"
      />
      <Song
        title="Latest Bongo 2023 Mix _ Jay Melody, Kusah"
        artist="Bongo Mix 2023 - DJ BEE ✔️"
        time="11:38"
        genre="DJ Mixes"
      />
      <Song
        title="Calm Down Mix ft Rema"
        artist="DJ Jaydee DJ Mixes"
        time="15:31"
        genre="DJ Mixes"
      />
      <Song
        title="alikiba mahaba Extended"
        artist="Dj Jackdee"
        time="03:28"
        genre="DJ Mixes"
      />
      <Song
        title="Tanzania Gospel Mix #01 : Best of Christopher mwahangila."
        artist="Nyimbo Za Injili | Gospel Songs |"
        time="13:09"
        genre="DJ Mixes"
      />
      <MoreBtn display={display} />
    </div>
  );
};

export default SongList;
