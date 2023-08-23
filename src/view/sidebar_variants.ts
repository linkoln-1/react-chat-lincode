export const sideContainerVariant = {
  true: {
    width: '100%',
  },
  false: {
    width: '20%',
    transition: {
      delay: 0.3,
    },
  },
}

export const iconVariant = {
  true: {
    transition: {
      delay: 0.6,
    },
    alignSelf: 'flex-end',
  },
  false: {
    transition: {
      delay: 0.6,
    },
    alignSelf: 'flex-start',
    marginTop: '20px',
  },
}
