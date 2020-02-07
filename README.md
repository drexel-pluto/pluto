
## Requirements

1. OS X - This repo only contains the iOS implementation right now, and Xcode only runs on Mac.
2. New to Xcode?  [Download it](https://developer.apple.com/xcode/downloads/) from the Mac App Store.
3. [Homebrew](http://brew.sh/) is the recommended way to install node, watchman, and flow.
4. New to node or npm? `brew install node`
5. New to yarn? `brew install yarn`
6. We recommend installing [watchman](https://facebook.github.io/watchman/docs/install.html), otherwise you might hit a node file watching bug.  `brew install watchman`


## Quick start

Get up and running with our app:

1. Once you have the repo cloned and met all the requirements above, start the
packager that will transform your JS code on-the-fly:
```bash
yarn
yarn start
```
2. Next, you can start the iOS or android simulator with one of the following two commands in a new terminal:
```bash
# for ios:
yarn ios
# for android:
yarn android
```

You should now see the app running on either the ios or android simulator!

## Contributing

This repo uses `jest` for testing. For more information on writing tests, checkout [this article](https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101).

Every time you commit or push, `husky` will run the `jest` tests to ensure every aspect of the app is still functioning as intended.

## Troubleshooting

`#TODO`

