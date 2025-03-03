import { useState, useEffect } from "react";

export function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl:"http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, []);

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl:newMemeUrl
        }))

        toggleColor();
    }


    function handleChange(e) {
        const {value, name} = e.currentTarget;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value
        }));
    }

    const [anyColor, setAnyColor] = useState(1);

    const colors = {
        1: '#457b9d',
        2: '#3a015c',
        3: '#0d060f',
        4: '#1e2824',
        5: '#1e2824',
        6: '#00132d',
        7: '#0b132b',
        8: '#191d32',
        9: '#16007a',
        10: '#634133'
    };

 function toggleColor() {
    const randomNumber = Math.floor(Math.random() * 10) + 1; 
    setAnyColor(colors[randomNumber]);
};
    

  return (
      <main>
          <div className="form">
              <label>Top Text
                  <input
                      type="text"
                      placeholder="One does not simply"
                      name="topText"
                      onChange={handleChange}
                      value={meme.topText}
                  />
              </label>

              <label>Bottom Text
                  <input
                      type="text"
                      placeholder="Walk into Mordor"
                      name="bottomText"
                      onChange={handleChange}
                      value={meme.bottomText}
                  />
              </label>
              <button onClick={getMemeImage} style={{backgroundColor:anyColor}}>Get a new meme image 🖼</button>
          </div>
          <div className="meme">
              <img src={meme.imageUrl} />
              <span className="top">{meme.topText}</span>
              <span className="bottom">{meme.bottomText}</span>
          </div>
      </main>
  )
}
