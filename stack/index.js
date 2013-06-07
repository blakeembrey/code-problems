function Stack(){
    this.length = 0;
    this.head = null;
}

Stack.prototype = {
    push: function(data){
        var node = {
            data: data,
            next: null
        }, temp;
    
    
    if(this.head == null){
        this.head = node;
    }else{
        temp = this.head;
        this.head = node;
        this.head.next = temp;
    }
    this.length += 1;
  },
    pop: function(){
        this.head = this.head.next
        this.length -= 1;
    },
}

var stack = new Stack();

stack.push("hello");
stack.push("world");
stack.push("of");
stack.push("github");
stack.pop();
console.log(stack);