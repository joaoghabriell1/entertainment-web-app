import { useEffect, useState } from "react";

const useTrendingThumbnail = (title) => {
  const regex = /[^a-zA-Z\d\s]/g;
  let path = title?.replaceAll(regex, "").replaceAll(" ", "-").toLowerCase();

  if (title == "Same Answer II") {
    path = "same-answer-2";
  }

  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await import(
        `../assets/assets/thumbnails/${path}/trending/large.jpg`
      ); // change relative path to suit your needs
      setImage(response.default);
    };

    fetchImage();
  }, [path]);

  return [image];
};

export default useTrendingThumbnail;
