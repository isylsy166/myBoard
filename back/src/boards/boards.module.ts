import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/boards.entity';
import { CommentsService } from 'src/comments/comments.service';
import { Comment } from 'src/comments/entities/comments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Comment])],
  controllers: [BoardsController],
  providers: [BoardsService, CommentsService],
})
export class BoardsModule {}
