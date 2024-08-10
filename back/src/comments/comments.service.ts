import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './entities/comments.entity';
import { ICommentModel } from './comments.interface';
import { Board } from 'src/boards/entities/boards.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async getAllBoards() {
    return this.boardRepository.find();
  }

  async getComments(id) {
    // 게시물 아이디로 게시물 찾기
    const board = await this.boardRepository.findOne({
      where: { id: id },
    });

    const comments = await this.commentRepository.find({
      where: {
        board: board, // 또는 그냥 id
      },
    });

    return comments;
  }

  async createComment(commentData: ICommentModel) {
    const board = await this.boardRepository.findOne({
      where: { id: +commentData.boardId },
    });

    // 1. 저장할 객체를 생성한다
    const comment = this.commentRepository.create({
      // id는 자동생성
      author: commentData.author,
      password: commentData.password,
      content: commentData.content,
      board: board,
    });

    // 2. 객체를 저장한다
    const newComment = await this.commentRepository.save(comment);

    return newComment;
  }
}
