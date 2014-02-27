# encoding: utf-8

module Brackets
  @left_brackets  = {'(' => 1, '[' => 2, '{' => 3}
  @right_brackets = {')' => 1, ']' => 2, '}' => 3}
  def self.balanced?(str)
    stack = Array.new
    str.each_char { |c|
      if @left_brackets.key?(c) # meets a left bracket, push into stack
        stack.push(c)
      elsif @right_brackets.key?(c) # meets a right bracket, check it
        if stack.empty?
          return false
        elsif @left_brackets[stack.last] == @right_brackets[c]
          stack.pop
        else
          return false
        end
      else # meets some char unknown
        raise "unknown character"
      end
    }

    stack.empty? ? true : false
  end
end


# p Brackets.balanced?('()[]{}(([])){[()][]}')
# p Brackets.balanced?('())[]{}')
# p Brackets.balanced?('[(])')
