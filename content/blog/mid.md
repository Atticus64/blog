---
external: false
draft: true
title: "Midnight Book"
description: "Midnight C++ Book"
date: 2023-05-22
---

# Table of contents


# Introduction 
### The core of the program

C++ is a low level language used for high performance applications that require low level control of memory. Because of the low level nature, it will have a lot of topics to cover that are quite different from the high level languages.

We will abstract details from early explanations, then get into deeper, technical topics as we progress through this book.

This book will only cover C++ only, things such as compilers, development environments and platform specific issues will not be discussed here.

The layout for most of the topics in this book will go alongside a title encapsulating the specific topic to be discussed, a brief explanation, and some code to get a better understanding.

I encourage you to experiment with the code, rules, and examples handed to you, the only effective way to learn a language is practice.

# The core of the program

Every C++ program must have something we call "Entry Point", this tells the program where it is supposed to begin the program's logic.

This entry point is represented inside the program as a function with some specific attributes. First, it must return an integer, second, it should be called main. Optionally, it could have two parameters to represent program arguments.

Here and example of a C++ main function.

```cpp
int main(int argc, char** argv) {
	
	return 0;
}
```

Brief function declaration concepts to understand this code. We start by declaring the return type, then we indicate the function name, inside the parentheses we indicate it takes an integer and a double pointer to characters, in that specific order.

Both parameters and return are optional and you could skip them.

```cpp
int main() {
	
}
```

Also, it is recomended that the file where our entry point is located got the name "main.cpp". It is easily recognisable and a simple convention to help others read your files.

# Preprocessing what you just said

With just a main function, we can not do much you see, we need some tools to get things done. For that we can call a header file to join our code and offer some utilities.

To include a header file, we will use the `#include` preprocessor(more details about preprocessors later), the sintax is quite straight forward:

```cpp
#include <iostream>

int main() {
	
	return 0;
}
```

We first write the preprocessor `#include` and add the library's name inside `< >`, with this, we just added the input/output stream library, which is an standard C++ library.

With this we are now ready to use the library, lets try print something to the screen.

```cpp
#include <iostream>

int main() {
	std::cout << "Hello World!" << std::endl;
	
	return 0;
}
```

I do recommend not thinking about why this printing is the way it is right now, it will make sense later, just take it as it is for the moment.

# Onga Boonga Types

To make some use out of this language, it will be usefull to know which primitive types are available to be used.

Always initialize your variables, uninitialized data can lead to undefined behavior. And remember to give them significative names, that way you can express intent without polluting your code with a bunch of near obvious comments.

### Integers
Come to represent a whole number, they can be declared as `int`, `short`, `long` and `long long`, the most common to be used is `int`.

```cpp
int main() {
	short aShortInteger  = 2;
	int   aNormalInteger = 12;
	long  aLongInteger   = 400;  
	long long aReallyLongInteger = 8000;
	
	return 0;
}
```

### Decimals
Indicate a floating point number, can be declared as `float`, `double` and `long double`

```cpp
int main() {
	float aFloatingValue = 1.0f;
	double aDoubleValue  = 3.0;
	long double aLongDoubleValue = 30.0l;
	
	return 0;
}
```

Yes, these type of variables must have a letter at the end to indicate which type of floating value they represent, except for `double`.

