import { Injectable, Container } from 'container-ioc';

let container = new Container();

@Injectable()
class A {}

container.register(A);

console.log(container.resolve(A));