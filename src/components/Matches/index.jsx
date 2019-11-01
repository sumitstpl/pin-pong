import React, { useEffect } from 'react';
import ReactTable from 'react-table'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Matches.css';

const Matches = (props) => {
    const { getList, matches: { getListLoading, matchesList }, history,
        match: { params: { player } } } = props
    useEffect(() => {
        if (player) {
            getList(player)
        }
    }, [])

    const getPlayerName = (data, type) => {
        if (type === 'player1') {
            if (player === data.original.player1) {
                return (<span className={data.original.player1 === data.original.winner ? 'Winner' : ''}>{`${data.original.player1_info.name} (${data.original.player1_points})`}</span>)
            } else {
                return (<span className={data.original.player2 === data.original.winner ? 'Winner' : ''}>{`${data.original.player2_info.name} (${data.original.player2_points})`}</span>)
            }

        } else {
            if (player === data.original.player1) {
                return (<span className={data.original.player2 === data.original.winner ? 'Winner' : ''}>{`${data.original.player2_info.name} (${data.original.player2_points})`}</span>)
            } else {
                return (<span className={data.original.player1 === data.original.winner ? 'Winner' : ''}>{`${data.original.player1_info.name} (${data.original.player1_points})`}</span>)
            }
        }
    }
    const columns = [{
        Header: 'Player 1',
        Cell: row => (
            <span>
                {getPlayerName(row, 'player1')}
            </span>
        ),
        className: 'text-center'
    }, {
        Header: 'Player 2',
        Cell: row => (
            <span>
                {getPlayerName(row, 'player2')}
            </span>
        ),
        className: 'text-center'
    }]
    return (
        <Container>
            <Row className="header-button-row">
                <Col md={1} />
                <Col md={10}>
                    <Button onClick={() => history.goBack()}>Go Back</Button>
                </Col>
            </Row>
            <Row>
                <Col md={1} />
                <Col md={10}>
                    <div className='Table'>
                        <ReactTable
                            data={matchesList}
                            columns={columns}
                            className='Table'
                            loading={getListLoading}
                            noDataText={getListLoading ? '' : 'No matches found'}
                        />
                    </div>
                </Col>
                <Col md={1} />
            </Row>
        </Container>
    )
}

export default Matches
