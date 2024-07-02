## Create
Create a zip of the project by running (example uses the directory name prompter)
```
zip -r prompter *

```

If a zipped folder already exists, then run:
```
rm -R prompter.zip && zip -r prompter *

```

to remove the existing folder and re-zip




## Misc Info
 - The countdown uses a web worker to handle the interval due to chrome throttling background processes after 1 minute.
 - Any new files need adding to the breeze-manifest.xml file
