import React, {useState} from "react";

function Tile ({hogs, setHogState, greasedState, setGreasedState}) {
    
    const [sortOption, setSortOption] = useState("none");
    const filteredHogs = greasedState ? hogs.filter((hog) => hog.greased) : hogs

    

    let sortedHogs = [...filteredHogs];

  if (sortOption === "name") {
    sortedHogs = sortedHogs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "weight") {
    sortedHogs = sortedHogs.sort((a, b) => a.weight - b.weight);
  }
    
  function handleSort(option) {
    setSortOption(option);
  }

    const nameAndImage = sortedHogs.map((obj, index) => {
        return (
            <div key={index} className="ui eight wide column" onClick={() => handleClick(obj)}>
                <h2 key={obj.name}>{obj.name}</h2>
                <img key={obj.image} src={obj.image} alt="Pig" height='200px' />
            </div>
        )
    })

    function handleClick (obj) {
        setHogState(obj)
    }

    return (
        <div>
            <div className="ui grid container">
                {nameAndImage}
            </div>
            <select value={sortOption} onChange={(e) => handleSort(e.target.value)}>
                <option value="none">None</option>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    )
}

export default Tile