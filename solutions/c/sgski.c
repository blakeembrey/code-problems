// required; otherwise clang will complain that getline has not been declared
#define _XOPEN_SOURCE 700
#include <stdio.h>
#include <ctype.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
    int **matrix;
    int rowCount;
    int colCount;
} matrix;

typedef struct {
    char* solution; 
    int distance;
    int drop;
} solution;

typedef struct {
    int row;
    int col;
} cellIndex;

// input file reading routines
void readfile(matrix *m, FILE* fp);
void initMatrix(matrix *m, char* line);
void readline(matrix *m, char* line, int rowIndex);

// solution finder
void findSkiPath(matrix *m, solution *sol);
void checkAdjacentCells(const char* path, matrix *m, cellIndex index, solution *sol, int currentValue);
void evaluateSolution(solution *sol, const char* path);

// miscellaneous routines
void showContents(matrix *m);

int main(int argc, char* argv[]) {

    if(argc != 2) {
        printf("usage: sgski <input file>\n");
        exit(1);
    }

    char* filename = argv[1];
    FILE *ifp = fopen(filename, "r");
    if (ifp == NULL) {
        printf("Unable to open input file %s\n", filename);
        exit(EXIT_FAILURE);
    }

    // initialize the solution structure
    solution *sol = malloc(sizeof(solution));
    sol->solution = malloc(sizeof(char) * 100);
    sol->distance = 0;
    sol->drop = 0;

    matrix *m = malloc(sizeof(matrix));

    // read the input file into the matrix
    readfile(m, ifp);

    // close file after reading
    fclose(ifp);
    
    findSkiPath(m, sol);

    printf("Ski Path: %s; Distance: %d; Drop: %d\n", sol->solution, sol->distance, sol->drop);

    // release resources
    free(sol);
    free(m);

    return 0;
}

void findSkiPath(matrix *m, solution *sol) {
    for (int i = 0; i < m->rowCount; i++) {
        for (int j = 0; j < m->colCount; j++) {
            int value = m->matrix[i][j];
            char* path = malloc(sizeof(char) * 6);
            sprintf(path, "%d ", value);
            
            cellIndex index;
            
            // check east
            index.row = i;
            index.col = j + 1;
            checkAdjacentCells(path, m, index, sol, value);

            // check west
            index.row = i;
            index.col = j - 1;
            checkAdjacentCells(path, m, index, sol, value);

            // check north 
            index.row = i - 1;
            index.col = j;
            checkAdjacentCells(path, m, index, sol, value);

            // check south
            index.row = i + 1;
            index.col = j;
            checkAdjacentCells(path, m, index, sol, value);
        }
    }    
}

void checkAdjacentCells(const char* path, matrix *m, cellIndex index, solution *sol, int currentValue) {

    // The base case - If we go beyond the limits of the matrix
    if(index.row < 0 || index.row > (m->rowCount - 1) 
            || index.col < 0 || index.col > (m->colCount - 1)) {
        evaluateSolution(sol, path);
        return;
    }

    // check if the next cell has a lower value than the current cell
    int val = m->matrix[index.row][index.col];
    if(val < currentValue) {
        char* newPath = malloc(sizeof(char) * (strlen(path) + 4 + 1 + 1)); // the 4-digit value + space + \0
        strcpy(newPath, path);

        char *ch = malloc(sizeof(char) * (5 + 1)); // support upto 4-digit value and \0 (string terminator)
        if(ch == NULL) {
            printf("Unable to allocate memory\n");
            exit(EXIT_FAILURE);
        }
        sprintf(ch, "%d ", val);
        strcat(newPath, ch);
        free(ch);

        int r = index.row, c = index.col;

        // check east
        index.row = r;
        index.col = c + 1;
        checkAdjacentCells((const char*) newPath, m, index, sol, val);

        // check west
        index.row = r;
        index.col = c - 1;
        checkAdjacentCells((const char*) newPath, m, index, sol, val);

        // check north 
        index.row = r - 1;
        index.col = c;
        checkAdjacentCells((const char*) newPath, m, index, sol, val);

        // check south
        index.row = r + 1;
        index.col = c;
        checkAdjacentCells((const char*) newPath, m, index, sol, val);

        free(newPath);
    }

    // all ajacent cells have bigger value then the current cell
    evaluateSolution(sol, path);
    return;
}

/**
 * Checks if the longest path with the steepest drop has been found.
 */
void evaluateSolution(solution *sol, const char* path) {
    // split the string by the space delimiter
    int distance = 1;
    char *dropTemp[2];
    dropTemp[0] = strtok(strdup(path), " ");
    char* end = dropTemp[1] = strdup(dropTemp[0]);

    while ((end = strtok(NULL, " ")) != NULL) {
        dropTemp[1] = end;
        distance++;
    }

    if(distance < sol->distance) {
        return;
    }

    int drop = atoi(dropTemp[0]) - atoi(dropTemp[1]);
    if(distance > sol->distance || drop > sol->drop) {
        strcpy(sol->solution, path);
        sol->distance = distance;
        sol->drop = drop;
    } 
}

void readfile(matrix *m, FILE* fp) {
    int rowIndex = 0;
    size_t len = 0;
    size_t read = -1;
    char *line;
    
    while ((read = getline(&line, &len, fp) != -1)) {
        if (rowIndex == 0) {
            // the first row of the input file
            // contains the size of the matrix.
            initMatrix(m, line);
        } else {
            readline(m, line, rowIndex);
        }

        rowIndex++;
    }
}

/**
 * Reads the size of the matrix from the first line of the input file and 
 * sets the row and column counts into the parameters rowCount and colCount 
 * attributes of matrix m.
 *
 * This function is to be called on the first line of the input file.
 */
void initMatrix(matrix *m, char* line) {

    // reads the row count - the first value on the line string
    char *ch = strtok(line, " ");
    m->rowCount = atoi(ch);
    
    // reads the column count - the second value on the line string
    ch = strtok(NULL, " ");
    m->colCount = atoi(ch);
      
    // initialize a two-dimentional array of size rowCount * columnCount
    int** matrix = (int **) malloc(sizeof(int *) * m->rowCount);
    for(int i = 0; i < m->rowCount; i++) {
       matrix[i] = (int *) malloc(sizeof(int) * m->colCount); 
    }
   
    m->matrix = matrix;    
}

void readline(matrix *m, char* line, int rowIndex) {
    int colIndex = 0;
    char *ch = strtok(line, " ");

    while(ch != NULL) {
        int val = atoi(ch);
        if(val > 9999) {
            printf("Invalid input file. Cannot have value greater than 9999\n");
            exit(EXIT_FAILURE);
        }

        m->matrix[rowIndex - 1][colIndex] = atoi(ch);
        ch = strtok(NULL, " ");
        colIndex++;
    }
}

/**
 * Prints the contents of the matrix into the console
 */
void showContents(matrix *m) {
    for(int i = 0; i < m->rowCount; i++) {
        for (int j = 0; j < m->colCount; j++) {
            printf("%d ", m->matrix[i][j]);
        }
        printf("\n");
    }
}
