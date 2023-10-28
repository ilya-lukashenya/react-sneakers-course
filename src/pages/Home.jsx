import Card from '../components/Card';

function Home({
  items,
  cartItems,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart
}) {

  const renderItems = () => {
    return(
      items
      .filter(item => item.title.includes(searchValue))
      .map((item, index) => (
       <Card 
       key = {index}
       onFavorite={(obj) => onAddToFavorite(obj)}
       onPlus={(obj) => onAddToCart(obj)}
       added={cartItems.some(obj => Number(obj.id) === Number(item.id))}
       {...item}
     />
     )));
  }

  return(
    <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className=""> {searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кросcовки'} </h1>
          <div className="search-block d-flex" >
            <img className="mt-15" width={18} height={18} src="/img/search-icon.png" alt="Search"/>
            {searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' width={30} height={30} src="/img/cross.png"/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..."/>
          </div>
        </div>
        


        <div className="d-flex flex-wrap">
          
           {renderItems()}

        </div>
      </div>
  )
}

export default Home;