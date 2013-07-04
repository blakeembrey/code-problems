#ifndef STACK_HPP_INCLUDED
#define STACK_HPP_INCLUDED

#include <memory> // std::move

template<class T>
class Stack {
public:
     Stack() : head{nullptr} {};
    ~Stack();

    void add(T const&);
    void add(T&&);

       T remove();

    inline bool empty() const { return head == nullptr; };

private:
    struct Node {
            T data;
        Node* next;

        Node(T const& d, Node* n) : data{d},            next{n} {};
        Node(T&& d,      Node* n) : data{std::move(d)}, next{n} {};
    };

    Node* head;
};

template<class T>
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

template<class T>
void Stack<T>::add(T const& t) {
    head = new Node{t, head};
}

template<class T>
void Stack<T>::add(T&& t) {
    head = new Node{std::move(t), head};
}

template<class T>
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
