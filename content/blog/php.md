---
external: false
title: "Why php is not dead?"
shortDescription: "php is a very hated technology but is that hate justified?"
description: ""
date: 2023-12-30
---

## PHP is a bad language don't use it, really? 

This is a common thought in the world of software development, 
but is really a absolute truth?  

The software developers are conflicted, in many cases they don't understand among them, like the 
problem [spaces vs tabs](https://youtu.be/SsoOG6ZeyUI) or which programming paradigm is better [Functional vs OOP](https://www.youtube.com/watch?v=FjfgIImzhxc), but with their hate with php not.

In the stack overflow survey 2022 php was one of the most [dreaded](https://survey.stackoverflow.co/2022#section-most-loved-dreaded-and-wanted-programming-scripting-and-markup-languages) languages.
And Twitter memes well, see by yourself

{% tweet url="https://twitter.com/PhpDead/status/1740738213763764385" /%}

But wait a moment... why is this hate to php?

### A little bit of history 

Go for a cup of coffee and a bowl of popcorns, we gonna research the origin 
of this hate to php.

The development of php started at 1993, when [Rasmus Lerdorf](https://en.wikipedia.org/wiki/Rasmus_Lerdorf)
wrote a CGI ( Common Gateway Interface ) in C, to mantain their personal web page, he extended them to work 
with databases, this implementation was called Personal Home Page/Form Interpreter of `PHP/FI`. 
Today php now stands for the recursive initialism `PHP: Hypertext Preprocessor`.

Let's look a early syntax of php 👀

```php
<!--getenv HTTP_USER_AGENT-->
<!--if substr $exec_result Mozilla-->
  Hey, you are using Netscape!<p>
<!--endif-->

<!--sql database select * from table where user='$username'-->
<!--ifless $numentries 1-->
  Sorry, that record does not exist<p>
<!--endif exit-->
  Welcome <!--$user-->!<p>
  You have <!--$index:0--> credits left in your account.<p>

<!--include /text/footer.html-->
```

Early PHP was never intended to be a new programming language; rather, it grew organically, with Lerdorf noting in retrospect: 

> "I don't know how to stop it [...] there was never any intent to write a programming language [...] I have absolutely no idea how to write a programming language [...] I just kept adding the next logical step on the way.

In next versions of php, the language increases in features and tools to program with it, but the design of the language 
is very inconsistent and with their creator with no idea what is doing, well... is a recipe for disaster, the code with php legacy systems in the young versions of php are very unsafe, unpredictable and very owful to work. The development with php has turned into hell on the earth, 

In php 4 was very easy to write horrible code and no had object oriented programming, the language was unstable, with disastrous performance problems

**average php 4 dev:**

![neko-arc php dev](/images/hell.jpg)

All the hate is for that reason, a language with many problems, you can read all of them in this [blogpost](https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/)  
The Developers hate php for the same reasons of the hate of other languages like JavaScript,  it’s a technically inconsistent language with a bad design. When you compare it to other languages the contrast is obvious. 

## But, He survived? 

In 2015 with a major rewrite of the language [PHP7](https://www.php.net/manual/es/migration70.new-features.php) 
many problems of the languages they gone. But the hate continues???

![php-survived](https://y.yarn.co/d0b10a65-1820-4364-8522-d5186518f27a_text.gif)

For a couple of reasons the hate to php continues to this day 

1. The Bad fame of the language
2. Is used in the 80% of web 

> PHP evolves, not its reputation

Php is a language that does the job, it's that simple, that is why is very used
*Developers hate PHP because it’s cool to hate PHP*. 
This language continues to have a really bad reputation because of it


### Modern PHP

The language has new incredible features, like Pattern Matching, Traits, Nullish coalesing operator, 
amazing performance, its [PHP7 is faster than Python and Ruby](https://benchmarksgame-team.pages.debian.net/benchmarksgame/fastest/php.html), can be a language strongly typed if you want

* Pattern Matching

```php
$value = 3;

$result = match ($value) {
  0 => 'The value is zero',
  1, 2, 3 => 'The value is one, two, or three',
  default => 'The value is something else',
};

echo $result; // Outputs: "The value is one, two, or three"
```

* Types!!

```php
function sum(int $a, int $b) {
  return $a + $b;
}

var_dump(sum(1, 2));
var_dump(sum(1.5, 2.5)); // this produces a error of type 
/// Uncaught TypeError: sum(): Argument #1 ($a) 
//  must be of type int,
//  float given, called in - on line 9 and defined in -:4
```

Most developers hate php cause of elitism and ignorance, all languages have problems 
there is not a `perfect technology`, all has pros and cons, 

PHP is great and useful for many scenarios of web development

### Related resources and Blogs of PHP hate

* [JeSuisundev Why developers hate PHP](https://www.jesuisundev.com/en/why-developers-hate-php/)

* [Aaron Francis](https://www.youtube.com/@aarondfrancis)

{% youtube url="https://www.youtube.com/embed/ZRV3pBuPxEQ?si=K1GCe9VsxE-zs4KY" label="PHP doesn't suck anymore" /%}
