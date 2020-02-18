/**
 * Mixins or styles for styling functions/features
 */

// for StyledContainer
export const STYLED_BORDER = {
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.5)',
}

// shadows
export const shadow = color => {
  return {
    shadowOffset: { width: 2, height: 2 },
    shadowColor: color,
    shadowOpacity: 0.3,
    shadowRadius: 3,
  }
}
