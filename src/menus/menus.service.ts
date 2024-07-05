import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>,
  ) {}
  create(createMenuDto: CreateMenuDto) {
    try {
      return this.menuRepository.save(createMenuDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  findAll() {
    return this.menuRepository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.parent', 'parent')
      .getMany();
  }

  findOne(id: number) {
    return this.menuRepository
      .createQueryBuilder('menu')
      .leftJoinAndSelect('menu.parent', 'parent')
      .where('menu.id = :id', { id })
      .getOne();
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    try {
      return this.menuRepository.update(id, updateMenuDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  remove(id: number) {
    try {
      return this.menuRepository.delete(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
