#ifndef SPIRAL_HPP_INCLUDED
#define SPIRAL_HPP_INCLUDED

#include <vector>  // std::vector
#include <utility> // std::move

std::vector<unsigned int> spiral(unsigned int height, unsigned int width, int row, int column) {
    enum {
        Up, Left, Down, Right
    } currentDirection = Up;
    unsigned int maxLength = 1,
                    length = 0;
    std::vector<unsigned int> visited;

    while(visited.size() != height*width) {
        if(width >= column && column > 0)
            if(height >= row && row > 0)
                visited.push_back(column + (row - 1)*width);

        switch(currentDirection) {
            case Up:
                --row;
                break;
            case Left:
                --column;
                break;
            case Down:
                ++row;
                break;
            case Right:
                ++column;
                break;
        }

        ++length;

        if(length == maxLength) {
            length = 0;

            switch(currentDirection) {
                case Up:
                    currentDirection = Left;
                    break;
                case Left:
                    currentDirection = Down;
                    ++maxLength;
                    break;
                case Down:
                    currentDirection = Right;
                    break;
                case Right:
                    currentDirection = Up;
                    ++maxLength;
                    break;
            }
        }
    }

    return std::move(visited);
}

#endif
