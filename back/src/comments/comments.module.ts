import { Module } from "@nestjs/common";
import { Comment } from "./entities/comments.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentsController } from "./comments.controller";
import { CommentsService } from "./comments.service";
import { Board } from "src/boards/entities/boards.entity";
import { BoardsService } from "src/boards/boards.service";

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Board])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
