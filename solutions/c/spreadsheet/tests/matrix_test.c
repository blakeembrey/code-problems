#include <stdio.h>
#include <stdlib.h>
#include <setjmp.h>
#include <cmocka.h>
#include <stddef.h>
#include <stdarg.h>

#include "../matrix.h"
#include "../regex.h"
#include "../commons.h"
#include "../stackcalc.h"

static void testConvertToCellReference(void **state)
{
    MatrixLocation m;
    m.row = 0;
    m.col = 0;

    CellReference *ref = convertToCellReference(&m);
    assert_string_equal("A1", ref->cellReference);

    free(ref);

    m.row = 1;
    m.col = 2;

    ref = convertToCellReference(&m);
    assert_string_equal("B3", ref->cellReference);

    free(ref);
}

static void testConvertToMatrixLocation(void **state)
{
    CellReference c;
    c.cellReference = "A1";

    MatrixLocation *m = convertToMatrixLocation(&c);

    assert_int_equal(0, m->row);
    assert_int_equal(0, m->col);

    free(m);

    c.cellReference = "B5";
    m = convertToMatrixLocation(&c);
    assert_int_equal(1, m->row);
    assert_int_equal(4, m->col);

    free(m);
}

static void testSetAndGetWorkSheetValue(void **state)
{
   Worksheet *w = malloc(sizeof(Worksheet));
   initWorksheet(w, 4, 4);
   setValue(w, 0, 0, "A2 + 1");
   assert_string_equal("A2 + 1", getValue(w, 0, 0));
   free(w);
}

static void testCyclicDependency(void **state)
{
    Worksheet *w = malloc(sizeof(Worksheet));
    initWorksheet(w, 4, 4);
    
    setValue(w, 0, 0, "A2 + 1");
    assert_string_equal("A2 + 1", getValue(w, 0, 0));
    assert_int_equal(0, isCyclicRefError(w, 0, 0));

    setValue(w, 0, 1, "A1");
    assert_string_equal("A1", getValue(w, 0, 1));
    assert_int_equal(1, isCyclicRefError(w, 0, 1));
}

static void testStack(void **state)
{
    Stack *stack = malloc(sizeof(Stack));
    stack->len = 0;
    
    Node *node = malloc(sizeof(Node));
    node->value = 10.0;
    push(stack, node);
   
    Node *node2 = malloc(sizeof(Node));
    node2->value = 12.0;
    push(stack, node2);

    Node *poppedNode1 = pop(stack);
    assert_true(12.0 == poppedNode1->value);
   
    Node *poppedNode2 = pop(stack);
    assert_true(10.0 == poppedNode2->value);

    free(node);
    free(node2);
    free(stack);
}

int main(int argc, char *argv[])
{
    const struct CMUnitTest tests[] = {
        cmocka_unit_test(testConvertToCellReference),
        cmocka_unit_test(testConvertToMatrixLocation),
        cmocka_unit_test(testSetAndGetWorkSheetValue),
        cmocka_unit_test(testCyclicDependency),
        cmocka_unit_test(testStack),
    };
    
    return cmocka_run_group_tests(tests, NULL, NULL);
}
