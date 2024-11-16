const animeService = require('../services/animeService');

const getAllAnimes = (req, res) => {
    const animes = animeService.getAllAnimes();
    res.json(animes);
};

const getAnimeById = (req, res) => {
    const anime = animeService.getAnimeById(req.params.id);
    if (!anime) {
        return res.status(404).json({ message: 'Anime não encontrado' });
    }
    res.json(anime);
};

const createAnime = (req, res) => {
    const { name, genre, studio } = req.body;
    try {
        const newAnime = animeService.createAnime(name, genre, studio);
        res.status(201).json(newAnime);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateAnime = (req, res) => {
    const { name, genre, studio } = req.body;
    const anime = animeService.updateAnime(req.params.id, name, genre, studio);
    if (!anime) {
        return res.status(404).json({ message: 'Anime não encontrado' });
    }
    res.json(anime);
};

const deleteAnime = (req, res) => {
    const anime = animeService.deleteAnime(req.params.id);
    if (!anime) {
        return res.status(404).json({ message: 'Anime não encontrado' });
    }
    res.status(204).end();
};

module.exports = { getAllAnimes, getAnimeById, createAnime, updateAnime, deleteAnime };
