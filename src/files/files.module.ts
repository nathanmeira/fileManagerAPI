import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesRepository } from './files.repository';
import { FilesService } from './files.service';
import { UsersModule } from 'src/users/users.module';
import { UsersRepository } from 'src/users/users.repository';
import { ContentRepository } from 'src/file_content/content.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FilesRepository]), TypeOrmModule.forFeature([UsersRepository]), TypeOrmModule.forFeature([ContentRepository])],
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule {}
