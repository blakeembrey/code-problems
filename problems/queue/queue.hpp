#ifndef STACK_HPP_INCLUDED
#define STACK_HPP_INCLUDED

#include <utility>   // std::forward
#include <memory>    // std::move
#include <stdexcept> // std::runtime_error

class empty_queue : public std::runtime_error {
public:
    empty_queue(std::string const& what_arg) : std::runtime_error{what_arg} {};
};

template<typename T>
class Queue {
public:
     Queue() : head{nullptr}, tail{nullptr} {};
    ~Queue();

    template<typename U>
    void enqueue(U&& t);
       T dequeue();

    inline bool empty() const { return head == nullptr; };

private:
    struct Node {
            T data;
        Node* next;

        template<typename U>
        Node(U&& d, Node* n) : data{std::forward<U>(d)}, next{n} {};
    };

    Node* head;
    Node* tail;
};

template<typename T>
Queue<T>::~Queue() {
    // Rewriting functionality of dequeue here avoids a call to the move
    // constructor for each element in the stack. For code golf, use:
    //    while(!empty()) dequeue();
    while(!empty()) {
        auto old_head = head;
                 head = head->next;
        delete old_head;
    }
}

template<typename T>
template<typename U>
void Queue<T>::enqueue(U&& t) {
    auto node = new Node{std::forward<U>(t), nullptr};
    if(empty())
        head = node;
    else
        tail->next = node;
    tail = node;
}

template<typename T>
T Queue<T>::dequeue() {
    if(empty())
        throw empty_queue{"Dequeue called on empty queue."};

    auto old_head = head;
    auto old_data = std::move(head->data);
             head = head->next;

    // actually unnecessary
    /* if(empty()) */
    /*     tail = nullptr; */

    delete old_head;
    return old_data;
}

#endif // STACK_HPP_INCLUDED
