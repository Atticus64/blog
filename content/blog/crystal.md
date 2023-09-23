---
title: New Languages and Technologies are made of Crystal
author: Jonathan
external: false
description: "To avoid mistakes done in the past, the new languages and frameworks are made with a diferent perspective"
date: 2023-09-23
---

## Let's start from the beginning

With the new languages such as Go, Rust, Typescript and more 
is easy to think the software development always have the tool chain like 
Formatters, Linters, Package Managers, Code Generators, etc. 

But the truth is in the past all of those tools aren't available 

With this example of C:

```c
#include <stdio.h>

int main(void) 
{
    int year = 2023;
	int other_year = 2022;
    int* ref_year = &year;
    printf("%d\n", *ref_year);
    return 0;
}
```

If we want to compile the program we use

```bash
gcc main.c -o main
```

And it works, all looks good, but we are not using the variable other_year, 
if we pass the flags `-Wall` and `-Werror` we will get an error

```bash
$ gcc main.c -o main -Wall -Werror
main.c: In function ‘main’:
main.c:6:13: error: unused variable ‘other_year’ [-Werror=unused-variable]
    6 |         int other_year = 2022;
      |             ^~~~~~~~~~
cc1: all warnings being treated as errors
```

And the program will not compile because the error is detected.
In contrast, in the language `Go`, with the next example

```go
package main

import "fmt"

func main() {
    year := 2023
    other_year := 2022
    fmt.Println(year)
}
```

if we try to compile, we will get an error immediately
```bash
$ go build main.go 
# command-line-arguments
./main.go:7:2: other_year declared but not used
```

This make go better than c? No.

The thing I want to emphasize is that Go learns about the `"mistakes"` of C,
the experience of the past.

## Which is better the old technology or the new?

There is not a Hammer for all works, languages are tools for different purposes
for example:

* **C** is good for embedded systems and low level programming
* **Go** is good for microservices and networking
* **Rust** is good for low level programming and apports memory safety 
* **JavaScript** is good for client side and server side in some cases

> If the only tool you have is a hammer, you tend to see every problem as a nail.

And any programming language have their pros and cons


### And why the new era of languages is made of Crystal?

The reason is simple, the new languages don't allow doing the same things as the other languages, for a few reasons like:

* **Security**
* **Portability**
* **Development Experience**

#### Why do you want an alternative and do the exact same operation without any changes?
In that case use the old language.

The technology is in constant evolution and change, but 
that not means the old technologies and languages are obsolete.

Enjoy Hacking! ☕


