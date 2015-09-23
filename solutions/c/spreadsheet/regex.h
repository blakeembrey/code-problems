#define PCRE2_CODE_UNIT_WIDTH 8

#include <pcre2.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

static const char *CELL_REFERENCE_PATTERN = "[A-Za-z]\\d+";

pcre2_code *getCellReferencePattern(void);

/**
 * Creates a regular expression pattern based on {pattern}
 */
pcre2_code *compilePattern(char *pattern);


