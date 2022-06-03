import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Созданиу пользователя'})
    @ApiResponse({status: 200, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Получить всех пользователей'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll(){
        return this.usersService.getAllUsers();
    }
}
