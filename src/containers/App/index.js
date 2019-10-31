import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { interceptor } from 'utils/interceptor'
import PlayerContainer from 'containers/Players/playerContainer'
import MatchesContainer from 'containers/Matches/matchesContainer'

export default function App() {
  interceptor()
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={PlayerContainer} />
        <Route exact path="/matches/:player" component={MatchesContainer} />
      </Switch>
    </Fragment>
  )
}
