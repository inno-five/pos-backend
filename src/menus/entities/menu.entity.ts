import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Menu {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column()
  path: string;

  @Column()
  icon: string;

  @Column()
  order: number;

  @Column()
  level: number;

  @ManyToOne(() => Menu, (menu) => menu.id, { nullable: true })
  @JoinColumn()
  parent: number;
}
