import 'reflect-metadata';

function param(target: any, key: any, index: any) {
    // console.dir(Reflect.getMetadata('design:type', target));
    // console.dir(Reflect.getMetadata('design:paramtypes', target));
    // console.dir(Reflect.getMetadata('design:returntype', target, 'constructor'));

}

function cons(target: any) {
    // console.dir(Reflect.getMetadata('design:type', target));
    // console.dir(Reflect.getMetadata('design:paramtypes', target));
    //let arr = Reflect.getMetadata('design:paramtypes', target);
    //arr.forEach(t => {
    //	//console.dir(t);
    //});
    // console.dir(Reflect.getMetadata('design:returntype', target));
}

function prop(target: any, key: any) {
 //    console.dir(Reflect.getMetadata('design:type', target));
	// console.dir(Reflect.getMetadata('design:paramtypes', target));
     console.dir(Reflect.getMetadata('design:type', target, key).name);
}

//@cons
//class C {
//	constructor(@param private fish: string) {
//	}
//
//	@prop
//	age: string;
//}
@cons
class C {
	constructor(private fish: string) {
	}

	age: string;
}

let arr = Reflect.getMetadata('design:paramtypes', C);
arr.forEach(t => {
    console.dir(t);
});