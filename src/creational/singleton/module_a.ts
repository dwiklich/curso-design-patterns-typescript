// Singleton Classic

// import { MyDatabaseClassic } from './db/my-database-classic';

// const myDatabaseClassic = MyDatabaseClassic.instance;
// myDatabaseClassic.add({ name: 'Daniel', age: 26 });
// myDatabaseClassic.add({ name: 'Cibele', age: 24 });
// myDatabaseClassic.add({ name: 'Cibeleeee', age: 24 });
// myDatabaseClassic.remove(2);

// export { myDatabaseClassic };

// -----------------------------------------------------------

// Singleton Module

// import { MyDatabaseModule } from './db/my-database-module';

// const myDatabaseModule = MyDatabaseModule;
// myDatabaseModule.add({ name: 'Daniel', age: 26 });
// myDatabaseModule.add({ name: 'Cibele', age: 24 });
// myDatabaseModule.add({ name: 'Cibeleeee', age: 24 });
// myDatabaseModule.remove(2);

// export { myDatabaseModule };

// -----------------------------------------------------------

// Singleton Function

import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;
myDatabaseFunction.add({ name: 'Daniel', age: 26 });
myDatabaseFunction.add({ name: 'Cibele', age: 24 });
myDatabaseFunction.add({ name: 'Cibeleeee', age: 24 });
myDatabaseFunction.remove(2);

export { myDatabaseFunction };
