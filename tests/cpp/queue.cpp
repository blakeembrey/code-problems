#include "gtest/gtest.h"
#include "common.hpp"

#include "../../solutions/cpp/queue.hpp"

class QueueTest : public::testing::Test {
protected:
    virtual void SetUp() {
        nextId = 0;
        eventLog.clear();
    }
};

TEST_F(QueueTest, BasicTest) {
    Queue<int> s;
    s.enqueue(4);
    s.enqueue(7);
    s.enqueue(23);
    EXPECT_EQ(4, s.dequeue());
    EXPECT_EQ(7,  s.dequeue());
    EXPECT_EQ(23,  s.dequeue());
    EXPECT_THROW(s.dequeue(), empty_queue);
}

TEST_F(QueueTest, PassingRvalueCallsMoveConstructorOnce) {
    {
        Queue<eventLogger> s;
        s.enqueue(eventLogger{});
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

TEST_F(QueueTest, DequeueReturnsRvalue) {
    {
        Queue<eventLogger> s;
        s.enqueue(eventLogger{});
        s.dequeue();
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

TEST_F(QueueTest, PassingReferenceCallsCopyConstructorOnce) {
    {
        eventLogger l;
        Queue<eventLogger> s;
        s.enqueue(l);
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

TEST_F(QueueTest, DequeueOfCopyReturnsRvalueOfCopy) {
    {
        Queue<eventLogger> s;
        eventLogger l;
        s.enqueue(l);
        s.dequeue();
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
