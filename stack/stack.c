#include <stdlib.h>
#include <stdio.h>

typedef struct stack {
    int value;
    struct stack *next;
}Stack;

void push(Stack *head,int value){
    Stack *node = (Stack*)malloc(sizeof(Stack));
    node->value = value;
    if(head == NULL)
    {
        head = node;
        head->next=NULL;
    }
    else
    {
        head->next = node;
        head = node;
    }
}

int pop(Stack *head){
   if(head!=NULL){
        Stack *top = head;
        int value = head->value;
        head = head->next;
        free(top);
        return value;
    }
    else
    {
        printf("The stack is empty!\n");
        return -1;
    }
}
