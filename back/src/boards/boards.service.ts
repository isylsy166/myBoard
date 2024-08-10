import { Injectable, NotFoundException } from '@nestjs/common';
import { IBoardModel } from './boards.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './entities/boards.entity';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>,
  ) {}

  async getAllBoards() {
    return this.boardRepository.find();
  }

  async getBoardById(id) {
    const board = await this.boardRepository.findOne({
      where: {
        id: id, // 또는 그냥 id
      },
    });

    if (!board) {
      throw new NotFoundException();
    }
    return board;
  }

  // async createPost(author: string, title: string, content: string) {
  async createBoard(boardData: IBoardModel) {
    // 1. 저장할 객체를 생성한다
    const board = this.boardRepository.create({
      // id는 자동생성
      author: boardData.author,
      title: boardData.title,
      content: boardData.content,
    });

    // 2. 객체를 저장한다
    const newBoard = await this.boardRepository.save(board);

    return newBoard;
  }

  // async updatePost(
  //   postId: number,
  //   author: string,
  //   title: string,
  //   content: string,
  // ) {
  //   //save의 기능
  //   // id 기준으로 데이터가 존재하지 않는다면 새로 생성한다
  //   // 데이터가 존재한다면 => 존재하는 값을 업데이트 한다
  //   const post = await this.postRepository.findOne({ where: { id: postId } });

  //   if (!post) {
  //     throw new NotFoundException();
  //   }

  //   if (author) {
  //     post.author = author;
  //   }

  //   if (title) {
  //     post.title = title;
  //   }

  //   if (content) {
  //     post.content = content;
  //   }

  //   const newPost = await this.postRepository.save(post);

  //   return newPost;
  // }

  // async deletePost(postId: number) {
  //   const post = await this.postRepository.findOne({ where: { id: postId } });
  //   if (!post) {
  //     throw new NotFoundException();
  //   }

  //   const newPost = this.postRepository.delete(postId);

  //   return newPost;
  // }
}
