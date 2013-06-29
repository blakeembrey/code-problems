#ifndef STACK_H_INCLUDED
#define STACK_H_INCLUDED

typedef struct Nodestack {
    int value;
    struct Nodestack *next;
}NodeStack;

typedef NodeStack *Stack;

// add the element onto the stack
void _add(Stack*,int);

//returns the element on top of the stack
int _remove(Stack*);


#endif // STACK_H_INCLUDED
