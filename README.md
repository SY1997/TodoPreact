Immutable.js
============
## Installation using npm
>npm i --save-dev immutable

## Import into module
```
import immutable,{Map,List} from 'immutable'
```
---
## Getting started
1. Replace all arrays with List data structure
    ```
    //Plain Javascript array
    let a=[1,[2,3],4];

    //Convert to immutableJS using List
    a=List(a);
    //or
    a=List([1,[2,3],4]);

    //Convert using fromJS method
    a=fromJS(a);    //Forms the List([1,[2,3],4])
    ```
2. Replace all objects with Map data structure
    ```
    //Plain Javascript object
    let a={x:{x1:1},y:2};

    //Convert to immutableJS using Map
    a=Map(a);
    //or
    a=Map({x:{x1:1},y:2});

    //Convert using fromJS method
    a=fromJS(a);    //Forms the Map({x:{x1:1},y:2})
    ```
---
## Using List
1. Creating a list using .of method
    ```
    let a=List.of(1,2,3);    //Creates List [1,2,3] using .of method
    console.log(a.toJS());    //Print the list as an array using toJS method
    ```
2. Size of List
    ```
    let a=List([1,2,3]);
    console.log(a.size);    //Prints 3 (size of List)
    ```
3. set() method

    *Returns a new List including the passed value and index*

    >set(index,value)
    ```
    let a=List([1,2,3]);
    a=a.set(5,4);   //Sets value 4 at index 5
    console.log(a.toJS());  //Prints [1, 2, 3, undefined, undefined, 4]
    ```
4. setIn() method

    *Returns a new List including the passed value at a nested index*

    >setIn(Array_for_Index,value)
    ```
    let a=List([1,[2,3],5]);
    a=a.setIn([1,3],4); //Sets value 4 at index 3 of inner array
    console.log(a.toJS());  //Prints [1,[2, 3, undefined, 4],5]
    ```
5. delete() method

    *Returns a new List excluding the value deleted*

    >delete(index)
    ```
    let a=List([1,2,3]);
    a=a.delete(0);   //Deletes value at index 0
    console.log(a.toJS());  //Prints [2, 3, 4]
    ```
6. deleteIn() method
    *Returns a new List excluding the deleted value at a nested index*

    >deleteIn(Array_for_Index)
    ```
    let a=List([1,[2,3],5]);
    a=a.deleteIn([1,0]); //Deletes 2 in the inner array
    console.log(a.toJS());  //Prints [1,[3],5]
    ```
7. insert() method

    *Returns a new List including the passed value and index*

    *Different from set(), as for an index>list_size it inserts at last index*

    >insert(index,value)
    ```
    let a=List([1,2,3]);
    a=a.insert(5,4);   //Sets value 4 at index 5
    console.log(a.toJS());  //Prints [1, 2, 3, 4]
    ``` 
8. concat() method

    *Returns a new List including the concatenated lists*

    >concat(list1,list2,...)
    ```
    let a=List([1,2]);
    let b=List([3,4]);
    let c=List([5]);
    a=a.concat(b,c);
    console.log(a.toJS());  //Prints [1, 2, 3, 4, 5]
    ```
