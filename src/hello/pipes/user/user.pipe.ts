import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('value: ',value)

    const pass= parseInt(value.pass.toString(),10)

    if (isNaN(pass)) {
      throw new HttpException('pass must be a number',HttpStatus.BAD_GATEWAY)
      
    }


    return {
      ...value,pass:pass
    }
  }
}
