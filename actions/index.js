import axios from 'axios';
import _ from 'lodash';

 const API_KEY='4cbab99e0emsh7d261d6e65293a6p1b6b13jsnfa2c70b020ae'

 const axiosInstance = axios.create({
     baseURL:'https://deezerdevs-deezer.p.rapidapi.com/',
     timeout: 2000,
     headers: {'X-RapidAPI-Key': API_KEY}
 });

 export const searchTracks =singer => {
     return axiosInstance.get(`search?q=${singer}`). then (
        response =>{ 
            const albums =response.data.data.map(item=> item.album)
            const uniqueAlbums = _.uniqBy(albums, 'title')

            return uniqueAlbums
        }

     );
 }

 export const getAlbumTracks = albumId => {
     return axiosInstance.get(`album/${albumId}`). then(response => response.data.tracks.data);
 }