pubsub
------
Experimental and probably redundant node pubsub. Question: Why does node-pubsub (https://github.com/swallentin/node-pubsub) not use event emitter? Seems simpler...

Usage
-----

    var topic = require("./pubsub");

    topic.sub("topicname", function(one, two, three, four)
    {
      console.log("topicname executed with ", arguments, "or ", one, two, three, four);
    });
    var anotherHandler = topic.sub("topicname", function()
    {
      console.log("another topicname callback which should not execute.");
    });
    topic.unsub(anotherHandler);

    topic.pub("topicname", "one", "two", "three", "<-- these are args");

Produces output:

    topicname executed with  { '0': 'one',
      '1': 'two',
      '2': 'three',
      '3': '<-- these are args' } or  one two three <-- these are args


