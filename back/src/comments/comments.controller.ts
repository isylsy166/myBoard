import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ICommentModel } from './comments.interface';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  //등록
  @Post()
  postBoard(@Body('commentData') commentData: ICommentModel) {
    return this.commentsService.createComment(commentData);
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
