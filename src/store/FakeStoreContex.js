import { createContext, useContext, useState } from 'react'

export const FakeStoreContext = createContext()

export const FakeStoreProvider = ({ children }) => {
  const [product, setProduct] = useState([])
  const [productDetail, setProductDetail] = useState(null)
  const [loading, setLoading] = useState(true)

  return (
    <FakeStoreContext.Provider
      value={{
        // estados
        product,
        productDetail,
        loading,
        // funciones
        setProduct,
        setProductDetail,
        setLoading,
      }}
    >
      {children}
    </FakeStoreContext.Provider>
  )
}
// custom hoook
export const useStateData = () => {
  const context = useContext(FakeStoreContext)

  if (context === undefined) {
    throw new Error('useStateData must be used within a FakeStoreProvider')
  }
  return context
}
