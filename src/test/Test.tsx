// import React, { FC, FunctionComponent, ReactNode } from 'react';

// type Component = FunctionComponent<{ str: string }>;

// const Test: Component = prop => {
//   return <div>{prop.str}</div>;
// };

// const CallTest = () => {
//   const str = 'string';
//   return <Test str={str}></Test>;
// };
// export default Test

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

// function createLabel(id: number): IdLabel;
// function createLabel(name: string): NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw 'unimplemented';
// }

// type NameOrId = string | number;

// function createLabel<T extends string | number>(nameOrId: NameOrId) : T {
//   return typeof nameOrId === 'string' ? 'this was a mfk string' : 34;
// }

// const numId = createLabel(23);
// console.log('numId', typeof numId, numId);
// const stringId = createLabel('mtfk');
// console.log('stringId', typeof stringId, stringId);
