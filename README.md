# 🛣 Current Route Name

for react-navigation

## Installation

```
yarn add react-nav-current-route-name
```

```
npm install --save react-nav-current-route-name
```

## Usage

Two ways:

### 1 (as an HOC)

1. import `getCurrentRoute`
2. wrap it around your component
3. You'll have `currentRoute` available to you with the name of the current route

```es61
// if this is the only HOC you have:
import { getCurrentRoute } from 'react-nav-current-route-name'
export default getCurrentRoute(MyComponent)

// sometimes you'll have a few things using compose:

export default compose(
  getCurrentRouteName,
  withApollo,
  withNavigation,
  connectActionSheet
)(MyComponent)

// ...

componentDidUpdate(nextProps) {
  const { currentRoute } = this.props
  const { currentRoute: nextRoute } = nextProps
}
```

### 2 (using mapStateToProps)

1. import `getCurrentRouteName`
2. use it within your current `mapStateToProps` function
3. You'll have `currentRoute` available to you with the name of the current route

```es6
import { getCurrentRouteName } from 'react-nav-current-route-name'

export default connect(
  mapStateToProps(state => {
    return {
      currentRoute: getCurrentRouteName(state.nav)
    }
  })
)
```
