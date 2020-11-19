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
$ echo 'alias ios="open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app"' >> ~/.zshrc
$ source ~/.zshrc
$ ios
```

---

Todo:

Add Storybook

- https://sophieau.com/article/react-native-storybook
- https://github.com/joan-saum/react-native-storybook-web

React Native Web

- https://necolas.github.io/react-native-web/docs/?path=/docs/components-activityindicator--animating
- https://medium.com/@toastui/from-zero-to-publish-expo-web-react-native-for-web-tutorial-e3e020d6d3ff
- https://github.com/devhubapp/devhub
