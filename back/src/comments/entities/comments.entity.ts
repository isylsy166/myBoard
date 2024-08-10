import { Board } from 'src/boards/entities/boards.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn() //자동으로 아이디를 배정해준다 1씩 올라가는 형태로
  id: number;

  @Column()
  author: string;

  @Column()
  password: string;

  @Column()
  content: string;

  @ManyToOne(() => Board, (board) => board.comments)
  board: Board;
}
