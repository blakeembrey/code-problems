#include "gtest/gtest.h"

#include "../../solutions/cpp/once.hpp"
#include <string>
#include <functional>
using std::string;
using std::to_string;
using std::multiplies;

std::size_t fibonacci(std::size_t n) {
    if(n == 0) return 0;
    if(n == 1) return 1;

    std::size_t a = 0, b = 1, c;
    for(; n > 1; --n) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

struct HolderOfTruth {
    bool theTruth;

    bool getTruth() const {
        return theTruth;
    };

    void setTruth(bool newTruth) {
        theTruth = newTruth;
    }
};

TEST(OnceTest, VoidLambdaJustOnce) {
    int i = 0;
    auto f = once( [&i](){ ++i; } );
    ASSERT_EQ(0, i);

    f();
    EXPECT_EQ(1, i);

    EXPECT_NO_THROW(f());
    EXPECT_EQ(1, i);
}

TEST(OnceTest, VoidLambdaManyTimes) {
    int i = 0;
    auto f = once( [&i](){ ++i; }, 30);
    ASSERT_EQ(0, i);

    for(int j = 1; j <= 30; ++j) {
        f();
        EXPECT_EQ(j, i);
    }

    EXPECT_NO_THROW(f());
    EXPECT_EQ(30, i);
}

TEST(OnceTest, IntReturningLambda) {
    int i = 10;
    auto f = once( [&i](){ return i; }, 2);
    ASSERT_EQ(10, i);

    EXPECT_EQ(10, f());
    i = 13;
    EXPECT_EQ(13, f());

    EXPECT_THROW(f(), out_of_calls);
}

TEST(OnceTest, StringReturningLambda) {
    auto s = string{"Hi there!"};
    auto f = once( [](){ return string{"Hi there!"}; } );

    EXPECT_EQ(s, f());

    EXPECT_THROW(f(), out_of_calls);
}

TEST(OnceTest, LambdaWithArgs) {
    auto f = once( [](int i, string s){ return to_string(i) + " " + s; }, 2);
    EXPECT_EQ("1 time",  f(1, "time"));
    EXPECT_EQ("2 times", f(2, "times"));
    EXPECT_THROW(f(3, "times"), out_of_calls);
}

TEST(OnceTest, FunctorStruct) {
    auto f = once( multiplies<float>(), 3);

    EXPECT_FLOAT_EQ(120.0,  f(2.4, 50.0));
    EXPECT_FLOAT_EQ(16.5,   f(0.5, 33.0));
    EXPECT_FLOAT_EQ(145.64, f(11., 13.24));
    EXPECT_THROW(f(1.0, 1.0), out_of_calls);
}

TEST(OnceTest, FunctionPointer) {
    auto f = once( fibonacci, 30 );
    for(int i = 0; i < 30; ++i)
        EXPECT_EQ(fibonacci(i), f(i));
    EXPECT_THROW(f(0), out_of_calls);
}

TEST(OnceTest, MemberFunctions) {
    auto f = once(&HolderOfTruth::getTruth, 6);
    auto g = once(&HolderOfTruth::setTruth, 3);

    auto TrueHolder = new HolderOfTruth{true};
    auto FakeHolder = new HolderOfTruth{false};

    ASSERT_TRUE( TrueHolder->getTruth());
    ASSERT_FALSE(FakeHolder->getTruth());

    EXPECT_TRUE( f(TrueHolder));
    EXPECT_FALSE(f(FakeHolder));

    EXPECT_NO_THROW(g(TrueHolder, false));
    EXPECT_NO_THROW(g(FakeHolder, true));

    EXPECT_FALSE(f(TrueHolder));
    EXPECT_TRUE( f(FakeHolder));

    EXPECT_NO_THROW(g(TrueHolder, true));
    EXPECT_NO_THROW(g(FakeHolder, false));

    EXPECT_TRUE(f(TrueHolder));
    EXPECT_TRUE(f(FakeHolder));

    EXPECT_THROW(f(TrueHolder), out_of_calls);
}
