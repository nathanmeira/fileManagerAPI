import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentRepository } from './content.repository';
import { ContentService } from './content.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContentRepository])],
  controllers: [ContentController],
  providers: [ContentService]
})
export class ContentModule {}
