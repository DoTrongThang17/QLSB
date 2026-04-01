import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';


@Injectable()
export class StudentService {
  getStudent(): string {
    return 'Hello World!';
  }
}
