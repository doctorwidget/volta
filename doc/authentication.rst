.. _authentication:

************************
Authentication
************************

``Authentication`` and ``authorization`` are only tangentially related. I know
that when I first started writing server side code, the distinction was somewhat
fuzzy in my mind, and my eyes would glaze over whenever I tried to read up on
these topics (and related topics, like the optimal hashing algorithm for
passwords, etcetera). Perhaps I am just too naive and trusting at heart to find
this topic inherently fascinating.

But if you are going to run any kind of interactive web-based service in the
21st century, you absolutely must grapple with both issues. Find your inner
cynic and proceed with caution! With that in mind, let us clarify what the two
terms mean:

**Authentication** answers the question *who is this user?*. 

**Authorization** answers the question *is this user allowed to do that?*. 

It should be obvious that you must first *authenticate* a user before you can
decide what they are *authorized* to do. But the decision tree for the latter
does not overlap with the decision tree code for the former! The latter depends
on the former without overlapping with it directly; authorization *follows from*
authentication, but they are distinct concerns.

The only time that you should authorize without authenticating first is be for
actions which *anyone* is allowed to do, in which case you don't need to bother
with either concept in the first place! Consider a read-only site: say, one with
documentation intended to be freely available to all comers. That site would not
need either authentication or authorization.


Authentication Systems
=====================================

Now that we're well into the 21st century, there are a wide variety of different
strategies that a server can take towards authenticating a client. That was not
always the case!


Classic A & A
-------------------------

The oldest method for authentication is of course to register each and every
user in your own database. Each such user gets their own username and password,
where the username (at least) must be unique. Sometimes the email address is
used as a third core value, in which case it might also need to be unique. Other
information might also be stored in the user database, but only the (username
and/or email) plus password is used for authentication.

The primary benefit of this approach is that it does not rely on any third
parties at all. As long as the underlying connection is HTTPS, and as long as
the user maintains basic security hygeine (i.e. no using their birthday as their
password, etc), this approach is fairly secure. Any flaws in it would come about
either due to newly-discovered flaws in the underlying technologies (hello
Heartbleed) or failure by the user to secure their password (giving it away to a
social engineer, forgetting it completely, etc).

In addition, this approach has the benefit of being very familiar. I've been
using systems like it ever since the first time I dialed up a connection to the
BMUG server back in the 1980s. My long-standing familiarity with this approach
causes me to have a strong gut feeling that it must be the true gold standard.

But is that really true? Let's consider the drawbacks to the Classic approach.
Aside from the fundamental weakness that the human element always brings, the
classic approach brings several additional burdens for the developer. None of
them are trivial:


Anti-Bot Protection
........................

You don't want automated bots to make accounts for your service, so you need
some way to verify that the entity trying to make an account is actually a human
being. This typically involves something like a CAPTCHA. Some frameworks have
plugins to help with this (Django has a variety of CAPTCHA-style security 
libraries available) but others do not (Clojure doesn't seem to have any
off-the-self solutions ready to be plugged into a Ring application). 

But even with the help of a third-party library, this is still a PITA for both
the end-user and the developer. The best tests are *by definition* difficult for
the user, and it's often the case that they can still be beaten by automated
bots anyway.


Verifying The Email Address
.................................

The most naive classic systems just allow anyone to make an account name and
choose a password without any automated verification whatsoever. If someone
forgets their password, the only way to get it reset is to have a customer
service department who can perform human-to-human identity verification, and who
can then manually change or reset the password. This is obviously a brittle
system ripe for social engineering. It might work for a site used by a few dozen
individuals, where the customer service person can know every user by face and
name, but it is obviously full of fail for anything larger.

Therefore, most relatively-secure online registrations involve a round of e-mail
verification, where a confirmation link is sent to a suggested email address.
If the potential new user provided a valid email address, they can read the
confirmation email, click the link, and end up back at your site with clear
evidence (via the HTTP referrer or just as part of the query string) that they
are in fact able to read e-mail messages at that address. 

