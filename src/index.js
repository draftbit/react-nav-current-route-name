import { createSelector } from 'reselect'
import { connect } from 'react-redux'

const getNavRoutes = nav => nav.routes
const getNavIndex = nav => nav.index

export const getCurrentRouteName = createSelector(
  [getNavRoutes, getNavIndex],
  (routes, index) => {
    const currentRouteIndex = routes[index].index
    if (currentRouteIndex !== null || currentRouteIndex !== undefined) {
      const currentRoute = routes[index].routes[currentRouteIndex]
      return currentRoute.routeName
    } else {
      return null
    }
  }
)

export const getCurrentRoute = connect(state => {
  const { nav } = state
  return {
    currentRoute: getCurrentRouteName({
      index: nav.index,
      routes: nav.routes
    })
  }
})
