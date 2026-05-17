It seems that a lot of hyperboles get thrown around nowadays. I have read a lot of cases where people say you should *never* do this, or you *must* do that, as if there are absolutely no exceptions ever. A few cases I have seen:

* You must always use HTTPS
* You should never expose MySQL to the outside world
* You must use two-factor authentication
* Your program must be unit-testable

The list can go on and on. My point is not that the points are invalid, just that they are worded as if the world is always black and white, and it is not. I would however like people to stop with the hyperboles. There are many cases where HTTPS is great, and if possible, use it, but that does not mean that there are no valid cases where HTTPS in not possible.

As an exercise to you, dear reader, try to think of a case where the points above don't hold. There's no single right answer, but you can probably come up with something. These are the scenarios I came up with:

**You must always use HTTPS**
Except for when you try to include resources that are not served over HTTPS, such as  [web radio streams](http://koenvh.nl/radio/). If I serve that page over HTTPS, around half of the radio streams would stop working. You can proxy everything behind a HTTPS, but that is a lot more expensive, plus creates a lot of legal questions. But okay, let's say that we can proxy everything with a HTTPS proxy, then what are you going to do when you are trying to connect to a local server on the user's computer? You cannot get a valid certificate for 192.168.x.x, so it won't be accessible over HTTPS. 

**You should never expose MySQL to the outside world**
The argument is generally that you should write an API front-end that translates that to the MySQL database behind the scenes. That's great for apps and other things you fully control, but what if you want to use it in combination with an application that only speaks SQL? 

**You must use two-factor authentication**
Security is not some absolute. I in fact would sometimes prefer to not have yet another password to keep care of, especially for things I don't intend to use frequently. A magic link (basically sending an email with a link) works just as well in a lot of cases, and is still only one factor (namely what you have, that being access to your email). Also, your audience may not have access to a good

**Your program must be unit-testable**
This is great if your program has logic that you can test. That's not always the case. For example, I created an application that works in conjunction with a game server application. If you abstract away all the parts that require the game server, you are left with no logic. You can mock the game server, in which case you are testing whether your mock works, whereas most if not all errors come from unexpected behaviour from the server. 

There are other examples too. Just to reiterate, I am not against them, I do however think it is good to put them into perspective, and not treat them as absolutes.