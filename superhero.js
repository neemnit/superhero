let favouritesSuperHero
let favourites = []
const addToFavorites = (data) => {
    if (favourites.length === 0) {
        favourites = [data, ...favourites];
    } else if (!favourites.some(item => item.id === data.id)) {
        favourites = [data, ...favourites];
    }
    localStorage.setItem("favourites", JSON.stringify(favourites))
    
}
favouritesSuperHero = JSON.parse(localStorage.getItem("favourites"))

const removeFromFavorites = (data) => {
    
    const filterData = favouritesSuperHero.filter((dat) => {
        return dat.id !== data.id
    })
    localStorage.setItem("favourites", JSON.stringify(filterData))
    favouritesSuperHero = filterData


}
const viewPage = (data) => {

    favouritesSuperHero=JSON.parse(localStorage.getItem("favourites"))
    const findFavour = favouritesSuperHero.find((dat) => {

        return dat.id == data.id
    })
    
    return findFavour
}

