import React from 'react'
import '../App.css'

function ImageWithDescription() {
  return (
    <div>
        <div className="hero h-[85vh]" style={{ backgroundImage:  `url("/Images/background.png")`}}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">The Weasley Family</h1>
      <div className="mb-5 text-xl description">Weasley was the surname of a pure-blood wizarding family in Great Britain
      They were considered one of the prominent wizarding families, although their lack of money and their sympathy for Muggle-born wizards and even Muggles made other wizards and witches view them scornfully. 
      They lived in The Burrow, a ramshackle house of four or five stories "a little way outside" the village of Ottery St Catchpole.</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ImageWithDescription