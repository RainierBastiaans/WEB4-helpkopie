export interface Game {
    gameId: number
    name: string
    typeOfGame: string
    minDuration: number
    maxDuration: number
    minPlayers: number
    maxPlayers: number
    deposit: number
    gameState: string
}

export class Boardgame implements Game {
    readonly gameId: number
    readonly name: string
    readonly typeOfGame: string
    readonly minDuration: number
    readonly maxDuration: number
    readonly minPlayers: number
    readonly maxPlayers: number
    readonly deposit: number
    readonly gameState: string

    constructor(boardGame: {

    }

    static create({ id, name, typeOfGame }): Game {
        throw new Error('Method not implemented.')
    }

}

export class Electronicgame implements Game{
    gameId: number
    name: string
    typeOfGame: string
    minDuration: number
    maxDuration: number
    minPlayers: number
    maxPlayers: number
    deposit: number
    gameState: string

}