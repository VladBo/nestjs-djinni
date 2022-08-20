import { CategoryEntity } from 'src/modules/profile/entities/category.entity';
import { EducationEntity } from 'src/modules/profile/entities/education.entity';
import { ExperienceEntity } from 'src/modules/profile/entities/experience.entity';
import { SkillEntity } from 'src/modules/profile/entities/skill.entity';

export class ProfileDto {
  photo: string;
  position: string;
  price: number;
  englishLevel: string;
  description: string;
  category: CategoryEntity;
  education: EducationEntity[];
  experience: ExperienceEntity[];
  skills: SkillEntity[];
}
