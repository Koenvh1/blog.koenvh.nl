I picked up a Christmas project. For quite some time I had wanted to toy around with telephones, because I’ve always been intrigued by the world of automated phone numbers. The fact you could dial a number, and the response from the other end could be dynamically generated? Magical. Plus even though I have unlimited calls it still feels special in a way. Anyway, at some point during the last year, the idea came up to resolve DNS records over the phone. Does it serve any practical function? No, not at all. But it is fun.

Let’s start by showcasing the result. **You can now dial +31853695573 and resolve your records over the phone!**

%[https://youtu.be/szlnM3kD-Bo] 

Like all software development, it’s never as straight-forward as one would like. The most common protocol to do digital telephony is SIP (Session Initiation Protocol) as defined in [RFC 3261](https://www.rfc-editor.org/rfc/rfc3261.html), which combined with some other protocols make voice-over-IP, VoIP, happen. Looking through the SIP RFC, seeing that it has 269 pages and I don’t care that much about the years of “it has to work with this wonky implementation of this device from 2000”, I decided to look for a library to handle this for me instead.

Finding a library was easier said than done. Even though SIP is old and ubiquitous, libraries don’t seem plentiful. I started of using [pyVoIP](https://github.com/tayler6000/pyVoIP), a great effort that never really seemed to work for me. My SIP provider, CheapConnect, did not want to work with it. The reason I chose my provider is because, as the name already makes apparent: they’re cheap. This funny project costs me less than €1/month, which is worth it for the joke.

There are several codecs out there for telephony - some modern ones for better audio quality like Opus. Naturally my provider supports none of them, and just supports G.711a, otherwise known as PCMA or G.711 A-law. It turns out pyVoIP only supports G.711μ, which is used in the USA. You can’t have a standard if the USA doesn’t do things slightly differently :-)

I looked further and found another library, for C# this time: [sipsorcery](https://github.com/sipsorcery-org/sipsorcery). It does a lot of things including the thing I want - receiving phone calls. Figuring out how that worked was a bit of a hassle, because the documentation works very well if you know what you are looking for, but otherwise it can be a bit of a mystery. It’s also very Windows-focused, and this runs on a Raspberry Pi.

Once the scaffolding was set up based on examples provided by sipsorcery, I could do the fun part. Audio and implementing the T9 keyboard. The audio part was pretty simple: it wants 16 KHz raw PCM audio (or 8 KHz, but I opted for 16). Luckily ffmpeg is great at converting any audio to that. For the voice itself, I just used an online text to speech API - even though the responses are dynamic, the text spoken never really needs to be. I can just generate an audio file for A-Z and 0-9 and use that.

The T9 keyboard was somewhat tricky because it relies on timing. I decided to take some shortcuts, and just use a timer of one second. That time was based on my old phone with a T9 keyboard. That does mean for the quick T9 typers that you cannot start with the next letter after the first letter is done, but in practice I don’t think that is too much of a disturbance. They are simply ignored.

This is what that code looks like:

```csharp
        private System.Timers.Timer timer = new System.Timers.Timer(1000);
        

        public async Task ButtonPress(byte key, int duration)
        {
            await Task.Run(() =>
            {
                buffer.Add(key);
                timer.Stop();
                timer.Start();
            });
        }

        private async Task AddLetter(string letter)
        {
            timer.Stop();
            textBuffer += letter;
            await PlayLetter(letter);
        }

        private async Task FlushBuffer()
        {
            var buf = new List<byte>(this.buffer);
            if (buf.Count == 0) return;
            if (!buf.All(x => x == buf[0]))
            {
                this.buffer.Clear();
                return;
            }
            if (buf[0] == 0)
            {
                if (buf.Count == 1) await AddLetter("-");
                if (buf.Count == 2) await AddLetter("0");
            }
            else if (buf[0] == 1)
            {
                if (buf.Count == 1) await AddLetter(".");
                if (buf.Count == 2) await AddLetter("1");
            }
            else if (buf[0] == 2)
            {
                if (buf.Count == 1) await AddLetter("A");
                if (buf.Count == 2) await AddLetter("B");
                if (buf.Count == 3) await AddLetter("C");
                if (buf.Count == 4) await AddLetter("2");
            }
            else if (buf[0] == 3)
            {
                if (buf.Count == 1) await AddLetter("D");
                if (buf.Count == 2) await AddLetter("E");
                if (buf.Count == 3) await AddLetter("F");
                if (buf.Count == 4) await AddLetter("3");
            }
            else if (buf[0] == 4)
            {
                if (buf.Count == 1) await AddLetter("G");
                if (buf.Count == 2) await AddLetter("H");
                if (buf.Count == 3) await AddLetter("I");
                if (buf.Count == 4) await AddLetter("4");
            }
            else if (buf[0] == 5)
            {
                if (buf.Count == 1) await AddLetter("J");
                if (buf.Count == 2) await AddLetter("K");
                if (buf.Count == 3) await AddLetter("L");
                if (buf.Count == 4) await AddLetter("5");
            }
            else if (buf[0] == 6)
            {
                if (buf.Count == 1) await AddLetter("M");
                if (buf.Count == 2) await AddLetter("N");
                if (buf.Count == 3) await AddLetter("O");
                if (buf.Count == 4) await AddLetter("6");
            }
            else if (buf[0] == 7)
            {
                if (buf.Count == 1) await AddLetter("P");
                if (buf.Count == 2) await AddLetter("Q");
                if (buf.Count == 3) await AddLetter("R");
                if (buf.Count == 4) await AddLetter("S");
                if (buf.Count == 5) await AddLetter("7");
            }
            else if (buf[0] == 8)
            {
                if (buf.Count == 1) await AddLetter("T");
                if (buf.Count == 2) await AddLetter("U");
                if (buf.Count == 3) await AddLetter("V");
                if (buf.Count == 4) await AddLetter("8");
            }
            else if (buf[0] == 9)
            {
                if (buf.Count == 1) await AddLetter("W");
                if (buf.Count == 2) await AddLetter("X");
                if (buf.Count == 3) await AddLetter("Y");
                if (buf.Count == 4) await AddLetter("Z");
                if (buf.Count == 5) await AddLetter("9");
            }
            else if (buf[0] == 10)
            {
                if (buf.Count == 1 && textBuffer.Length >= 1)
                {
                    await PlayAudio("Tones/removed.pcm");
                    textBuffer = textBuffer.Remove(textBuffer.Length - 1);
                }
            }
            else if (buf[0] == 11)
            {
                if (buf.Count == 1)
                {
                    timer.Stop();
                    await Continue();
                }
            }
            this.buffer.Clear(); 
        }
```

I now have a text buffer with the domain name, and now I need to do the DNS part too. For a project revolving around DNS, this was frankly the easiest part, as I just used C#’s built-in `Dns.GetHostEntry`. Some slight filtering later (reading out IPv6 over the phone takes ages, so let’s not do that), and by reusing the sounds for the input methods, and voila: DNS resolution over the phone.

Then it was a matter of squashing some bugs that had to do with sipsorcery, such as handling more than one call (for which they luckily provide examples). There are probably still some bugs, but luckily this does not need to be production-grade software.

I might play around with more phone-related things in the future. Who knows, maybe it’s capable of text-based.. err.. phone-based adventures. Or maybe I can use a phone as remote control, or as a Tamagotchi. On the more practical spectrum of things I’ve also played around with hooking it up to a Discord voice call. There will probably be more phone-based shenanigans in the future.