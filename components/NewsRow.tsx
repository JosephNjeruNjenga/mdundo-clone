import MoreBtn from "./MoreBtn";
import NewsCard from "./NewsCard";

interface NewsRowProps {
  data: Record<string, any>[];
}
const NewsRow: React.FC<NewsRowProps> = ({ data }) => {
  return (
    <div className="lg:w-full lg:max-w-[1000px]">
      <h2 className="text-4xl uppercase tracking-[0.4px] lg:text-[40px] pl-1 small:pl-2  lg:pl-[20px] mb-9 text-gray-700">
        latest news
      </h2>
      <div className="w-full flex lg:ml-0 z-10 flex-nowrap lg:flex-wrap lg:overflow-visible overflow-x-scroll">
        {data.map((article, index: number) => (
          <NewsCard
            key={index}
            title={article.title}
            date={article.date}
            image={article.image}
          />
        ))}
      </div>
      <MoreBtn display="More News" />
    </div>
  );
};

export default NewsRow;
