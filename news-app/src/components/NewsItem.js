// {
//   "source": {
//       "id": "associated-press",
//       "name": "Associated Press"
//   },
//   "author": "JON GAMBRELL",
//   "title": "Israel raids and shuts down Al Jazeera’s bureau in Ramallah in the West Bank - The Associated Press",
//   "description": "Israeli troops have raided the offices of the satellite news network Al Jazeera in the Israeli-occupied West Bank. The troops ordered the bureau to shut down early Sunday amid a widening campaign by Israel targeting the Qatar-funded broadcaster as it covers t…",
//   "url": "https://apnews.com/article/israel-palestinians-al-jazeera-gaza-war-hamas-4abdb2969e39e7ad99dfbf9caa7bb32c",
//   "urlToImage": "https://dims.apnews.com/dims4/default/bbd5a4a/2147483647/strip/true/crop/1920x1080+0+2/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F73%2F1e%2Fde6057bdc12d1cae8f99cb19bc19%2F6e4ed1d4fa084cfe9887260936b1ed0f",
//   "publishedAt": "2024-09-22T08:13:00Z",
//   "content": "DUBAI, United Arab Emirates (AP) Israeli troops raided the offices of the satellite news network Al Jazeera in the Israeli-occupied West Bank early Sunday, ordering the bureau to shut down amid a wid… [+5969 chars]"
// }

const NewsItem = ({ article }) => {
  const {
    source,
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  } = article;
  const publishedDate = new Date(publishedAt);
  return (
    <a className="new-item-link" href={url} target="_blank">
      <div className="news-item-container">
        <div className="image-container">
          {urlToImage && (
            <img className="thumbnail" src={urlToImage} alt={"thumnail"} />
          )}
          <h1 className="title"> {title}</h1>
          {author && <p className="author">{author}</p>}
        </div>
        <div className="detail-container">
          <p>{description}</p>

          <p className="source"> {source.name}</p>
        </div>
      </div>
    </a>
  );
};

export default NewsItem;
