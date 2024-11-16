const animeModel = require('../models/animeModel');

const getAllAnimes = () => animeModel.getAllAnimes();

const getAnimeById = (id) => animeModel.getAnimeById(id);

const createAnime = (name, genre, studio) => {
    if (!name || !genre || !studio) {
        throw new Error('Todos os campos são obrigatórios.');
    }
    return animeModel.createAnime(name, genre, studio);
};

const updateAnime = (id, name, genre, studio) => {
    if (!name || !genre || !studio) {
        throw new Error('Todos os campos são obrigatórios.');
    }
    return animeModel.updateAnime(id, name, genre, studio);
};

const deleteAnime = (id) => animeModel.deleteAnime(id);

module.exports = { getAllAnimes, getAnimeById, createAnime, updateAnime, deleteAnime };
