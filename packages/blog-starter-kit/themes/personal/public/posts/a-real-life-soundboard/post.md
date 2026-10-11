I've been a furry since about 2022. I must admit I do not really have a start date, I just found a bunch of lovely people, wondered what connected all of them, found out they were furries, and then things escalated from there. The thing that made me a furry were the friends I made along the way. I'll freely admit that I do not care _that_ much about many of the other aspects. 

Through that all I also ended up going to several furry conventions. Basically events where people, furries, come together. Quite a few people (at many conventions over half) of the attendees bring fursuits. After attending around six furry conventions without fursuit (for those interested: Confuzzled 2023, NordicFuzzCon 2024, Eurofurence 2024, ScotiaCon 2025, NordicFuzzCon 2025, and Eurofurence 2025) I would finally go to one with a fursuit of my own.

The reason I wanted a fursuit is because after borrowing a friend's earlier, I found out that being silly in suit is fun. It is the most impractical, uncomfortable, and expensive piece of clothing that I own, but I love it. If you couldn't tell, it's a raccoon. Their name is Rakoen (or Rakim, but the choice for a raccoon was definitely inspired by the former). Anyway, here is a picture:

![](posts/a-real-life-soundboard/PXL_20260819_151926140.jpg align="center")

I wanted to add something to my fursuit was something that would set it apart from the other several thousand attendees. After a lot of contemplating my idea was to make a soundboard that I could control from a tiny remote. One of the reasons is that I don't like to talk in fursuit, but this way I could still use sound as a communication method.

<center><iframe src="https://mastodon.nl/@koenvh/117186224880123892/embed" class="mastodon-embed" style="width:100%;max-width:400px;height:520px;max-height:100%;border:1px solid gray;border-radius:15px" height="500px"></iframe></center>

The operation is quite simple: both the remote and the speaker are connected to my phone via Bluetooth. The remote acts as the volume up and volume down button (that is how those camera shutter buttons work), I catch those and turn those into either switching the current sound or playing it. I also added some logic to play a preview of the sound if my Bluetooth earphone is connected, but in practice I do not use that much as it's quite uncomfortable. All the sounds are hardcoded. I initially made it work with the phone speaker, but I noticed at the convention that it is not nearly loud enough, hence I bought a simple Bluetooth speaker. Because the speaker goes to sleep when no audio is playing, and this the start of the audio would be cut off, I send a constant stream of "ticking" that is not that audible, but loud enough to prevent the speaker from going into sleep mode.

This code was really written in a "good enough for me". There is no UI, no settings, and I never bothered to remove the "Hello world" from it either. But it works, and that's the important part. The nice thing about this being so custom is that adding extra things is easy - I have contemplated adding a LED sign of some kind, or something else that can be controlled remotely. Ideas are welcome :-)

I have not had a chance to test it at a convention yet. If you see me at one, come and say hi, and I might make a sound back.

