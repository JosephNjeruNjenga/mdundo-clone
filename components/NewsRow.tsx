import MoreBtn from "./MoreBtn";
import NewsCard from "./NewsCard";

interface NewsRowProps {
  data: Record<string, any>[];
}
const NewsRow: React.FC<NewsRowProps> = ({ data }) => {
  return (
    <div className="lg:w-full lg:max-w-[1000px] px-5">
      <h2 className="text-4xl font-semibold uppercase tracking-[0.4px] lg:text-[40px] mb-9 text-gray-700">
        latest news
      </h2>
      <div className="overflow-x-visible overflow-y-visible">
        <div className="flex -ml-[10px] -mr-[10px] lg:-ml-[10px] lg:-mr-[10px] z-10 flex-nowrap lg:flex-wrap lg:overflow-visible overflow-x-scroll ">
          {data.map((article, index: number) => (
            <NewsCard
              key={index}
              title={article.title}
              date={article.date}
              image={article.image}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <MoreBtn display="More News" />
        </div>
      </div>
    </div>
  );
};

export default NewsRow;
