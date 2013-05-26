# Extend

Extend is a function that copies all of the properties from a source object onto the target object.

A shallow-copy version of extend will copy all the top-level properties from a source object, copying the value of all primitive values (strings, numbers, etc.) but copying only a reference to objects and arrays.

A deep-copy version of extend will recursively copy all properties of the source object, giving the target a unique copy of any objects and arrays.

Write a shallow-copy version of extend, and then write a deep-copy version. Make your deep-copy extend handle an arbitrary number of source objects.
