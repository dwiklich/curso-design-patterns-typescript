// Singleton Classic

// import { MyDatabaseClassic } from './db/my-database-classic';
// import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

// const myDatabaseClassic = MyDatabaseClassic.instance;
// myDatabaseClassic.add({ name: 'João', age: 13 });
// myDatabaseClassic.show();

// console.log(myDatabaseClassic === myDatabaseFromModuleA);

// -----------------------------------------------------------

// Singleton Module

// import { MyDatabaseModule } from './db/my-database-module';
// import { myDatabaseModule as myDatabaseFromModuleA } from './module_a';

// const myDatabaseModule = MyDatabaseModule;
// myDatabaseModule.add({ name: 'João', age: 13 });
// myDatabaseModule.show();

// console.log(MyDatabaseModule === myDatabaseFromModuleA);

// -----------------------------------------------------------

// Singleton Function

import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFunction as myDatabaseFromModuleA } from './module_a';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'João', age: 13 });
myDatabaseFunction.show();

console.log(myDatabaseFunction === myDatabaseFromModuleA);
