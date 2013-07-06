#ifndef STACK_HPP_INCLUDED
#define STACK_HPP_INCLUDED

#include <utility> // std::forward
#include <memory>  // std::move

template<typename T>
class Stack {
public:
     Stack() : head{nullptr} {};
    ~Stack();

    template<typename U>
    void add(U&&);
       T remove();

    inline bool empty() const { return head == nullptr; };

private:
    struct Node {
            T data;
        Node* next;

        template<typename U>
        Node(U&& d, Node* n) : data{std::forward<U>(d)}, next{n} {};
    };

    Node* head;
};

template<typename T>
Stack<T>::~Stack() {
    // Rewriting functionality of remove here avoids a call to the move
    // constructor for each element in the stack. For code golf, use:
    //    while(!empty()) remove();
    while(!empty()) {
        auto old_head = head;
                 head = head->next;
        delete old_head;
    }
}

template<typename T>
template<typename U>
void Stack<T>::add(U&& t) {
    head = new Node{std::forward<U>(t), head};
}

template<typename T>
T Stack<T>::remove() {
    if(empty())
        throw;

    auto old_head = head;
    auto old_data = std::move(head->data);
             head = head->next;

    delete old_head;
    return old_data;
}

#endif // STACK_HPP_INCLUDED
