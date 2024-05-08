import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
//주입한다 - spring에서의 @Service와 같은 역할을 한다.
export class BoardsService {
    private boards: Board[] = [];
    //타 컴포넌츠 접근 방지를 위해 private로 선언

    getAllBoards(): Board[] {
        return this.boards;
    }

    getBoardById(id: string): Board {
        return this.boards.find(board => board.id === id);
    }

    createBoard(createBoardDto: CreateBoardDto) {
        const { title, description } = createBoardDto;

        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC,
        }

        this.boards.push(board);
        return board;
    }

    deleteBoard(id: string): void {
        this.boards = this.boards.filter((board) => board.id !== id);
    }
}
