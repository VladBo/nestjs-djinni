import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToMany, ManyToOne } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { EducationEntity } from './education.entity';
import { ExperiencenEntity } from './experience.entity';
import { ProfileSkillsEntity } from './profile_skills.entity';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  photo: string;

  @Column({ type: 'varchar', length: 255 })
  position: string;

  @Column({ type: 'integer' })
  price: number;

  @Column({
    type: 'enum',
    enum: ['Pre_intermediate', 'Intermediate', 'Upper_intermediate'],
  })
  englishLevel: string;

  @Column({ type: 'integer' })
  availible_hours_peer_week: number;

  @Column({ type: 'varchar', length: 255 })
  hour_rate: string;

  @Column({ type: 'varchar', length: 1000 })
  description: string;

  @ManyToOne(() => CategoryEntity, (category) => category.id)
  categoryId: CategoryEntity;

  @OneToMany(() => EducationEntity, (education) => education.profile)
  educations: EducationEntity[];

  @OneToMany(() => ExperiencenEntity, (experience) => experience.profile)
  experience: ExperiencenEntity[];

  @OneToMany(() => ProfileSkillsEntity, (profileSkills) => profileSkills.profile)
  profileSkills: ProfileSkillsEntity[];
}
