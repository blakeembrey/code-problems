#ifndef ONCE_HPP_INCLUDED
#define ONCE_HPP_INCLUDED

#include <type_traits> // std::decay, std::is_same
#include <stdexcept>   // std::runtime_error
#include <cstddef>     // std::size_t
#include <utility>     // std::forward
#include <functional>  // std::mem_fun

struct out_of_calls : std::runtime_error {
    out_of_calls(std::string const& what_arg) : std::runtime_error{what_arg} {};
};

template<typename Functor>
struct once_t {
    typename std::decay<Functor>::type functor;
    std::size_t times;

    template<typename... Args>
    auto operator()(Args&&... args) -> decltype(functor(std::forward<Args>(args)...)) {
        if(times != 0) {
            --times;
            return functor(std::forward<Args>(args)...);
        }
        if(!std::is_same<decltype(functor(std::forward<Args>(args)...)), void>::value)
            throw out_of_calls{"Non-void function called beyond requested allowance."};
    };
};

template<typename Functor>
auto once(Functor&& functor) -> once_t<Functor> {
    return {std::forward<Functor>(functor), 1};
}

template<typename Functor>
auto once(Functor&& functor, std::size_t const times) -> once_t<Functor> {
    return {std::forward<Functor>(functor), times};
}

template<typename S, typename T, typename... A>
auto once(S(T::*fn)(A...)) -> once_t<decltype(std::mem_fun(fn))> {
    return {std::mem_fun(fn), 1};
}

template<typename S, typename T, typename... A>
auto once(S(T::*fn)(A...), std::size_t const times) -> once_t<decltype(std::mem_fun(fn))> {
    return {std::mem_fun(fn), times};
}

template<typename S, typename T, typename... A>
auto once(S(T::*fn)(A...) const) -> once_t<decltype(std::mem_fun(fn))> {
    return {std::mem_fun(fn), 1};
}

template<typename S, typename T, typename... A>
auto once(S(T::*fn)(A...) const, std::size_t const times) -> once_t<decltype(std::mem_fun(fn))> {
    return {std::mem_fun(fn), times};
}

#endif //ONCE_HPP_INCLUDED
