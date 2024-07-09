import { Injectable } from '@nestjs/common';
import { CreateBusinessTypeDto } from './dto/create-business-type.dto';
import { UpdateBusinessTypeDto } from './dto/update-business-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BusinessType } from './entities/business-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BusinessTypesService {
  constructor(
    @InjectRepository(BusinessType)
    private readonly businessTypeRepository: Repository<BusinessType>,
  ) {}
  create(createBusinessTypeDto: CreateBusinessTypeDto) {
    try {
      return this.businessTypeRepository.save(createBusinessTypeDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  findAll() {
    return this.businessTypeRepository.find();
  }

  findOne(id: string) {
    return this.businessTypeRepository.findOne({ where: { id } });
  }

  update(id: string, updateBusinessTypeDto: UpdateBusinessTypeDto) {
    try {
      return this.businessTypeRepository.update(id, updateBusinessTypeDto);
    } catch (e) {
      throw new Error(e);
    }
  }

  remove(id: string) {
    try {
      return this.businessTypeRepository.delete(id);
    } catch (e) {
      throw new Error(e);
    }
  }
}
