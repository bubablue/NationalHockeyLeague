import { Box } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

export const News = () => {
  const [news, setNews] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);
  const [totalPages, setTotalPages] = React.useState<number>(0);
  const classes = useStyles()

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://www.reddit.com/r/hockey.json?limit=10&after=t3_${page}.json`)
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data.children);
        setTotalPages(data.data.dist);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [page]);
  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }
  return (
    <div>
      <h1>News</h1>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      {news.map((item: any) => {
        return (
          <Box className={classes.team}>
            <h2>{item.data.title}</h2>
            <p>{item.data.selftext}</p>
          </Box>
        );
      })}
    </div>
  );
};
export default News;
