export default (state,action) =>{
    switch (action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist:[action.payload, ...state.watchlist]
            }
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watched:[action.payload, ...state.watched]
            }
        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watched:state.watched.filter(singleMovie => singleMovie.id !== action.payload.id)
            }
        case "MOVE_TO_WATCHED":
            return {
                ...state,
                watchlist:state.watchlist.filter(singleMovie => singleMovie.id !== action.payload.id)
            }
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist:state.watchlist.filter(singleMovie => singleMovie.id !== action.payload.id)
            }
        case "REMOVE_FROM_WATCHED":
            return {
                ...state,
                watched:state.watched.filter(singleMovie => singleMovie.id !== action.payload.id)
            }
        default:
            return state
    }
}