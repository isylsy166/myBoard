import { Comment } from 'src/comments/entities/comments.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn() //자동으로 아이디를 배정해준다 1씩 올라가는 형태로
  //   @PrimaryColumn()
  id: number;

  @Column()
  author: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @OneToMany(() => Comment, (comment) => comment.board)
  comments: Comment[];
}
