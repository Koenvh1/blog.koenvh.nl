[Previously I wrote about a mysterious switch I found in the car I had recently bought](https://blog.koenvh.nl/what-does-this-button-do), and my search to see what it did. It got quite some attention, including on [Hacker News](https://news.ycombinator.com/item?id=42276620) (although in true HN fashion, most of the comments are not about the previous blog post, but about the mandatory data connectivity that is included in every car, such as for example the mandatory [eCall system](https://europa.eu/youreurope/citizens/travel/security-and-emergencies/emergency-assistance-vehicles-ecall/index_en.htm) in new cars in the European Union, where the car can call the emergency services on its own).

![](posts/what-the-button-in-my-car-did/4f45f625-47ee-4f33-beff-efe0ad6e90e2.jpeg align="center")

Anyhow, back to the car. My car to be precise. I could not resist the urge to dig deeper, so I made a Subject Access Request to the third-party company that I was told managed the fleet for the company where this car was originally used. Their privacy policy stated I would get a reply in 24 hours, which is in range of my patience (the privacy policy of the company where this car came from says they will reply within 3 months - no idea why they need that much time or why that would be reasonable, and although I did also send them an email I don’t expect a response back any time soon).

Anyway, 24 hours go by and no response, so let’s call them. They would ask and they would get back to me the next day, and true to their word they did. I will summarise the email as “good on you for using your rights, but we do not have that data, why did you think we had it in the first place, and go bother someone else”.

![](posts/what-the-button-in-my-car-did/81d9a487-04a0-45b2-8046-9d0eec22e202.jpeg align="center")

The date the mechanics were going to remove the equipment was only in a couple of weeks, and I could not resist the urge to check again. Let’s remove the fuse box cover again and have another look. This time I brought a light, and by using my phone to look up, I spotted something: a buzzer, and if you look very carefully you can also see the black box. I presume the buzzer was used to notify the driver that they did not use their iButton yet. It also interferes with the data module in the black box creating that annoying sound any time it tries to send or receive data. Strikes me as a design flaw, but alas.

I decided to call the company the car came from again, but this time a different office than the head office. I told the story again, and told that the other company had told me they were not responsible, and if they perhaps knew another company they used for tracking their fleet. I got a different name this time, and even though they could not provide a contact person the name was enough.

I called the phone number on the tracking provider’s website, told the story again, and the person on the other end helpfully told me the tracker in my car had been disabled five months before I bought it. That’s a relief - at least my whereabouts were not stored, and maybe the tracker was actually disabled. Later I received an email from the telecom provider that confirmed this. Phew.

The relief was short-lived when, during the phone call with the tracking provider, they continued that they could reactivate the tracker remotely if I wanted them to. I told them that I’d rather not, and thanked them for the information. So basically someone behind a dashboard can press a button to re-enable tracking on my car without me knowing. Amazing.

![](posts/what-the-button-in-my-car-did/ddb82788-325f-48a6-bb56-372c8828df09.jpeg align="center")

The date of the mechanics came around, and I present to you: no switch or button. I must say I am very pleased with how my dealership handled this. I asked them to put the stuff they removed in the boot (or trunk for the Americans), because I was of course still intrigued. Let’s see what was removed:

![](posts/what-the-button-in-my-car-did/5319a9c2-4c9b-424e-b15d-e1fb2fe6a3b2.jpeg align="center")

It’s the panel, along with some wiring to a buzzer and the black box. No immobiliser luckily. The black box retrieved some information from the OBD2 port about the car’s speed, mileage, etc., but let’s see what else is inside that box:

![](posts/what-the-button-in-my-car-did/df8f9ce3-2a64-488a-a030-8b0015baeab8.jpeg align="center")

It’s a battery and SIM card. I could hear the interference with the buzzer after I took this picture, so I assume the battery is there to make the black box work when the car is off too. Anyway, let’s have a closer look at the SIM card. Does it still work? First quest is finding a device that still takes that size of SIM card. Luckily I found an old phone.

![](posts/what-the-button-in-my-car-did/32bc32f0-cc08-4214-a140-29274532bb8b.jpeg align="center")

Excellent, it does. It is roaming and still has signal. Of course I tried to call myself, after which I heard a robot voice read me the following:

> The line has been disconnected for administrative reasons. For information, please contact your service provider - you find the telephone number on your telephone bill.

Bummer, no free calls for me then. I’m assuming data does not work either, but I cannot check that as this phone does not exactly do data. But hey, at least it is no longer connected. I was curious so I tried to find more about where the SIM comes from, but that seems very opaque. Something I might look into later.

![](posts/what-the-button-in-my-car-did/74938d25-7bc5-4848-b0b9-96b4c9e6aefd.jpeg align="center")

So I now know what it is, how it was used, that it was all disabled but it could have been re-enabled with the click of a button. My car is now again how it was delivered from the factory, without any third-party tracking or mysterious switches.