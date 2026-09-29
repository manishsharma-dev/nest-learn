import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service.js";

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

@Get()
getUsers(): string[] {
    return this.userService.getUsers();
  }

}