
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
expo start
```

This will open up the expo dev webpage in your preferred web browser. You can scan the QR code pictured there with the app on your device, or open a simulator via the provided links.

## Contributing

This repo uses `jest` for testing. For more information on writing tests, checkout [this article](https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101).

Every time you commit or push, `husky` will run the `jest` tests to ensure every aspect of the app is still functioning as intended.

## Troubleshooting

### Experiencing errors regarding missing packages or yarn
Try running `yarn` again then `expo start -c` to clear the cache before running.

### Expo app not finding your development server
Try switching to 'tunnel' connection mode via the expo dev webpage 
