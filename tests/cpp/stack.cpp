#include "gtest/gtest.h"
#include "common.hpp"

#include "../../solutions/cpp/stack.hpp"

class StackTest : public::testing::Test {
protected:
    virtual void SetUp() {
        nextId = 0;
        eventLog.clear();
    }
};

TEST_F(StackTest, BasicTest) {
    Stack<int> s;
    s.add(4);
    s.add(7);
    s.add(23);
    EXPECT_EQ(23, s.remove());
    EXPECT_EQ(7, s.remove());
    EXPECT_EQ(4, s.remove());
    EXPECT_THROW(s.remove(), empty_stack);
}

TEST_F(StackTest, PassingRvalueCallsMoveConstructorOnce) {
    {
        Stack<eventLogger> s;
        s.add(eventLogger{});
    }
    ASSERT_EQ(eventLog.size(), 4);

    using std::get;
    auto e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DefaultConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::MoveConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));
}

TEST_F(StackTest, RemoveReturnsRvalue) {
    {
        Stack<eventLogger> s;
        s.add(eventLogger{});
        s.remove();
    }
    ASSERT_EQ(eventLog.size(), 6);

    using std::get;
    auto e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DefaultConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::MoveConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(2, get<0>(e));
    EXPECT_EQ(Event::MoveConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(2, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));
}

TEST_F(StackTest, PassingReferenceCallsCopyConstructorOnce) {
    {
        eventLogger l;
        Stack<eventLogger> s;
        s.add(l);
    }
    ASSERT_EQ(eventLog.size(), 4);

    using std::get;
    auto e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DefaultConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::CopyConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));
}

TEST_F(StackTest, RemoveOfCopyReturnsRvalueOfCopy) {
    {
        Stack<eventLogger> s;
        eventLogger l;
        s.add(l);
        s.remove();
    }
    ASSERT_EQ(eventLog.size(), 6);

    using std::get;
    auto e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DefaultConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::CopyConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(2, get<0>(e));
    EXPECT_EQ(Event::MoveConstructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(1, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(2, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));

    e = eventLog.front();
    eventLog.pop_front();
    EXPECT_EQ(0, get<0>(e));
    EXPECT_EQ(Event::DestructorCalled, get<1>(e));
}
