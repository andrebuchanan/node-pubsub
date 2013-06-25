var topic = require("./pubsub");

topic.sub("topicname", function(one, two, three, four)
{
  console.log("topicname executed with ", arguments, "or ", one, two, three, four);
});
var anotherHandler = topic.sub("anothertopic", function(argshere)
{
  console.log("anothertopic executed with ", arguments);
});
topic.unsub(anotherHandler);

topic.pub("topicname", "one", "two", "three", "<-- these are args");
