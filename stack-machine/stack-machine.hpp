#ifndef STACKMACHINE_HPP_INCLUDED
#define STACKMACHINE_HPP_INCLUDED

#include <cstdint> //std::uint_fast8_t, std::uint_fast16_t
#include <string>  //std::string
#include <vector>  //std::vector

std::int_fast16_t solution(std::string s) {
    std::vector<std::int_fast16_t> v;
    
    // efficient log2 implementation for 12-bit uint
    auto log2 = [](std::uint_fast16_t i) {
        std::uint_fast8_t r = 0;
        for(std::uint_fast8_t b = 8; b; b >>= 1) {
            if(i >> b)
            {
                i >>= b;
                r  += b;
            }
        }
        return r;
    };
    
    for(auto const c : s) {
        if(c == '+' || c == '*') {
            if(v.size() < 2)
                return -1; // too few elements
            
            auto const tmp = v.back();
            v.pop_back();
            if(c == '+') {
                v.back() += tmp;
                
                if(v.back() >= 0x1000)
                    return -1; // addition overflow
            } else {
                if(log2(tmp) + log2(v.back()) >= 12)
                    return -1; // multiplication overflow
                
                v.back() *= tmp;
            }
        } else { // guaranteed c in [0-9+*] -> if( /[0-9]/.test(c) )
            v.push_back(c - '0');
        }
    }
    
    if(v.size() == 0) return -1;
    return v.back();
}

#endif