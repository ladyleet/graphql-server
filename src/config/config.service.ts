import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { parse} from 'dotenv';

@Injectable()
export class ConfigService {
    private readonly config: {
        [key:string]:string
    }; 
    
    constructor() {
        this.config=parse(readFileSync(".env"))
    }

    get dbhost() {
        return this.config.DB_HOST
    }
}

