import { combineReducers } from 'redux'
const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '2.30'
        },
        {
            title: 'BackStreet boys',
            duration: '4.20'
        },
        {
            title: 'Maaya ',
            duration: '2.00'
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

