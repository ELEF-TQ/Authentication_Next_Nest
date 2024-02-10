import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './user.entity';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(dto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email is already in use');
    }

    const newUser = new User();
    newUser.username = dto.username;
    newUser.email = dto.email;
    newUser.password = await hash(dto.password, 10);

    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findById(id: number) {
    return await this.userRepository.findOne({where : {id}});
  }
}
