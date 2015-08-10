# circ_inc_rhy
script for creating geometrically influenced rhythms


This project is built with [iannix](http://www.iannix.org/), and [ Max/MSP](http://www.cycling74.com/)
Iannix is a time based graphical editor that allows you to compose visual geometric elements that emit OSC signals.
Max/MSP is a graphical programming environment for audio and video composition


The initial concept is to compose a rhythm piece that features 2 percussive voices alternating back and fourth, with an incrementing interval of time between them.

The javascript loaded in Iannix generates a sequence of 1's and 0's to represent this pattern, then represents the pattern in 3D space with OSC triggers for each 1 and 0 in the sequence.

Iannix sends OSC data to Max/MSP where the triggers and time data are mapped to various sound-controlling parameters.


