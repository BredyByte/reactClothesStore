import {createContext, useState, useEffect} from 'react';

import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils';

// import SHOP_DATA from '../shop-data.js';
//delete after creating data base on firebase, but i just commented it, to rememder some times

export const CategoriesContext = createContext({
  categoriesMap: {},
});
export const CategoriesProvider = ({children}) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
  }, []);
  // useEffect(()s =>{
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);
  //delete after creating data base on firebase, but i just commented it, to rememder some times
  const value = {categoriesMap};

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}