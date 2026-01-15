/*
  The `static` keyword in JavaScript is used in classes 
  to define a method or property that belongs to the class 
  itself, rather than to instances of the class.

  Basic Syntax:

      class MyClass {
          static myStaticMethod() {
              // code for the static method
          }

          static myStaticProperty = 'someValue';
      }

  Usage:

  1. Accessing a static method or property:
        MyClass.myStaticMethod();
        console.log(MyClass.myStaticProperty);

  2. Static members cannot be accessed from instances:
        const obj = new MyClass();
        obj.myStaticMethod(); // ❌ Error

  3. Common use cases:
      - Utility functions that don't depend on instance data
      - Constants or configuration values related to the class
      - Factory methods for creating instances

  Key Point:
      Static members are tied to the class itself, not to individual objects.
*/