### Characters
Store a single character(don't ask why), we represent these as `char`

```cpp
int main() {
	char aCharacter = 'c';
	
	return 0;
}
```

### Boolean
The simplest of variables, which will only indicate a yes(1) or no(0), will be specified with `bool`

```cpp
int main() {
	bool myTrueVariable = true;
	bool myFalseVariable = false;
	
	return 0;
}
```

### Auto 
The infamous deductive type, which will be translated to the value our variable is indicating to be, thus we can not leave a `auto` type variable to be undeclared.

```cpp
int main() {
	auto deductive = 40; // deduced as int
	auto invalidDeduction; // invalid use of auto, cannot deduce
	
	return 0;
}
```

We want to use `auto` in specific if the value on the left is way to obvious, the type is way too long, is quite redundand to have both type declaration and definition.

```cpp
std::vector<glm::vec3> getImageMatrix() {
	// ...
}

int main() {
	// bad, would be easier to directly use int
	auto someInteger = 40;

	// reasonable, the type the function is returning is quite long
	// and quite obvious what it is returning
	auto imageMatrix = getImageMatrix();
}
```

Do not worry about understanding the function above `main`, it is just an example of a really long type that we are able to skip if we make use of `auto`, as well as decent naming conventions.

### Void
This means, nothing, actually nothing, in fact, you cannot declare variables as `void` type, but we will discuss its use later.

# List of things I am not allowed to say

In C++ you can also make lists out of some data type, could be a list of integers, doubles, boolean values, etc. But they must be the same exact value.

The way we declare a list in C++ go as follows:

```cpp
int main() {
	int myIntegerList[5] = { 0, 2, 4, 6, 8 };
	
	return 0;
}
```

Like a normal variable declaration, giving a type, their name, and then, we add a `[]` to the end of the name, inside we will(optionally), indicate the list size, which will be some values inside curly braces and separated by a comma.

Remember the dumb `char` type moments ago, you could make an array of characters to create a string.

```cpp
int main() {
	char myString[] = "hello world!";
	
	return 0;
}
```

As you can see, this one in particular ignores the rule of putting each item of the list inside curly braces and comma separation.

# Not so functional

Functions are a really good way to encapsulate logic, make certain actions reusable and more understandable.

In order to declare functions, one must declare the return type, the name, and some parameters(if any needed).

```cpp
int add(int x, int y) {
	return x + y;
}
```

Always remember, you must `return` something of the type the function is indicating, unless you declare the function to be `void`

Yes, we can use the no type type to indicate our function does not return a thing back.

```cpp
void sayHello() {
	std::cout << "Hello World" << std::endl;
}
```

You can use return in a void function to terminate it before it is supposed to.

```cpp
void sayHello(int x) {
	if(x > 10) {
		return;
	}
	
	std::cout << "hello world" << std::endl;
}
```

If our parameter is higher than 10, this function will return immediately instead of printing the message.

Always aim for short, easy to understand, reusable functions. If you happen to encounter a problem that require many steps to be done, divide it into many functions that can achieve the desired result. This will make your code easier to mantain and read.

```cpp
// not recommended, it is doing many tasks by itself
void askAndGreet() {
	std::string name;
	std::cout << "what's your name? ";
	std::cin >> name;

	std::cout << "Hello " << name << std::endl;
}

// reasonable, the tasks are divided and then join into a bigger functions that express clear intent.
std::string getName() {
	std::string nameBuffer;
	
	std::cout << "what is your name? ";
	std::cin >> name;
	
	return nameBuffer;
}

void greetSomeone(const std::string& name) {
	std::cout << "Hello " << name << std::endl;
}

void askNameAndGreet() {
	std::string name = getName();
	greetSomeone(name);
}
```

Is it more code? yes, it is, despite the fact that this may be considered sort of "trivial", it is meant to show the core idea of keep everything encapsulated into something that do one thing and one thing right.

Do not worry about the parameters and function return types here, they will be explained soon.

### Trailing return types

There is a second way to write functions in C++, which are equivalent to the ones above, so you can skip this if you don't want to learn another method of writing functions. But try to understand it anyways, because you will probably see this later in either this book or other people code.

The idea of trailing return types is to place the return type of the function to the right side of the declaration. Why? well it is easier to read(at least for me)

```cpp
auto add(int x, int y) -> int {
	return x + y;
}
```

This code above is equivalent to

```cpp
int add(int x, int y) {
	return x + y;
}
```

Instead of reading like "function of return type int named add take two params and do this", with trailing return we can read like "function add takes two params and return an integer".

Quite a dumb syntax but it does make easier code readability(for some programmers).

### Lambdas

Type of function that is usually going to be used once, can be declared like this

```cpp
[]() {

}
```

I know, not quite the simple approach with this one, but it does have some good usages, we will further discuss this one later tho. For now get familiar with the weird sintax if you encounter it in other examples.

# Classes

These are blueprints for self declared types, they can hold variables, methods(functions) and some other stuff we will adress later.

The way we declare a class is quite simple, we just indicate the `class` keyword, give some name to our class and use curly braces to hold our data.

```cpp
class SomeClass {

};
```

To declare data inside our class, we simply indicate variables and methods like usual.

```cpp
class SomeClass {
	int m_someMember;
	
	void someMethod(float param);
};
```

Doing like the example above can lead to real mess and actually no usability from this class.

We need to organize this somehow, for that we have access specifiers. These tell us what we can access from an object like this once we try to use it.

There are three access specifiers, `public`(visible and usable), `private`(required by the class, not accessible from outside), `protected`(same as private, but can be inherited).

All members and methods, if not indicated, will be private by default, thus making the above class actually useless.

```cpp
class SomeClass {
public:
	int m_someMember;
	
	void someMethod(float param);
}
```

You can create objects with the properties you have declared in your class like any other type declaration.

```cpp
int main() {
	SomeClass myObject;
	
	return 0;
}
```

We just created an object based on a type we have created ourselves, and now to access these properties we simply use a dot operator followed by the method or member.

```cpp
int main() {
	SomeClass myObject;
	myObject.m_someMember = 10;
	myObject.someMethod(2.0f);
	
	return 0;
}
```

### Constructors

Basically a function that will get executed when an object of that class is created. We declare it with the same name we gave the class.

```cpp
class Vector3 {
public:
	Vector3(int x, int y, int z);
	
private:
	int m_x = 0;
	int m_y = 0;
	int m_z = 0;
}
```

We can either specify our methods inside the class declaration(not recommended), our outside the class declaration(recommended)

```cpp
// inside
class Vector3 {
public:
	Vector3(int x, int y, int z) {
		m_x = x;
		m_y = y;
		m_z = z
	}
	
private:
	int x = 0;
	int y = 0;
	int z = 0;
}

// outside
Vector3::Vector3(int x, int y, int z) {
	m_x = x;
	m_y = y;
	m_z = z;
}
```

You can overload the constructor and have multiple scenarios for initialization, a default initializer for example.

```cpp
class Vector3 {
public:
	Vector3(int x, int y, int z) {
		// . . .
	}
	
	Vector3() = default;

private:
	int m_x = 0;
	int m_y = 0;
	int m_z = 0;
}
```

This way, if we leave the constructor empty when we declare a vector3 type, we don't need to worry about uninitialized data, since we have declared some default state.

```cpp
int main() {
	Vector3 vecFirst(3, 0, 1); // will be using the first constructor
	Vector3 vecSecond;         // will be using default constructor
	
	return 0;
}
```

Keep your members protected from the outside, you can make methods to access you object data instead.

```cpp
class Vector3 {
public:
	Vector3() = default;
	Vector3(int x, int y, int z);

	int x() const;
	int y() const;
	int z() const;
	
private:
	int m_x = 0;
	int m_y = 0;
	int m_z = 0;
}

Vector3::Vector3(int x, int y, int z) {
	m_x = x;
	m_y = y;
	m_z = z;
}

int Vector3::x() const {
	return x;
}

int Vector3::y() const {
	return y;
}

int Vector3::z() const {
	return z;
}
```

Notice the `const` at the end of the methods, it states that you are not expected to modify any members inside this method, it won't compile and lsp(if you are using any) will also complain if you try to modify something. It is a way for us to avoid messing things when we are not supposed to. (no Patrick, you can not declare the constructor as `const`)

We want to declare a default state for our self declared types(most of the times), so we can avoid undefined behavior.

### Initializer list

There is another way to construct our objects using a class constructor, which is an initializer list.

```cpp
Vector3::Vector3(int x, int y, int z) 
	: m_x(x), m_y(y), m_z(z) {
	// ...	
}
```

This way you can have a place to declare class variables and leave the constructor body to some(if any) extra calculations.

### The 'this' keyword

You can refer to members of your class, inside your class, by using the `this` keyword.

```cpp
Vector3::Vector3(int x, int y, int z) 
	: m_x(x), m_y(y), m_z(z) {
	this->m_x = 10;
}
```

This may be used in places where you need a distinction between your members and some outside data used in some methods, but what I do recommend and you already saw I have been using it, is to name your member variables as `m_someVariable`, that way you can make clear that it is a member something of your class.

# Structs

Literally the same thing as a class, same declaration, different keyword. The key difference is that structs access specifier default is `public`.

When you need a bunch of related, structured data, use a struct.

```cpp
struct ImageInformation {
	int m_width;
	int m_height;

	char* m_name;
	// . . . 
};
```

Structs are a good way to store a lot of related data in one place, and the access is public by default, so it is cleaner in syntax.

If you need a complex object with methods, protected members and various access specifiers, use `class`

# Enums

Enumerations are a special type in C++ where you declare a range of values and explicit name constant(enumerators).

```cpp
enum Colors {
	red,
	blue,
	black,
	orange,
	// ...
}
```

By default, enum constant will be declared with values from 0 to whatever the size of the enum is (red = 0, blue = 1, black = 3, ...), but you can specify the values if you want to.

```cpp
enum Colors {
	red = 10,
	blue, 
	black,
	// ...
}
```

Now the default start will be 10(thus blue will be 11, black 12, and so on), or you could also give all constant enumerators their own value without depending on default assignation.

One little issue with these enums, which are known as *unscoped enumerators*, can be implicitly convertible into integer values, use interchangeably with these, can be accessed directly by ther enumerator without needing to specify enum name.

To solve this, you should use scoped enumerators, which will be threated by C++ differently, as if they were a complete different type. This allows a better encapsulation of these.

The declaration is quite simple, you just need to declare your enum as a `class` or `struct`

```cpp
enum struct Colors {
	// ...
};

enum class Flags {
	// ...	
};
```

These two are equivalent, but the `enum class` is used with more frecuency, so prefer that one over `enum struct`.

You could also change the type of value the enum is using, in some cases this could be useful.

```cpp
enum class Colors : char {
	red = 'r',
	blue = 'b',
	// ...
};
```

The types an enumerator is allowed to use are integers and its variants, and also chars and its possible variants.

# My deranged statements over the state

Statements in language permits a wider set of approaches we can take to tackle a problem. Things such as conditions and loops may be a simple concept, yet it allows for complex operations.

### if, else if, else

Conditions help us make code behave differently depending on the given situation.

```cpp
int fibonacciSequence(int n) {
	if(n >= 1) {
		return n;
	}
	
	return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}
```

Things like quitting recursive functions with conditions, or maybe multiple cases with different outcomes.

I do recommend avoiding overly nested conditionals, and if else chains, these can make the code harder to read, mantain, scale, and pain to debug.

```cpp
int main() {
	if(/* condition 1*/) {
	
	}
	else if(/* condition 2 */) {
	
	}
	else { /* default condition */
	
	}
}
```

### Switch 

A conditional to transfer control to one of several statements, the transfer will depend on the value given to the switch.

```cpp
#include <iostream>

int main(int argc, char** argv) {
	switch(argc) {
		case 2:
			std::cout << "just one argument!" << std::endl;
			break;
			
		case 3:
			std::cout << "two arguments!" << std::endl;
			break;
			
		default: 
			std::cout << "over two arguments!" << std::endl;
			break;
	}
}
```

This conditional mainly works with integers, but you could also make comparations using enums.

```cpp
enum class Colors {
	red,
	// ...
};

int main() {
	Colors color = Colors::red;

	switch(color) {
		case Colors::red: 
			// ...
			break
			
		// ...
	}
	
	return 0;
}
```

Some compilers might complain if you don't use all enum values for a switch case, so take that into account.

### While loops

Like the name suggest, this will execute a certain logic as long as some condition is met.

```cpp
int limit = 0;

while(limit > 10) {
	// ...
	
	limit++;
}
```

The while condition can be whatever you want as long as it is a boolean value. But you will want to make sure your condition will eventually be met at some point, otherwise we will have an infinite loop with undesireable results.

### Do while loops

Kind of the same thing as normal while loops, this one will shoot before asking tho.

```cpp
int limit = 0;

do {
	// ...
	
	limit++;
}
while(limit > 9)
```

The classic while questions if the condition is already met, if not, execute the logic inside. This one, on the other hand, will execute the logic inside, and then ask if the condition is met.

The sintax is kind of weird and its nature sort of questionable, you may need it someday, but prefer while over do while.

### For loops

Similar to the while loop, this kind of loop is divided in three sections, an index, a condition, and some iteration expression.

```cpp
for(int i = 0; i < 10; i++) {
	// ...
};
```

This loop is equivalent to the previous loop using while, and despite the fact that both seem white the same maybe; sometimes one is better than the other, it depends on the problem we want to solve.

### Range based for loop

Maybe you don't want a while, nor a for loop, you don't need to use the index and the only thing you want to do is loop over a list of items. This is a job where range based for loops comes to handy.

```cpp
int main() {
	int myListOfIntegers[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
	
	for(auto item : myListOfIntegers) {
		if(item % 2 == 0) {
			std::cout << item << " is pair" << std::endl;
		} 
		else {
			std::cout << item << " is odd" << std::endl;
		}
	}
}
```

Here, item is the variable that will represent the current item of the list, we tend to declare auto our range based items since we may or may not know the actual value of the item we are looping through. After declaring the vessel for our singular items, we put a colon and indicate the list we want to loop.

Just like the previous two, sometimes you will want to use this one, other times you may want to use another kind of loop, it depends.

### Try catch

This kind of statement is for error handling, when something can go wrong, you should use this statement, so you can correctly manage possible disasters and keep your code safe from crashing.

```cpp
try {
	// ...
}
catch(...) {
	// ...
}
```

The initial logic is simple, you declare a try block with `try` keyword, inside the block occurrs your propably unsafe actions, and if something goes wrong, the code inside the catch block will be executed.

The ellipsis (...) indicates this will catch all kind of error/exceptions that may occur, but I do recommend ussing the `stdexcept` library, more on that one later.

If some error occurs inside your code, and there is no try catch, the program will crash inmmediatly.

### Try catch function

Just as an extra, interesting info, you can actually plug the try catch block directly into the function declaration.

```cpp
#include <iostream>
#include <stdexcept>

void someFunction() try {
	// ...
}
catch(const std::exception& except) {
	std::cout << exception.what() << std::endl;	
}
```

If something goes wrong inside this function, not only it will catch the mistake, it will also display it into the standard output so we can tell what actually went wrong.


