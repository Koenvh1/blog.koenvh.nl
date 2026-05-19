Last week I bought a car. After twelve years of service, my old trusty Peugeot 107 in blue has had its best. Expensive repairs were coming *at some point*, and I did not feel like waiting around for them to come. Plus the existing list of faults (like the high oil usage of about a litre per month, a brake that sometimes blocked without reason, or the smell of exhaust fumes that sometimes came into the car when the fan was on high) also started getting longer and longer.

![](posts/what-does-this-button-do/91643929-8f55-468a-8568-97d1a64862da.jpeg align="center")

Anyway, new car time! After a lot of research I ended up with an Opel Corsa from 2020. To be precise, it’s an Opel Corsa Edition with 101 HP, and most importantly, it’s mine.

Unlike the Peugeot, the Opel has gadgets - quite a few of them. Of course it being my car, I want to know what all buttons do, so I read the entire manual (which is very annoying to read, as they make one manual for every version of the car, so half of it does not apply to this car, but I digress). One of those buttons was the following below the lighting controls.

![](posts/what-does-this-button-do/f39bda1d-77c1-4186-862b-c566cce517bb.jpeg align="center")

Those do not appear in the manual, or the website, or anywhere. What could they be? Just flipping the switch does nothing, apart from turning off the light on the switch. So let’s look where the button goes. I can see that part of it is wired to the back of the OBD2 port (a port that retrieves data from the onboard computer about the car, such as pedal position, temperature, lights, rev count, speed - basically if you can see it on your dashboard it can be read using the OBD2 port), so it is getting information from the car, but apart from that the wires go to places that I can’t see without taking the car further apart.

![](posts/what-does-this-button-do/00372c30-63b8-4807-9ae3-4b15727304e5.jpeg align="center")

Something else that I noticed before is that I heard the typical inference noise coming from that area of the car when putting the ignition on. You know, [this](https://youtu.be/FYjs7vsaSEw) sound. *Ti-ti ta, ti-ti ta, ti-ti ta, ti-ti ta, ti-ti ta, ti-ti ta, ti-ti ta, TAAAAAAAAAAA*. That gave me the ominous feeling there might be something sending data in there. Sure, my car does that too so I can see in the app where I parked it (seriously, it does that), but at least I gave permission for that.

I asked the wisdom of the crowd. A lot of ideas came up: nitrous (would have been fun), LPG switch (it’s only petrol), flame kit (I wish), front parking sensors (those are standard on the car). No avail.

I called my dealership and asked. They guessed it might have been an immobiliser - bit strange on a car this young and type, and also strange for it to be a switch like this. I called the dealership that previously maintained the vehicle based on the phone number in the service history. They did not install it, and guessed it might be a black box. They did tell me who it previously belonged to (a large company), so I called their headquarters. They told me they don’t do their own cars any more, but that they outsourced it, and gave me a phone number. I called them, they told me they don’t do that, but he speculated it might be a GPS tracker.

Some more searching, and I figured I would just drive to my dealership. More speculating with the salespeople, who told me to make an appointment with the mechanics. I did, they had a quick look at it and I now have an answer:

The metal part is something to hold an iButton or Dallas key, a magnet-like thing, next to. Via a wire it can communicate which key is held next to it to identify a user. It registers who's driving to a fleet tracker via a device also mounted in the car, which sends it to a fleet manager via the internet. That way it can be tracked which employee did what (and potentially who to send the fine to). That would also explain the mobile phone interference noises I've heard from that area of the car. So it’s a black box, a GPS tracker, and maybe also an immobiliser? I am not sure about the last one (and why it has a switch, though some sources suggest a private use/company use mode).

I'm getting it removed because now I'm basically driving around with a foreign GPS tracker. Some lease company somewhere is getting data on wherever I go. Kind of spooky if you think of it, especially as I assume I am one of the few actually looking into what this is. Most people would have probably driven around for years with a foreign GPS tracker.

![](posts/what-does-this-button-do/1353bcc6-c25c-482b-9a75-67686582c479.jpeg align="center")

And that’s how the search comes to an end. After a bit of perseverance I figured out what it is. I now know my car is being tracked still, and that they know I did try out what the car’s acceleration is like at full throttle.

There are more interesting angles to this, like “can I request my data from the fleet manager thing that has been tracking my whereabouts under the GDPR?”, and “can I get free data from the SIM card embedded in the device that I now technically own?” but I will leave those for another day.