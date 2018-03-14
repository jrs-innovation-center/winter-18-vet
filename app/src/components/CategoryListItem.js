import React from 'react'

export const li = category => {
  return (
    <div>
      <li key={category.id}>
        {category.shortName}
        {category.icon}
        {category.shortDesc}
      </li>
    </div>
  )
}
