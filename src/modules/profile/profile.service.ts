import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/modules/profile/entities/category.entity';
import { EducationEntity } from 'src/modules/profile/entities/education.entity';
import { ExperienceEntity } from 'src/modules/profile/entities/experience.entity';
import { ProfileEntity } from 'src/modules/profile/entities/profile.entity';
import { SkillEntity } from 'src/modules/profile/entities/skill.entity';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepository: Repository<ProfileEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(EducationEntity)
    private educationRepository: Repository<EducationEntity>,
    @InjectRepository(ExperienceEntity)
    private experienceRepository: Repository<ExperienceEntity>,
    @InjectRepository(SkillEntity)
    private skillRepository: Repository<SkillEntity>,
  ) {}

  async getAllCategories(): Promise<CategoryEntity[]> {
    const allCategories = await this.categoryRepository.find();
    return allCategories;
  }

  async getAllSkills(): Promise<SkillEntity[]> {
    const allSkills = await this.skillRepository.find();
    return allSkills;
  }

  async getAllEducations(): Promise<EducationEntity[]> {
    const allEducations = await this.educationRepository.find();
    return allEducations;
  }

  async getProfileSettings(id: number) {
    const post = await this.profileRepository.findOne({
      where: {
        id: id,
      },
      relations: ['experience', 'education', 'skills', 'category'],
    });
    if (post) {
      return post;
    }
    throw new NotFoundException(id);
  }

  async saveProfile(profileDto: ProfileDto) {
    try {
      console.log(profileDto);
      const newProfile = new ProfileEntity();
      newProfile.photo = profileDto.photo;
      newProfile.position = profileDto.position;
      newProfile.price = profileDto.price;
      newProfile.englishLevel = profileDto.englishLevel;
      newProfile.description = profileDto.description;
      newProfile.category = profileDto.category;
      newProfile.education = profileDto.education;
      newProfile.experience = profileDto.experience;
      newProfile.skills = profileDto.skills;
      const profile = await this.profileRepository.save(newProfile);
      console.log(profile);
      return profile;
    } catch (error) {
      console.log(error);
    }
  }
}
