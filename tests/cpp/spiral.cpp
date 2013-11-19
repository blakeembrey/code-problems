#include "gtest/gtest.h"

#include "../../solutions/cpp/spiral.hpp"

TEST(SpiralTest, BasicTest) {
    typedef std::vector<unsigned int> v;
    EXPECT_EQ(v({ 13,  8,  7, 12, 17, 18, 19, 14, 9, 4, 3, 2, 1, 6, 11, 16,
                  21, 22, 23, 24, 25, 20, 15, 10, 5 }), spiral(5, 5, 3, 3));
    EXPECT_EQ(v({  2,  1,  5,  6,  7,  3,  8,  4 }), spiral(2, 4, 1, 2));
}
