import React from 'react'
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import FolderIcon from 'material-ui-icons/Folder'

export const li = category => {
  return (
    <div>
      <ListItem>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText
          primary={category.shortName}
          secondary={category.shortDesc}
        />
      </ListItem>
    </div>
  )
}
