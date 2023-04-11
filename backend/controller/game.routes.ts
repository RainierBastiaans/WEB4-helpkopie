/**
 * @swagger
 *   components:
 *    schemas:
 *      Game:
 *          type: object
 *          properties:
 *              gameId: 
 *                  type: number
 *                  format: int64
 *              name:
 *                  type: string
 *                  description: Game name.
 *              typeOfGame:
 *                  type: string
 *                  description: Type of gameplay.
 *              minDuration:
 *                  type: number
 *                  format: int64
 *              maxDuration:
 *                  type: number
 *                  format: int64
 *              minPlayers:
 *                  type: number
 *                  format: int64
 *              deposit:
 *                  type: number
 *                  format: int64
 *              gameState:
 *                  type: string
 *                  description: The status of the game: available or not.
 * 
 */
import express, { Request, Response } from 'express';
import gameService from '../service/game.service';

const gameRouter = express.Router();

/**
 * @swagger
 * /games/{id}
 *   get:
 *      summary: Get a game by ID
 *      responses:
 *          200:
 *              description: Return a game. If the game does not exist, an error is returned.
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Game'
 *      parameters:
 *          - name: gameId 
 *            in: path
 *            description: Game ID
 *            required: true
 *            schema:
 *              type: integer
 *              format: int64
 */             
gameRouter.get('/', async (req: Request, res: Response) => {
    try {
        const games = await gameService.getAllGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});