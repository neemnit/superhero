let favouritesSuperHero
let favourites=[]
const addToFavorites=(data)=>{
    if (favourites.length === 0) {
        favourites = [data, ...favourites];
    } else {
        if (!favourites.some(item => item.id === data.id)) {
            favourites = [data, ...favourites];
        }
    }
    

//    favourites=favourites.filter((favourite)=>{
//     if(favourite.id!==data.id){
//         return favourite
//     }
//     // else{
//     //     return data
//     // }
    
//    })
   console.log(favourites)
   
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
    
    