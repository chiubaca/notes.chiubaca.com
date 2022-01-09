# notes.chiubaca.com

This repo build a website for my notes at https://github.com/chiubaca/learning

## Running locally

install dependencies

```
yarn
```

## Pre Setup

If the following directories exist already, delete them
```
./temp
./src/pages/fleeting-notes
./src/pages/index-notes
./src/pages/literature-notes
./src/pages/permanent-notes
```

> TODO: Write pre-setup script that does this for you


Next we need to download the notes and move them into the correct directory:

```
yarn download-notes
yarn move-notes
```

Now we can run the project:

```
yarn dev
```

