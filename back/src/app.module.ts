import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { Board } from './boards/entities/boards.entity';
import { Comment } from './comments/entities/comments.entity';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    BoardsModule,
    CommentsModule, //
    TypeOrmModule.forRoot({
      type: 'postgres', // 데이터베이스 타입
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'myboard',
      entities: [
        Board, //
        Comment,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
