#include "commons.h"

int getNumberOfDigits(int n)
{
    if (n < 0) return -1;
    if (n < 10) return 1;
    if (n < 100) return 2;
    if (n < 1000) return 3;
    if (n < 10000) return 4;
    if (n < 100000) return 5;
    if (n < 1000000) return 6;

    return -1;
}
