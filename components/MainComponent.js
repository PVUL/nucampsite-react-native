import React, { Component, useState } from 'react'

import { Directory } from './DirectoryComponent.js'
import { CAMPSITES } from '../shared/campsites'

export const Main = () => {
  const [campsites] = useState(CAMPSITES)
  return <Directory campsites={campsites} />
}