This is not a completely terrible system. It is certainly better than a system
that allows anyone to just make accounts by entering usernames and passwords
freely into your site. But make no mistake: this is a *huge* burden to adoption:
I know that I personally am prone to just giving up completely on a site as soon
as they ask me to register.

And even with the help of third-party libraries (Django, for example,
has plenty to choose from), it's still a big PITA for the developer to set up.
Even with a helper library, you must usually still configure a 3rd party email
service to send the confirmation codes, and set up a special database table to
store the tentative registrations. 

So this is a hassle to both the developer and the user, but during the early
history of the internet, it was really the best available option. 



Storing The Password Securely
.................................

Once you have the users' password, you absolutely must hash it and store only
the hash. It's shocking to realize how many web sites don't do this even in
2014, storing passwords either with easily-cracked algorithms (SHA1) or even in
plaintext *(!!?!??!)*.

This is a problem for you even if you diligently hash all of your passwords for
your site using `Bcrypt`_. Human nature being what it is, you can warn users
until you are blue in the face, and they will still re-use the same password
over and over for multiple sites. That means that regardless of what you do on
your site, some numbnutz running another site probably has the same exact
usernames and passwords stored in plaintext, meaning that all of the accounts
for all of the users are at risk everywhere. Someday someone from their
accounting department will take a laptop to lunch with everyones' passwords in
plaintext in a file somewhere, and that laptop will be stolen. This is
astonishingly sad, but it is a true fact.

.. _`Bcrypt`: http://en.wikipedia.org/wiki/Bcrypt


Customer Service
....................

Finally, when you register and store your own passwords, you have to deal with
the host of customer service issues that come along with it:

#. I forgot my password
#. Someone else got my password
#. My password stopped working
#. I forgot my username
#. I want to change my username but keep all my stuff
#. I need to change my associated e-mail

And so on and so forth. All of those things can be dealt with of course, and any
good 3rd party plugin helps ease that pain. But it's still a pain!




Third Party Services 
----------------------------

The alternative to the classic approach is to use a third party authentication
service. This has really only been a viable option in the last several years
(say, the Obama era and onwards). In this approach, you rely on a third party
service to assure that user X is in fact who they say they are. 

At first glance, this sounds like madness: aren't you giving up any chance at
real security by just trusting a third party? But if you think about it, the
classic system above already relies on the third-party e-mail provider as a
single point of failure in your system. If someones email account is hacked,
then your site is de facto hacked along with it, because the hacker can just
request a password reset using the email account, and *poof*, the hacker now
controls all of the pieces of the puzzle.

In the end, the classic system combines the *third-party* email account with
*your own responsibility* for password verification, hashing, and customer
service. A third party service says, since you already have accepted a
third-party single point of failure by relying on email, why don't you just
*offload the entire process* to the third party? If the third party is hacked,
everyone loses in either scenario. But if the third party is *not* hacked, you
transfer all of the burdens of the classic system from you (the developer) to 
them (the third party provider).

It's important to remember that you can choose *which* third-party providers you
trust; you don't have to allow blanket access by any old provider! The question
here should not be *do I trust any third parties?*, it should be *Do I trust
(Google | Twitter | Microsoft) more than (Gmail | Hotmail | Bob's Cheap
Hosting)*. You're still relying on a third party company in either case; and as
the examples above show, these days, it's often the same companies in either
scenario!

So unless you are using the e-mail-free variation on the classic pattern (which
again works only for systems with very tiny numbers of users), you aren't really
giving much up by trusting a third party service. And what do you gain? Identity
verification is their business and their forte; it's probably neither for you.
With that in mind, let's revisit the four issues discussed above:


Anti Bot Protection
......................

This is still an issue, but it is no longer *your* issue. As available methods
for protecting vs bots get better, third-party providers will upgrade on their
own. They'll do so because again, identity verification is part of their
business model, and they don't want bots running around masquerading as their
users any more than you do. Those upgrades will be handled by them on their own
time and their own dime, rather than being one more thing for you, the
developer, to deal with.


Verifying The Email Address
...............................

