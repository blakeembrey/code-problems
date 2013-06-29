#include <stdlib.h>
#include "stack.h"


void _add(Stack *head,int value){
    Stack node = (Stack)malloc(sizeof(Stack));
    if(node !=NULL){
      node->value = value;
      node->next = *head;
      *head = node;
    }
}

int _remove(Stack *head){
   int value = -1;
   if(head!=NULL){
        Stack top = *head;
        value = (*head)->value;
        *head = (*head)->next;
        free(top);

    }
    return value;
}
