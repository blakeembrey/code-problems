
typedef struct
{
    char ***cells;
    int rows;
    int cols;
} Worksheet;

typedef struct 
{
    int row;
    int col;
} MatrixLocation;

typedef struct 
{
    char *cellReference;
} CellReference;

// The maximum content of a cell (4k)
#define CELL_CONTENT_LIMIT 2048 

#define ROW_TO_ASCII_OFFSET 65

/**
 * Initializes the 2d matrix of size rows * columns. 
 *
 * Returns 0 if an error is encountered.
 */
int initWorksheet(Worksheet *worksheet, int rows, int columns);

/**
 * Closes and releases the resources of the worksheet
 */
int closeWorksheet(Worksheet *w);

/**
 * Returns 1 if a cyclic dependency is detected. 0 if otherwise.
 */
int isCyclicRefError(const Worksheet *worksheet, int row, int col);

/**
 * Sets cellContent into the worksheet
 */
int setValue(Worksheet *worksheet, int row, int column, char *cellContent);

/**
 * Returns the value at row, col
 */
char* getValue(const Worksheet *worksheet, int row, int column);

/**
 * Returns the value at row, col and writes it into the buffer.
 *
 * Usage:
 *
 * char *buffer;
 * getValue2(w, &buffer, row, column);
 *
 */
int getValue2(const Worksheet *w, char **buffer, int row, int column);

/**
 * Returns a pointer to a CellReference structure
 */
CellReference *convertToCellReference(const MatrixLocation *matrixLocation);

/**
 * Returns a pointer to a MatrixLocation structure
 */
MatrixLocation *convertToMatrixLocation(const CellReference *cellReference);


