#include "gtest/gtest.h"

#include "../../solutions/cpp/stack-machine.hpp"
#include <string> // std::to_string, std::string

TEST(StackMachineTest, BasicTest) {
    EXPECT_EQ(76, solution("13+62*7+*"));
    EXPECT_EQ(-1, solution("11++"));
}

TEST(StackMachineTest, NumberTest) {
    for(int i = 0; i < 10; ++i)
        EXPECT_EQ(i, solution(std::to_string(i)));
    EXPECT_EQ(9, solution("0123456789"));
    EXPECT_EQ(0, solution("123456*****0"));
}

TEST(StackMachineTest, AdditionTest) {
    EXPECT_EQ( 2, solution("11+"));
    EXPECT_EQ( 3, solution("111++"));
    EXPECT_EQ( 3, solution("11+1+"));
    EXPECT_EQ(45, solution("0123456789++++++++"));
}

TEST(StackMachineTest, MultiplicationTest) {
    EXPECT_EQ(  0, solution("01*"));
    EXPECT_EQ(  1, solution("11*"));
    EXPECT_EQ( 64, solution("248**"));
    EXPECT_EQ( 64, solution("24*8*"));
    EXPECT_EQ(720, solution("123456*****"));
    EXPECT_EQ(  0, solution("0123456******"));
}

TEST(StackMachineTest, DISABLED_LengthTest) {
    // Tests solution with a 128*1024*1024 char long input string (128 MB).
    // Since this requies _at least_ a 16-bit integer for each number, this
    // test allocates at least a total of 384 MB of memory. On 32-bit systems,
    // this will likely end up allocating around 640 MB of memory, and on
    // 64-bit systems, around 1152 MB.
    constexpr auto length = std::size_t{128*1024*1024};
    auto longInput = std::string(length, '1');
    ASSERT_EQ(length, longInput.size());

    EXPECT_EQ(1, solution(longInput))
        << "NumberTest failed with input of size = " << longInput.size();

    longInput.append("+");
    EXPECT_EQ(2, solution(longInput))
        << "AdditionTest failed with input of size = " << longInput.size();

    longInput.append("2*");
    EXPECT_EQ(4, solution(longInput))
        << "MultiplicationTest failed with input of size = " << longInput.size();
}

TEST(StackMachineTest, EmptyTest) {
    EXPECT_EQ(-1, solution(""));
    EXPECT_EQ(-1, solution("+"));
    EXPECT_EQ(-1, solution("*"));
    EXPECT_EQ(-1, solution("0+"));
    EXPECT_EQ(-1, solution("0*"));
    EXPECT_EQ(-1, solution("12345*****"));
}

TEST(StackMachineTest, OverflowTest) {
    // Addition overflow
    EXPECT_EQ(-1, solution("88*1+97**1+"));
    EXPECT_EQ(-1, solution("88*1+97**88*1+97**+"));
    // Multiplication overflow
    EXPECT_EQ(-1, solution("88*88**"));
    EXPECT_EQ(-1, solution("288*1+97***"));
    EXPECT_EQ(-1, solution("88*1+97**88*1+97***"));
    EXPECT_EQ(-1, solution("0123456789********"));
}
