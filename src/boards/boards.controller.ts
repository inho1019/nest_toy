import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}
    //constructor는 생성자, spring에서의 @Autowired와 같은 역할을 한다.

    @Get("/")
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Get("/:id")
    getBoardById(
        @Param("id") id: string
    ): Board {
        return this.boardsService.getBoardById(id);
    }

    @Post("/")
    createBoard(
        @Body() createCoatdDto: CreateBoardDto 
    ): Board {
        return this.boardsService.createBoard(createCoatdDto);
    }

    @Delete("/:id")
    deleteBoard(
        @Param("id") id: string
    ): void {
        this.boardsService.deleteBoard(id);
    }
}
     