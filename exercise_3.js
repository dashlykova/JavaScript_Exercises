

/*
'This' references to the object that is executing the current function.
method references to an object
function doesn't. It's not part of the object. It references to global object (window in browser, global in node) 


const video ={
    title: 'a',
    play (){
        console.log(this);
    }
};
video.play();

play is a method in the video object. 'this' references to the object itself

Similarities can be found with Ruby's self. However , self is variable that changes depending on the context.
It is receiver object of the current method.

********************
Help for understanding this subject was gotten from the youtube channel 'Programming with Mosh' 
&
https://stackoverflow.com/questions/26717596/what-are-the-differences-between-self-in-ruby-and-this-in-javascript
*/