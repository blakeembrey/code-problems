#ifndef COMMON_HPP_INCLUDED
#define COMMON_HPP_INCLUDED

#include <deque>  // std::deque
#include <tuple>  // std::tuple

enum class Event {
    DefaultConstructorCalled,
    CopyConstructorCalled,
    MoveConstructorCalled,
    AssignmentOperatorCalled,
    DestructorCalled
};

extern std::deque<std::tuple<int, Event>> eventLog;
extern int nextId;

inline const int getId() {
    return nextId++;
};

inline void log(int id, Event e) {
    eventLog.push_back(std::make_tuple(id, e));
};

class eventLogger {
private:
    int id;
public:
    eventLogger() : id{getId()} {
        log(id, Event::DefaultConstructorCalled);
    };
    eventLogger(eventLogger const& t) : id{getId()} {
        log(id, Event::CopyConstructorCalled);
    };
    eventLogger(eventLogger&& t) : id{getId()} {
        log(id, Event::MoveConstructorCalled);
    };
    ~eventLogger() {
        log(id, Event::DestructorCalled);
    };
    eventLogger& operator=(eventLogger const& t) {
        log(id, Event::AssignmentOperatorCalled);
        return *this;
    };
};

#endif
