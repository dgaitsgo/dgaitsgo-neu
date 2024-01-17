5 years ago, I released a node package that you have to import in the most non-idiomatic way possible. It’s wonky JavaScript. But now that I know better, should I change it? Here’s why I haven’t updated it:

During my last round of interviews, one particular screener told me to be prepared for a lot of Object Orientated questions.

As I was refreshing SOLID, it occurred to me that the O doesn’t really makes sense does it? Why would I want a class that I can only ever extend and never modify? Am I supposed to just assume my first implementation of a class is the one that will be used forever? After digging a little deeper, I came across a presentation from [Kevlin Henney](https://vimeo.com/157708450) that made it all clear: yes, that’s exactly what people thought

In the heyday of the waterfall age, classes were created as platonic ideals based on requirements. Imagine a time without refactoring, without version control, without a trivial global find and replace in your IDE. See how modifying a class in such an environment could create untold amounts of havoc?

But what about now that we have all these tools, refactor my npm package and save face, right?

Well there’s an issue: the package has been downloaded 10,000 times. I have absolutely no clue how many codebases it could affect at this point if I introduce a breaking change. And this is where we arrive at a more general principle of the “O”:

If you don’t know where your code lives, think twice before modifying it.

And think extra hard before you publish!

The project in question

[npm: tiles-in-bbox](https://www.npmjs.com/package/tiles-in-bbox)