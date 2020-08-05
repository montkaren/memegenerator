import React, { useState } from "react"

const MemeGenerator = () => {
  const [inputText, setInputText] = useState({
    topText: "",
    bottomText: "",
  })
  const [randomImage, setRandomImage] = useState(
    "https://i.imgflip.com/26am.jpg"
  ) //this is link to Georgio image
  const [allMemeImgs, setAllMemeImgs] = useState([])

  console.log ("image link  " + randomImage)
  //console.log (allMemeImgs)

  const handleChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
    
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Could have submitted")
  }

  return (
    <div className="meme-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="Add Top Text"
          value={inputText.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Add Bottom Text"
          value={inputText.bottomText}
          onChange={handleChange}
        />
        <button>Generate</button>
      </form>
      <div className="meme">
        <img src={randomImage} alt="" />
        <h2 className="top">{inputText.topText}</h2>
        <h2 className="bottom">{inputText.bottomText}</h2>
      </div>
    </div>
  )
}

export default MemeGenerator