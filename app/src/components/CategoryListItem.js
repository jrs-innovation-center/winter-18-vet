import React from 'react'

export const li = category => {
  return (
    <div>
      <li className="" key={category.id}>
        <i className="material-icons">{category.icon}</i>
        {category.shortName}
        {category.shortDesc}
      </li>
    </div>
  )
}

//TO DO: wrap the div in a Link that links to the category/:id
