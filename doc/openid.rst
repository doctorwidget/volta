.. _openid:

*********************
OpenID
*********************

The final thing we should implement is OpenID authorization. This *must* follow
after we've finished deploying to Heroku, because of the need for a public URL
endpoint to refer back to. 

I expect this to be a bit of a hassle, but this form of authentication is
clearly the wave of the future. 




Conclusion
=================

Once this feature is complete, I think we will really have the minimum set of
batteries up and running. Obviously you can always add more, but this current
set of batteries does (I think) represent a true minimal level of real
functionality. We have the all-important persistent database level, real
sessions stored in our real database, real users authenticated with real
passwords also stored in our real database, and working demonstrations of basic
CRUD operations with varying availability depending on the authorization level
of the user. And all of it running on Heroku where anyone can see it in action. 
That's *far* more than any single tutorial that I have found ever
covers. Usually they go through Ring, Compojure and Hiccup, and maybe Enlive if
you're lucky. 

Time to declare victory and move on!


