import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IBoardModel } from './boards.interface';
import { BoardsService } from './boards.service';
import { CommentsService } from 'src/comments/comments.service';

@Controller('boards')
export class BoardsController {
  constructor(
    private readonly boardsService: BoardsService,
    private readonly commentService: CommentsService,
  ) {}

  //조회
  @Get()
  getBoards() {
    return this.boardsService.getAllBoards();
  }

  // 게시물 상세조회
  @Get(':id')
  async getBoard(@Param('id') id: string) {
    const boards = await this.boardsService.getBoardById(id);
    const comments = await this.commentService.getComments(id);
    return { boards, comments };
  }

  //등록
  @Post()
  postBoard(@Body('boardData') boardData: IBoardModel) {
    return this.boardsService.createBoard(boardData);
  }

  // //수정
  // @Put(':id')
  // putPosts(
  //   @Param('id') id: string,
  //   @Body('author') author?: string,
  //   @Body('title') title?: string,
  //   @Body('content') content?: string,
  // ) {
  //   return this.postsService.updatePost(+id, author, title, content);
  // }

  // //삭제
  // @Delete(':id')
  // deletePost(@Param('id') id: string) {
  //   return this.postsService.deletePost(+id);
  // }
}
