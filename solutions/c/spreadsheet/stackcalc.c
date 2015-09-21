#define PCRE2_CODE_UNIT_WIDTH 8

#include <string.h>
#include <pcre2.h>

#include "matrix.h"
#include "stackcalc.h"

void push(Stack *stack, Node *node)
{
    // create new nodelist head
    node->next = stack->nodeList;
    stack->nodeList = node;
    stack->len++;
}

Node *pop(Stack *stack)
{
    Node *nodeList = stack->nodeList;
    Node *newHead = nodeList->next;

    // remove reference to the next
    nodeList->next = NULL;
    stack->nodeList = newHead;
     
    return nodeList;
}
