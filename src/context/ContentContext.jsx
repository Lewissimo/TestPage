import React, { createContext, useEffect, useState } from 'react'


export const ContentContext = createContext(undefined);

const ContentContextProvider = ({children}) => {
    const [coordinateY, setCoordinateY] = useState(0);
    const [coordinateX, setCoordinateX] = useState(0);
    const [component, setComponent] = useState(null);

    const value = {
        coordinateX,
        coordinateY,
        setCoordinateX,
        setCoordinateY,
        component,
        setComponent
    }
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  )
}

export default ContentContextProvider