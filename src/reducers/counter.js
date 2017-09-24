



const namer = (state = {namez: 0}, action) => {

  let nextState = {namez: state.namez};

    switch (action.type) {
      case 'CHANGE':
      console.log(nextState)
        nextState.namez = state.namez + 1
        return nextState;

      default:
        return state;
    }
  }

export default namer
