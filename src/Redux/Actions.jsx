//addfav
//deletefav

export const AddFavmovie = (payload) => {
    return {
        type : "ADD" ,
        payload:payload,
    }
}
export const DeleteFavmovie = (payload) => {
    return {
        type : "DELETE" ,
        payload:payload,
    }
}


