



const namer = (state = {namez: ''}, action) => {

  // let nextState = {namez: state.namez};

    switch (action.type) {
      case 'CHANGE':
      // console.log(nextState)
        // nextState.namez = state.namez + 1
        return {namez: action.nameParam}

      default:
        return state;
    }
  }

export default namer
