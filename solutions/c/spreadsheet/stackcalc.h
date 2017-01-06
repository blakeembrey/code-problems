
typedef struct Node
{
    double value;
    struct Node *next;
} Node;

typedef struct 
{
    Node *nodeList;
    int len;
} Stack;

/**
 * Pushes node into the stack
 */
void push(Stack *stack, Node *node);

/**
 * Pops a node from the stack. Returns NULL if stack is empty
 */
Node *pop(Stack *stack);
