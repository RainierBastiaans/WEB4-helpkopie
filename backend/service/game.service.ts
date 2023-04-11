import { Game } from '../domain/model/game';
import gameDB from '../domain/data-access/game.db';
import { GameInput } from '../types';

const getAllGames = (): Game[] => gameDB.getAllGames();

const getGameById = ({ id }: GameInput): Game => {
    if (Number.isNaN(Number(id))) {
        throw new Error('Id must be numeric.');
    }

    const game = gameDB.getGameById({ id: parseInt(id)});

    if (!game) {
        throw new Error(`Counter with ID: ${id} does not exist.`);
    }

    return game;
};

export default { getAllGames, getGameById};