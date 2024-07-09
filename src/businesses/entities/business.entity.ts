import { BusinessType } from 'src/business-types/entities/business-type.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Business {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => BusinessType, (type) => type.id, { nullable: true })
  @JoinColumn()
  type: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn()
  createBy: string;

  @Column({ type: 'timestamp', default: null })
  createAt: Date;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn()
  updateBy: string;

  @Column({ type: 'timestamp', default: null })
  updateAt: Date;
}
