import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

const NewsList = function ({ articles, fetchArticles, totalResults }) {
  return (
    <section className="news-list-container">
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchArticles}
        hasMore={articles.length < totalResults}
        loader={<h4 style={{ color: "white" }}>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center", color: "white" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={articles}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        {articles.map((data) => (
          <>{data.title && data.description && <NewsItem article={data} />}</>
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default NewsList;
