const { v4: uuidv4 } = require('uuid');

let animes = [
    { id: uuidv4(), name: 'One piece', genre: 'Ação', studio: 'Toei' },
    { id: uuidv4(), name: 'Naruto', genre: 'Ação', studio: 'Pierrot' }
];

const getAllAnimes = () => animes;

const getAnimeById = (id) => animes.find(anime => anime.id === id);

const createAnime = (name, genre, studio) => {
    const newAnime = { id: uuidv4(), name, genre, studio };
    animes.push(newAnime);
    return newAnime;
};

const updateAnime = (id, name, genre, studio) => {
    const anime = getAnimeById(id);
    if (anime) {
        anime.name = name;
        anime.genre = genre;
        anime.studio = studio;
    }
    return anime;
};

const deleteAnime = (id) => {
    const index = animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
        return animes.splice(index, 1)[0];
    }
    return null;
};

module.exports = { getAllAnimes, getAnimeById, createAnime, updateAnime, deleteAnime };
