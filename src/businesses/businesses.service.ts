import { Injectable } from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './entities/business.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BusinessesService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}
  create(createBusinessDto: CreateBusinessDto) {
    try {
      return this.businessRepository.save(createBusinessDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  findAll() {
    return this.businessRepository.find();
  }

  findOne(id: string) {
    return this.businessRepository.findOne({ where: { id } });
  }

  update(id: string, updateBusinessDto: UpdateBusinessDto) {
    try {
      return this.businessRepository.update(id, updateBusinessDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  remove(id: string) {
    try {
      return this.businessRepository.delete(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
