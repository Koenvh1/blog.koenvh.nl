I’m Dutch, and even though this blog post is written in English, I’m a big proponent of the Dutch language. I also like rallying, not in the political sense, but in the “going very fast in a car through the forest” sense. Traditional rallying consists of a car, a driver, and a co-driver - the latter reads out the pacenotes for the stage you are on, giving the driver an idea what the road ahead is going to look like (think turns, jumps, water, etc.).

There are several simulators that try to recreate that rally feeling, but although all of them have a variety of co-driver voices available, none of them supported Dutch. For a long time I have wanted to have a Dutch voice - both because it’s easier to comprehend when going 160 km/h down a dirt road, and also because, well, it’s Dutch. Waiting for someone else to make one (which is what I have done for the past 10 years) turned out to be unfruitful, so I decided to take matters into my own hands. First question was picking a simulator. I currently use two: Richard Burns Rally and EA Sports WRC.

Richard Burns Rally is quite old at this point, initially being released in 2004 it’s now nearly 21 years old, but on the simulator aspect still pretty much on top. It being an older game also means it’s simpler - the audio is just OGG Vorbis files in a folder. I figured replacing those should be simple enough, right? Well, wrong. One of the things that has kept Richard Burns Rally alive for all that time is the vibrant modding scene. At the moment of writing, Rallysimfans (also known as RBR Hungary) is the most popular mod pack for Richard Burns Rally. Apart from redoing the entire interface and including a lot more stages than the original game, it also redoes the physics, the HUD, and the pacenotes.

The new pacenote system is exactly what you would expect from a community-made modification: it is very extensive, very configurable, and not greatly documented. It’s very impressive. I decided I would disable it for the moment to go back to the simple system the original game uses. They’re all separate plugins, so disabling should be simple, or so I thought. When I did that however, I found out that the HUD plugin relies on the pacenote plugin, which in turn relies on the physics plugin. Much like systemd everything is connected one way or another. The lack of understanding how it works, which files it uses and more importantly which ones it does not made me decided to look further.

The other simulator I use is EA Sports WRC. It’s made like a modern triple-A title, and modding support was not really on their list. However, it is possible - other people did it first and successfully so. There are no modded stages or cars, but the ones that are available are quite extensive, and the detail on the stages is much higher than Richard Burns Rally’s 2.5D models.

Before starting out, I tried one of the existing co-driver mods for it. It worked really well and installation was remarkably simple. Recreating that though was a bit more tricky. It consists of roughly three stages:

1. Normalising the audio files’ volume
    
2. Converting the audio files to the proprietary WEM format
    
3. Bundling all audio files into the Unreal Engine’s PAK format
    

Even though there is not a very large EA Sports WRC modding scene, there luckily is a lot of tooling for Unreal Engine 4. So by scavenging around on the internet and finding the excellent tools other people made, after some tinkering I managed to get my custom sound loaded in the game. Eureka!

The difficult part was still to come of course: creating the audio files. Luckily the names of the audio files gave a very good idea of what was said in that pacenote. “and\_acute\_hairpin\_left.wem” leaves little to its imagination. The game stitches these audio files together to create the entire pacenotes.

I started out by creating translations for the individual components: “and”, “acute”, “hairpin”, “left”. Initially my idea was to use one of the many AI voices to generate the individual components, and then to stitch those together (and maybe create overrides where necessary). This proved to be quite janky, and did not work well at all. I tried to make it work better, but quickly abandoned it.

I then decided to use those translations to create a giant table of file name and translation. I could then tweak each line individually as necessary. I used a Google Cloud TTS voice to generate every voice line - there are only ~2000 in total, so it was not too much to generate, and I already knew how to do that and what the result would be. It does not sound as natural as a real or good AI voice, but it is very clear. The first attempt was made.

%[https://youtu.be/JNuF8Z9pSp0] 

From this point on the main thing was changing the terminology. One of the peculiarities of rally pacenotes is that there is no universal standard, or a universal Dutch vocabulary. I had to make up my own using my own knowledge, some inspiration from Dutch rally videos from the Hellendoornrally, and the English and German versions of the original pacenotes. I also got some help from friends on the internet.

Making more iterations took quite some time. The original voice has multiple versions for each line, with small differences in intonation etc. The generated voice does not have those, but because it technically overrides the original voice, it does need to cover those files as well. That means that I basically had to copy the same line 16 times.

Some more tweaking and tweaking, and I finally got a version I was happy with. I mean, hey, I now have a Dutch co-driver, something I had wanted for many years. I also [published it on the internet](https://www.overtake.gg/downloads/ea-wrc-nederlandse-bijrijder.74578/), because even though I mostly made it for myself, if anyone else has been waiting for 10 years for a co-driver like that, I want them to be able to use it as well.

%[https://youtu.be/j7Q2_tfYwdk] 

On a slight tangent: I have made quite a few modifications for quite a few games. I mostly do it because I like doing it. As much as I like modding, some of the community members can really make me doubt publishing those modifications to other people. People like me make modifications to do what we want it to do, and because we like doing it, and because we like giving others access to it for free. That means you are not entitled to anything. Nothing against constructive criticism, but just writing “this sucks 🤣”, demanding we do things for you, or making fun of things really brings down the mood.

It does not hurt me too much - I know there are people out there who do like it, most of them who stay silent. But if your only contribution is to spread negativity then just don't. People create things because they like to, then they're nice enough to share it with others. That means you now have more options - nothing is taken away from you. Rather than take the path of least effort and not respond, by bringing negativity people who like creating modifications will at some point not want to share what they make any more, even things you do want to use.

Luckily a lot of other responses have been positive. I am very happy that the developers of EA Sports WRC make modding relatively simple still. I also like how the community has created a lot of tooling, for example to convert the WAV files to WEM.

All in all I am very happy that I managed to do something I wanted to have for quite some time, and that the result is pretty good too. Hopefully I can replace the TTS voice with a real co-driver voice in the future.