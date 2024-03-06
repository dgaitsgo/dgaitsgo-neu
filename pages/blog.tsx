
function Blog() {

    return (
        <div>
            <div className="blog-body">
                <p className="blog-back">← back</p>

                {/* <div className='header'> */}
                <h2>What's “Open–closed principle” really about?</h2>
                <span className="blog-metadata"><span>Dec 12th 2023</span></span>
                <p className="blog-prose">
                    5 years ago, I released a node package that you have to import in the most non-idiomatic way possible. It’s illegal JavaScript. But now that I know better, should I change it? Here’s why I haven’t updated it:
                    <br></br>

                    During my last round of interviews, one particular screener told me to be prepared for a lot of Object Orientated questions.
                    <br></br>
                    <br></br>
                    As I was refreshing SOLID, it occurred to me that the O doesn’t really makes sense does it? Why would I want a class that I can only ever extend and never modify? Am I supposed to just assume my first implementation of a class is the one that will be used forever? After digging a little deeper, I came across a presentation from [Kevlin Henney](https://vimeo.com/157708450) that made it all clear: yes, that’s exactly what people thought!
                    <br></br>
                    <br></br>
                    In the heyday of the waterfall age, classes were created as platonic ideals based on requirements. Imagine a time without refactoring, without version control, without a trivial global find and replace in your IDE. See how modifying a class in such an environment could create untold amounts of havoc?
                    <br></br>
                    <br></br>
                    But what about now that we have all these tools, refactor my npm package and save face, right?
                    <br></br>
                    <br></br>
                    Well there’s an issue: the package has been downloaded 10,000 times! I have absolutely no clue how many codebases it could affect at this point if I introduce a breaking change. And this is where we arrive at a more general principle of the “O”:
                    <br></br>
                    <br></br>
                    If you don’t know where your code lives, think twice before modifying it.
                    <br></br>
                    <br></br>
                    And think extra hard before you publish!
                    <br></br>
                    <br></br>
                    The project in question

                </p>
                {/* </div> */}
                <div className="blog-tags">
                    <span>SOLID</span>
                    <span>open source</span>
                    <span>GIS</span>
                    <span>Mapbox</span>
                    <span>Design-principles</span>
                    <span>JS</span>
                </div>
            </div>
        </div>
    )
}

export default Blog