#include <stdio.h>

void bubblesort(int *v){

    int i,j,aux;

    int size = sizeof(v) / sizeof(v[0]); // Number of indexes in the V array.

    for (i=0; i < size-1; i++) {
        for(j=i+1; j < size; j++) {
            if(v[i] > v[j]) {
                aux=v[i];
                v[i]=v[j];
                v[j]=aux;
            }
        }
    }
}