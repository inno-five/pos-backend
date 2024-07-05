import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: null })
  tel: string;

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  address: string;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  //   TODO:uncomment when user group is ready
  // @ManyToOne(() => UserGroup, (userGroup) => userGroup.id, { nullable: true })
  // @JoinColumn()
  // userGroup: string;

  @Column({ default: null })
  image: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: null })
  role: string;

  @Column({ default: false })
  isSuperAdmin: boolean;

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
