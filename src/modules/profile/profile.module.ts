import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/modules/profile/entities/category.entity';
import { EducationEntity } from 'src/modules/profile/entities/education.entity';
import { ExperienceEntity } from 'src/modules/profile/entities/experience.entity';
import { ProfileEntity } from 'src/modules/profile/entities/profile.entity';
import { SkillEntity } from 'src/modules/profile/entities/skill.entity';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileEntity, CategoryEntity, EducationEntity, ExperienceEntity, SkillEntity])],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
