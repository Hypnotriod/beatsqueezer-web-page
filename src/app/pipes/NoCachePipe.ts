import { Pipe, PipeTransform } from '@angular/core';
import { Md5 } from 'ts-md5';

@Pipe({ name: 'noCache' })
export class NoCachePipe implements PipeTransform {
    constructor() { }

    transform(url: string): string {
        const rnd: string = new Md5().appendStr(Math.random().toString()).end().toString();
        return url + (url.indexOf('?') === -1 ? ('?' + rnd) : ('&' + rnd));
    }
}
