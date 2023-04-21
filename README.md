# tapCodeIn

tap code message by tapping on screen or pressing button 

This is similar to the way I did it on arduino

This problem shows how a simple button action can be quite complicated

There is also dealing with the problem of multiple taps.

This is a debouncing issue. On arduino it is a bit hard to employ

In this sketch I have used the keyReleased() and mouseReleased()

functions to take care of the debouncing.


Another problem is you need to tell when one set of taps is over 

in this sketch I have set the framerate to 3, which slows down the interaction.  if there is about a 2 second pause the computer will think you are done with that set of taps and move to the next

My checking logic for this is a bit different than how I did it on arduino. Specifically in the case of zero taps 