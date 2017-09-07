import React from 'react'

/**
 * HOC Enhancement in position awareness
 * the Wrapped component will receive special prop, 'connectRefDOM'
 * this has to be attach to ref of desire DOM element
 *
 * example:
 * const SomeComponent = (props) => (
 *  <div ref={props.connectRefDOM}> ... </div>
 * )
 *
 * const EnhancedComponent = positionAware()(SomeComponent)
 *
 * @param   {function} mapPositionToProps, a function that will get (domRect, ownProps, ownState)
 * @return  {function} that receive React.Component and returns React.Component
 * @return  {React.Component}
 */

export const DOM_POSITION       = {
  ABOVE : 'ABOVE',
  INSIDE: 'INSIDE',
  BELOW : 'BELOW',
}
export const getCurrentPosition = (domRect, viewport) => {
  switch (true) {
    case domRect.top < 0: {
      return DOM_POSITION.ABOVE
    }
    case domRect.top > viewport.height: {
      return DOM_POSITION.BELOW
    }

    case domRect.top >= 0 && domRect.top <= viewport.height: {
      return DOM_POSITION.INSIDE
    }
    default: {
      return null
    }
  }
}

export const positionAware = (mapPositionToProps) => (WrappedComponent) => {
  const defaultProps = {
    debug                : false,
    shouldComponentUpdate: true,
  }

  return class extends React.Component {
    constructor() {
      super()
      this.state = {
        position: null,
        ...defaultProps,
        ...mapPositionToProps({}, {}, {}),
      }

      this.getDOMElement = this.getDOMElement.bind(this)
      this.onScroll      = this.onScroll.bind(this)
    }

    onScroll() {
      const viewport = {
        height: document.documentElement.clientHeight,
        width : document.documentElement.clientWidth,
      }

      const domRect               = this.DOMElement.getBoundingClientRect()
      const currentPosition       = this.getCurrentPosition(domRect, viewport)
      const shouldComponentUpdate = this.state.position !== currentPosition

      const positionData = {
        domRect,
        currentPosition,
        viewport,
        shouldComponentUpdate,
      }

      const nextState = {
        ...defaultProps,
        position: currentPosition,
        shouldComponentUpdate,
        ...mapPositionToProps(positionData, this.props, this.state)
      }

      if (nextState.debug) {
        console.group('PositionAware')
        console.log('>> positionData: ', positionData)
        console.log('>> nextState: ', nextState)
        console.groupEnd()
      }

      if (nextState.shouldComponentUpdate) {
        this.setState(nextState)
      }
    }

    componentDidMount() {
      document.addEventListener('scroll', this.onScroll)
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.onScroll)
    }

    getDOMElement(ref) {
      this.DOMElement = ref
    }

    render() {
      const { debug, shouldComponentUpdate, ...passThroughProps } = this.state
      debug && console.warn('>> RE-RENDER')
      return (
        <WrappedComponent {...this.props} {...passThroughProps} connectRefDOM={this.getDOMElement}/>
      )
    }
  }
}

export default positionAware