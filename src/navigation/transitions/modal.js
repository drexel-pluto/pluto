// create custom transitioner without the opacity animation, ie. for iOS
export default function forVertical(props) {
  const { layout, position, scene } = props

  const index = scene.index
  const height = layout.initHeight

  const translateX = 0
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0],
  })

  return {
    transform: [{ translateX }, { translateY }],
  }
}
