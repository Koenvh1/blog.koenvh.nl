import json
import os


entries = []
for file in os.listdir("."):
    if os.path.isdir(file):
        metadata = json.load(open(f"{file}/metadata.json", encoding="utf-8"))
        metadata["content"] = open(f"{file}/post.md", encoding="utf-8").read()
        entries.append(metadata)

entries.sort(key=lambda x: x["datePublished"], reverse=True)

posts = json.dumps(entries, indent=2)
f = open("posts.json", "w", encoding="utf-8")
f.write(posts)

e = open("../../utils/posts.ts", "w", encoding="utf-8")
e.write('import { Post } from "./post";\n\n')
e.write("export const getPosts = (): Post[] => {\n")
e.write("\t return ")
e.write(posts)
e.write("};")