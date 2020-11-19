# Nucampsite - React Native

Code along with tutorial on [Nucamp](https://learn.nucamp.co/course/view.php?id=13)

To run:

```bash
$ expo start
```

For convenience, add an `android` alias to start the android emulator from cli, that way you don't always have to run Android Studio:

```bash
# First get the android emulator name (avd)
$ ~/Library/Android/sdk/emulator/emulator -list-avds
Pixel_4_API_30 # your output may be different - select the avd you want to use for the alias below

# Then let's add that avd to our alias
$ echo 'alias test="~/Library/Android/sdk/emulator/emulator -avd Pixel_4_API_30 >/dev/null 2>&1 &"' >> ~/.zshrc

# Reload zsh settings
$ source ~/.zshrc

# Now we can open android emulator using our new alias
$ android
```

And to add an `ios` alias to start the ios simulator from cli:

```bash
$ echo 'alias ios="open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app' >> ~/.zshrc
$ source ~/.zshrc
$ ios
```