Again, this is still an issue, but it is no longer *your* issue. If there are
problems with the e-mail address, they get routed through the third party
provider, not through you. You have to assume that they (the third party
provider) are better equipped to handle this sort of thing than you are. 


Storing The Password Securely
..................................

Again, no longer your issue. One would hope that they would do this at least as
well as you would. More importantly, it is reasonable to assume that they will
do, on average, as good or better than a host of small-time e-mail providers do. 


Customer Service
.......................

And again, no longer your concern... mostly. Obviously you don't escape this
issue entirely, but it should end up being mitigated. 

One thing to consider is that nothing stops you from adding an extra layer of
security in the form of some kind of special security question or other form of
emergency backup on your own site and in your own database. But if you want to
do that in this scenario, it's an optional extra layer, rather than being the
foundation of your whole system. And of course, if you do that, you're opening
up a pandoras box of potential hashing issues and social engineering
vulnerabilities all over again. *TANSTAFFL*. 



Third-Party Examples
----------------------------

There are many options -- probably *too* many -- but we can generally group them
into three categories.


OAuth
................

When these systems were first developed, there was an explosion of different
systems, not unlike the Cambrian explosion, all of them incompatible, and hence
of little use to either the developer or the end-user. Eventually the `OAuth`_
system emerged as a common underpinning for the second generation of
authentication systems.

.. _`OAuth`: http://en.wikipedia.org/wiki/OAuth

So you can think of OAuth system as the oldest *viable* system for 3rd party
authentication. Others existed before it and alongside it, but this was the
system that had the widest adoption, which makes it the de facto winner of the
early rounds. 

Note that this is an *authorization* system and not an *authentication* system.
However, it is widely used (some would say *misused*) as an *authentication*
system, based on a (non-trivial!) presumption: 

   *Third-Party X wouldn't have authorized user Y if X had not first
   authenticated Y. Therefore, it is same to assume that this authorization for
   Y is equivalent to an authentication of Y.*

That's certainly true most of the time, but not all of the time. On the other
hand, it's no more invalid than e-mail address confirmations are, so it's good
enough for me! But keep in mind that this is where the conflation of the terms
*authorization* and *authentication* starts to creep into tutorials and
discussions all across the internet: OAuth stands for **authorization**, but
this library came to be routinely used for **authentication**. 

And this is *not* merely an academic distinction. The OAuth library is well and
truly intended for authorization: it returns tokens that are designed to let
multiple third parties share your data. We're not just talking about identifying
users, we're talking about sending their contacts and browsing histories back
and forth between multiple different third party providers. 

So the problem with OAuth in a nutshell is that it gives *too much power* to the
third party providers. It really is intended for *authorization*, but most users and
developers only need the much-more-limited *authentication*. So OAuth evolved
into a protocol designed for Big Data companies, by Big Data companies, to the
detriment of small developers and users. 



OpenID
.................

Hence the development of `OpenId`_. This standard is built on top of the OAuth
specification, but it is designed to be used only for authentication, which is
(again!) all that most developers and users really want to use it for anyway.
Under the hood, it still uses (abuses?) the presumption of authentication
because of authorization, but the entire system is designed to limit what can be
shared. 

