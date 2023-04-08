export const getGifs = async (category) => {
    //Backticks = ctrl+shift+u+0060
    const url = `https://api.giphy.com/v1/gifs/search?api_key=OO3JOkRTaYh3pe3OoWxuonRUt3Ka69v6&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    return gifs;
  };