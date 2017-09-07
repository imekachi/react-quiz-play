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
export const positionAware = (mapPositionToProps) => (WrappedComponent) => {
  const defaultProps = {
    debug                : false,
    shouldComponentUpdate: true,
  }

  return class extends React.Component {
    constructor() {
      super()
      this.state = {
        ...defaultProps,
        ...mapPositionToProps({}, {}, {}),
      }

      this.getDOMElement = this.getDOMElement.bind(this)
      this.onScroll      = this.onScroll.bind(this)
    }

    onScroll() {
      const domRect   = this.DOMElement.getBoundingClientRect()
      const mappedObj = {
        ...defaultProps,
        ...mapPositionToProps(domRect, this.props, this.state)
      }

      if (mappedObj.debug) {
        console.group('PositionAware')
        console.log('>> domRect: ', domRect)
        console.log('>> data: ', mappedObj)
        console.groupEnd()
      }

      if (mappedObj.shouldComponentUpdate) {
        this.setState(mappedObj)
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