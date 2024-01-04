let favouritesSuperHero
let favourites=[]
const addToFavorites=(data)=>{
   favourites= [data,...favourites]
   
    localStorage.setItem("favourites",JSON.stringify(favourites))
     
}
favouritesSuperHero=JSON.parse(localStorage.getItem("favourites"))

const removeFromFavorites=(data)=>{
    console.log("kukmkjkl",data)
    const filterData=favouritesSuperHero.filter((dat)=>{
        return dat.id!==data.id
    })
    localStorage.setItem("favourites",JSON.stringify(filterData))
    favouritesSuperHero=filterData
    console.log(favouritesSuperHero)
    
    }
    const viewPage=(data)=>{
        console.log(data,"htid")
    }
    
    