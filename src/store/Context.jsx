import { createContext, useState } from "react";

const Context = createContext({
  shows: {
    all: [],
    trending: [],
    movies: [],
    tvShows: [],
    isBookmarked: [],
  },
  bookMarkedShows: [],
  setShows: () => {},
  setFilteredShows: () => {},
  filter: "",
  cleanFilter: () => {},
  setFilter: (data) => {},
  filterShows: (data) => {},
  handleBookMark: (data) => {},
});

export const ContextProvider = (props) => {
  const [shows, setShows] = useState({
    all: [],
    trending: [],
    movies: [],
    tvShows: [],
    isBookmarked: [],
  });
  const [filteredShows, setFilteredShows] = useState({
    all: [],
    trending: [],
    movies: [],
    tvShows: [],
    isBookmarked: [],
  });
  const [filter, setFilter] = useState("");

  const onSetShows = (data) => {
    const tvShows = data.filter(({ category }) => category === "TV Series");
    const movies = data.filter(({ category }) => category === "Movie");
    const trending = data.filter(({ isTrending }) => isTrending);
    const isBookmarked = data.filter(({ isBookmarked }) => isBookmarked);

    setShows((prev) => {
      return {
        ...prev,
        all: data,
        trending: trending,
        movies: movies,
        tvShows: tvShows,
        isBookmarked: isBookmarked,
      };
    });
  };

  const onFilterShows = (type, filter) => {
    const cleanedFilter = filter.toLowerCase().trim();

    setFilteredShows((prev) => {
      return {
        ...prev,
        [`${type}`]: shows[`${type}`].filter(({ title }) => {
          return title.toLowerCase().includes(cleanedFilter);
        }),
      };
    });
  };
  const onSetFilter = (data) => {
    setFilter(data);
  };

  const onCleanFilter = () => {
    setFilter("");
    setFilteredShows(shows);
  };

  const handleBookMark = (title) => {
    const oldElement = filteredShows.all.find(
      (element) => element.title === title
    );
    const newElement = {
      ...oldElement,
      isBookmarked: !oldElement.isBookmarked,
    };

    const newFilteredData = { all: [], tvShows: [], movies: [] };
    const fullShowsData = shows.all.map((show) => {
      if (show.title === title) {
        return newElement;
      }
      return show;
    });

    const isBookmarked = fullShowsData.filter(
      ({ isBookmarked }) => isBookmarked
    );

    for (const key in filteredShows) {
      const array = filteredShows[key].map((show) => {
        if (show.title === title) {
          return newElement;
        }
        return show;
      });
      newFilteredData[key] = array;
    }

    newFilteredData["isBookmarked"] = isBookmarked;

    onSetShows(fullShowsData);
    setFilteredShows((prev) => {
      return {
        ...prev,
        all: newFilteredData.all,
        trending: newFilteredData.trending,
        movies: newFilteredData.movies,
        tvShows: newFilteredData.tvShows,
        isBookmarked: newFilteredData.isBookmarked,
      };
    });

    const postData = async (url, data) => {
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }
      const info = await response.json();
    };

    postData(
      "https://react-cf940-default-rtdb.firebaseio.com/media.json",
      fullShowsData
    );
  };

  const onSetFiltered = (data) => {
    const tvShows = data.filter(({ category }) => category === "TV Series");
    const movies = data.filter(({ category }) => category === "Movie");
    const trending = data.filter(({ isTrending }) => isTrending);
    const isBookmarked = data.filter(({ isBookmarked }) => isBookmarked);

    setFilteredShows((prev) => {
      return {
        ...prev,
        all: data,
        trending: trending,
        movies: movies,
        tvShows: tvShows,
        isBookmarked: isBookmarked,
      };
    });
  };

  const value = {
    shows: filteredShows,
    filter: filter,
    setFilter: onSetFilter,
    setShows: onSetShows,
    setFilteredShows: onSetFiltered,
    filterShows: onFilterShows,
    cleanFilter: onCleanFilter,
    handleBookMark: handleBookMark,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Context;
