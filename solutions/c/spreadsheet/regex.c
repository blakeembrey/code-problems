#include "regex.h"

pcre2_code * getCellReferencePattern(void)
{
    int errorcode = 0;
    PCRE2_SIZE erroroffset;
    pcre2_code *re = pcre2_compile((PCRE2_SPTR8) CELL_REFERENCE_PATTERN, -1, 0, 
                        &errorcode, &erroroffset, NULL);
    if (re == NULL)
    {
        return 0;
    }

    return re;
}

pcre2_code *compilePattern(char *pattern) 
{
    int errorcode = 0;
    PCRE2_SIZE erroroffset;
    pcre2_code *re = pcre2_compile((PCRE2_SPTR8) pattern, -1, 0, 
                        &errorcode, &erroroffset, NULL);
    if (re == NULL)
    {
        return 0;
    }

    return re;
}