.. _OpenId`: http://en.wikipedia.org/wiki/OpenID

OpenID 1.0 and 2.0 saw fairly spotty adoption rates; you can find more examples
of companies and libraries supporting various versions of OAuth than you can for
these early versions of OpenID. But in Feb 2014, `OpenID Connect`_ was released,
and it has some very big names associated with it. 

.. _`OpenID Connect`: http://en.wikipedia.org/wiki/OpenID_Connect

It's dangerous to assign *good* or *evil* motivations to big corporations, but
it seems to me (to a first approximation yada yada) that this system is
fundamentally as close to *good* as we're going to get in from any system
supported by large corporations. Let me qualify that:

#. It is open source, not proprietary. 
#. It is backed by multiple different companies, including some big ones. A
   system that has no big backers probably won't get much adoption, and a system
   that does not achieve widespread adoption is a failure. 
#. It shares a minimum of information, unlike OAuth.
#. It is modern, designed to work equally well with HTTP requests, AJAX calls,
   and mobile apps.

There are plenty of big companies (e.g. Microsoft, Google, VeriSign, Yahoo, the
BBC, PayPal, Steam) who do *not* have it as part of their business plan to
create a monopoly on online identities. Those companies will benefit from the
widespread adoption of a truly open system like this one. And developers and
users obviously benefit from it as well, certainly compared to the *too much
information* approach of pre-existing OAuth systems. So this system looks like
it has a chance, and if it were to succeed, it would be a common good which
benefits everyone.


Other Systems
...................

Unfortunately, Facebook and Apple still don't support this system; they are the
two most obviously absent big players. It's worth noting that both of them are
good examples of companies seeking a monopoly to the detriment of all. Apple
wants a hardware-based monopoly, and Facebook is the AOL of the 21st century:
they would like to kill the entire internet and make everyone log into Facebook
for everything. Make no mistake: what is good for them is not good for you. 

Instead, Facebook has everything riding on Facebook Connect, their own
proprietary system for controlling everyones' identity. And Apple of course
wants everyone to do everything through Apple servers on Apple hardware. 

I also note with some sadness that Mozilla has not jumped on the OpenID train
yet, but they have dropped their own independent *Persona* project. I would bet
dollars to donuts that they eventually come on board with OpenID. 

Finally, it was looking like Amazon was still on the fence, but just `this
week`_, they announced that they would support OpenID Connect as part of their
AWS ecosystem, under the rubric Amazon Cognito. So really, things are looking
good for OpenID Connect.

.. _`this week`: http://blogs.aws.amazon.com/security/post/Tx3LP54JOGBE0AY/Building-an-App-using-Amazon-Cognito-and-an-OpenID-Connect-Identity-Provider



Summary
===============

In the end, you must ask yourself, *is validating user identities and securely
storing passwords my core competency?*... and *is doing all that part of my real
mission*? If you are Google or Facebook or some other big data company, the
answer is surely *yes*. But unless you're aiming to end up as another contender
in that field, the answer for your new site is almost certainly **no**. 

The final hurdle to overcome in your own mind is probably the idea that a
registered-via-email unique account is somehow more trustworthy than a
confirmed-via-openID account is. But if you think about it for a minute you will
see that both cases involve *exactly* the same number of external dependencies!

In the classic scenario you *trust* a *third-party* email provider to have
verified that human as the owner of that email account. If that third-party
email provider goes down for any reason, you have no way to re-send confirmation
emails (password changes etc) to any user that uses that service. You are 100%
dependent on that email provider. The user is probably a weaker link (human
nature being what it is), but that email provider is absolutely a point of
failure in your system. 

In the third-party scenario you *trust* a *third-party* openID provider to have
verified that human as the owner of *some kind* of account. If that third-party
OpenID provider goes down for some reason, you are no more or less vulnerable
than you would be if the email provider from the classic scenario went down.
In the end, this system has exactly the same number of externalities and exactly
the same number of potential failure points as the classic system. But you avoid
a tremendous number of headaches related to the initial verification, storing of
passwords, and so on. 

In summary, I still find this whole topic a chore to deal with. But a system
like OpenID makes it *easier* for me, as the developer, than a classic system
does, and it is demonstrably no less secure.  

So it seems clear to me that any system I build will take one of three
approaches to security:

#. Teeny tiny sites can use the classic system with manual control of all
   accounts. I understand how to hash passwords, and if we're dealing with a
   trivial number of users, I am likely to end up as the *de facto* customer
   service department in any event. 
#. Larger sites might be OK with classic e-mail-based registration, but I am
   much less determined to go that route than I used to be. There are good
   packages for helping with this in Django, but not in Ring.
#. OpenID might be the best bet for all non-trivial sites going forward. 

With that in mind, the next tutorial will look at :ref:`friend`, which is a Ring
library that can handle all three scenarios with equal aplomb. 

