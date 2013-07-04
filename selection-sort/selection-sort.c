#include <stdio.h>

void selectionsort(int *v) {

    int i, j, min, aux;

    int size = sizeof(v) / sizeof(v[0]); // Number of indexes in the V array.

    for(i = 0; i < n-1; i++){
        min = i;
        for (j = i+1; j < n; j++)
            if (v[j] < v[min])
                min = j;
        aux = v[i];
        v[i] = v[min];
        v[min] = aux;
    }
}