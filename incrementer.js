/*
 *  IanniX Score File
 */



/*
 *  This method is called first.
 *  It is the good section for asking user for script global variables (parameters).
 *
 *  This section is never overwritten by IanniX when saving.
 */
function askUserForParameters() {
  //title("The title of the parameter box");
  //ask("Group name of the parameter (only for display purposes)", "Parameter label", "myGlobalVar", "theDefaultValue");
  //Ask user for parameters before creation of the score
  //Name of the script
  title("Incrementer");
  //Global variables
  ask("Circles", "Sequence's max interval", "max", 12);
  ask("Circles", "Radius", "circleRadius", 20);

}


/*
 *  This method stores all the operations made through IanniX scripts.
 *  You can add some commands here to make your own scripts!
 *  Scripts are written in Javascript but even with a limited knowledge of Javascript, many types of useful scripts can be created.
 *
 *  Beyond the standard javascript commands, the run() function is used to send commands to IanniX.
 *  Commands must be provided to run() as a single string.
 *  For example, run("zoom 100"); sets the display zoom to 100%.
 *
 *  To combine numeric parameters with text commands to produce a string, use the concatenation operator.
 *  In the following example center_x and center_y are in numeric variables and must be concatenated to the command string.
 *  Example: run("setPos current " + center_x + " " + center_y + " 0");
 *
 *  To learn IanniX commands, perform an manipulation in IanniX graphical user interface, and see the Helper window.
 *  You'll see the syntax of the command-equivalent action.
 *
 *  And finally, remember that most of commands must target an object.
 *  Global syntax is always run("<command name> <target> <arguments>");
 *  Targets can be an ID (number) or a Group ID (string name of group) (please see "Info" tab in Inspector panel).
 *  Special targets are "current" (last used ID), "all" (all the objects) and "lastCurve" (last used curve).
 *
 *  This section is never overwritten by IanniX when saving.
 */



var circleRadius = circleRadius || 10 ;
var max = max || 8;
var seq = [1];

var createSequence = function(){
  var restsCount = 1;
  for(var i=0; i<max; i++){
    seq.push(1);
    for(j=0; j<restsCount; j++){
        seq.push(0);
      }
    restsCount++;
  }
  return seq;
};

var createTrigger = function(index, IDprefix, RGBA, size, posX, posY){
  // index => iterater value when creating triggers inside a loop
  // IDprefix => used to offset the trigger's ID by a large number to distinguish different groups of triggers
  // color => array of RGBA values (0-255)
  // size =>

  var r = RGBA[0];
  var g = RGBA[1];
  var b = RGBA[2];
  var a = RGBA[3];

  run("add trigger " + (IDprefix + index));
  run("setPos      current "+posX+" "+posY+" 0");
  run("setSize       current " +size);
  run("setColor current "+ r +" "+ g +" "+ b +" " + a);
}

var distributeCircle = function(sequence, radius){
  var angle = 0;
  var step = (2*Math.PI) / sequence.length;
  var width = 0;
  var height = 0;

    //loop over sequence length, creating triggers
  for(var index = 0; index < seq.length; index++){
    // subract half the height of each trigger from X+Y values to center them
    // var x = Math.round(width/2 + radius * Math.cos(angle);
    // var y = Math.round(height/2 + radius * Math.sin(angle);
    var x = width/2 + radius * Math.cos(angle);
    var y = height/2 + radius * Math.sin(angle);

    // seq is an array of 0's and 1's
    seq[index] ? createTrigger(index, 3000, [100, 100, 255, 100], 1, x, y) : createTrigger(index, 2000, [0, 0, 100, 200], 0.5, x, y);

    angle += step;
  }


}


function makeWithScript() {

  //Clears the score
  run("clear");
  //Resets rotation
  run("rotate 0 0 0");
  //Resets score viewport center
  run("center 0 0");
  //Resets score zoom
  run("zoom 100");

  createSequence();
  distributeCircle(seq, circleRadius);

}
/*
 *  When an incoming message is received, this method is called.
 *    - <protocol> tells information about the nature of message ("osc", "midi", "direct…)
 *    - <host> and <port> gives the origin of message, specially for IP protocols (for OpenSoundControl, UDP or TCP, it is the IP and port of the application that sends the message)
 *    - <destination> is the supposed destination of message (for OpenSoundControl it is the path, for MIDI it is Control Change or Note on/off…)
 *    - <values> are an array of arguments contained in the message
 *
 *  This section is never overwritten by IanniX when saving.
 */
function onIncomingMessage(protocol, host, port, destination, values) {
  //Logs a message in the console (open "Config" tab from Inspector panel and see "Message log")
  console("Received on '" + protocol + "' (" + host + ":" + port + ") to '" + destination + "', " + values.length + " values : ");

  //Browses all the arguments and displays them in log window
  for(var valueIndex = 0 ; valueIndex < values.length ; valueIndex++)
    console("- arg " + valueIndex + " = " + values[valueIndex]);
}

/*
 *  This method stores all the operations made through the  graphical user interface.
 *  You are not supposed to modify this section, but it can be useful to remove some stuff that you added accidentaly.
 *
 *  Be very careful! This section is automaticaly overwritten when saving a score.
 */
function madeThroughGUI() {
//GUI: NEVER EVER REMOVE THIS LINE
  run("zoom 665.121");
  run("rotate 0 0 0");
  run("speed 1");
  run("center 16.919 -2.08145");


  run("setsolo 3021 0");



//GUI: NEVER EVER REMOVE THIS LINE
}


/*
 *  This method stores all the operations made by other softwares through one of the IanniX interfaces.
 *  You are not supposed to modify this section, but it can be useful to remove some stuff that you or a third party software added accidentaly.
 *
 *  Be very careful! This section is automaticaly overwritten when saving a score.
 */
function madeThroughInterfaces() {
//INTERFACES: NEVER EVER REMOVE THIS LINE
  run("speed 1");



//INTERFACES: NEVER EVER REMOVE THIS LINE
}


/*
 *  This method is called last.
 *  It allows you to modify your hand-drawn score (made through graphical user interface).
 *
 *  This section is never overwritten by IanniX when saving.
 */
function alterateWithScript() {

}

/*
 *  //APP VERSION: NEVER EVER REMOVE THIS LINE
 *  Made with IanniX 0.9.16
 *  //APP VERSION: NEVER EVER REMOVE THIS LINE
 */


// makeWithScript();
