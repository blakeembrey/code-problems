SHELL := /bin/sh
TEST_DIR := test/


# C++11 tests
CPP_TESTS   := stack-machine.cpp once.cpp stack.cpp queue.cpp
CPP_SOURCES := $(addprefix $(TEST_DIR), $(CPP_TESTS))


# OS specific settings
UNAME_S = $(shell uname -s)
ifeq ($(UNAME_S),Darwin)
	CXXFLAGS += -std=c++11 -stdlib=libc++
	LDFLAGS  += -lc++
	CXX := clang++
else ifeq ($(UNAME_S),Linux)
	CXXFLAGS += --std=c++11 -g
	CXX := g++
endif


# Languages
default:
	@echo "Usage: make <language>"
	@echo "Available languages: cpp, js"


# Not recommended
.IGNORE: cpp js
all: .IGNORE


# C++ build rules
FUSED_GTEST_SOURCES := $(TEST_DIR)gtest/gtest-all.cc $(TEST_DIR)gtest/gtest_main.cc
OTHER_SOURCES := $(TEST_DIR)common.cpp
CXXFLAGS += -DGTEST_HAS_PTHREAD=0 -DGTEST_HAS_TR1_TUPLE=0 -g
CPP_OBJECTS := $(CPP_SOURCES:.cpp=.o)
FUSED_GTEST_OBJECTS := $(FUSED_GTEST_SOURCES:.cc=.o)
OTHER_OBJECTS := $(OTHER_SOURCES:.cpp=.o)
cpp: hasGTest $(FUSED_GTEST_OBJECTS) $(CPP_OBJECTS) $(OTHER_OBJECTS)
	@$(CXX) $(LDFLAGS) \
		$(CPP_OBJECTS) $(FUSED_GTEST_OBJECTS) $(OTHER_OBJECTS)\
		-o cpp
	@./cpp
	@rm -rf cpp
hasGTest:
	@if [ ! -f $(TEST_DIR)gtest/gtest.h ]; then \
		git submodule update --init -f $(TEST_DIR)gtest; \
	 fi
.cpp.o:
	@$(CXX) $(CXXFLAGS) -c $< -o $@
.cc.o: 
	@$(CXX) $(CXXFLAGS) -c $< -o $@


# JS build rules
js:
	@npm install 2> /dev/null
	@npm test


# Cleanup
clean:
	@rm -f $(CPP_OBJECTS) $(FUSED_GTEST_OBJECTS)
