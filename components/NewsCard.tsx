interface NewsCardProps {
  title: string;
  date: string;
  image: string;
}
const NewsCard: React.FC<NewsCardProps> = ({ title, date, image }) => {
  return (
    <div className="flex flex-col px-[10px] mb-9 w-[245px]">
      <div className="cursor-pointer shadow-md rounded-t-[3px] overflow-hidden w-[225px] h-[160px]">
        <img className="w-full h-full hover:scale-[1.1] transition duration-700 ease object-cover" src={image} alt="news" />
      </div>
      <div className="flex flex-col shadow-md rounded-b-[3px] px-[10px] pt-[10px] pb-5 bg-white">
        <span className="text-[#47413c] cursor-pointer hover:underline font-semibold text-sm mb-[5px]">
          {title}
        </span>
        <span className="text-xs text-[#9a9999]">{date}</span>
      </div>
    </div>
  );
};

export default NewsCard;
