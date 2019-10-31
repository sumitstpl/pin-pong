import React, { useEffect } from 'react';
import ReactTable from 'react-table'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Players = (props) => {
    const { getList, players: {
        getListLoading, playersList
    } } = props

    // fetching players list data
    useEffect(() => {
        getList()
    }, [])

    const columns = [{
        Header: 'Player',
        accessor: 'name',
        className: 'text-center'
      }, {
        Header: '% Win Games',
        id: 'win-ratio',
        accessor: e => e.user_match_info.win_ratio,
        Cell: row => (
            <span>
                {`${row.value}%`}
            </span>
        ),
        className: 'text-center'
      }]

    const redirectToMatches = (row) => {
        console.log(row)
        const { original } = row
        const { history } = props
        if (original._id) {
            history.push(`/matches/${original._id}`)
        }
    }
    return (
        <Container>
  <Row className="header-button-row">
  <Col md={1}/>
    <Col md={5} className="text-left"><Button>Matches</Button></Col>
    <Col md={5} className="text-right"><Button>New Game</Button></Col>
    <Col md={1}/>
  </Row>
  <Row>
    <Col md={1}/>
    <Col md={10}>
        <ReactTable
            data={playersList}
            columns={columns}
            loading={getListLoading}
            noDataText={getListLoading ? '' : 'No players found'}
            className='Table'
            getTdProps={(state, row) => {
                return {
                    onClick: (e, handleOriginal) => {
                        redirectToMatches(row)
                    }
                }
            }}
        />
    </Col>
    <Col md={1}/>
  </Row>
</Container>
    )
}

export default Players


