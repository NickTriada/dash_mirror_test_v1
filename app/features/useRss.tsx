import { useEffect, useState } from "react";
import * as rssParser from "react-native-rss-parser";

export default function useRss() {
  const [data, setRss] = useState<rssParser.Feed | null>(null);

  useEffect(() => {
    fetch("https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", {
      headers: {
        Origin: "*", // Your website's domain
        // Other headers, if needed
      },
    })
      .then((response) => response.text())
      .then((responseText) => rssParser.parse(responseText))
      .then((rss) => {
        setRss(rss);
      });
  }, []);

  return data;
}
