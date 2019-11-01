import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'

const Players = (props) => {
    const { addNewMatchModal, addNewMatch, addMatchModalValue, getList, players: {
        getListLoading, playersList
    } } = props

    const [players, setPlayers] = useState({
        player1: '',
        player2: '',
        winner: '',
        player1_points: 0,
        player2_points: 0
    })

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
        const { original } = row
        const { history } = props
        if (original._id) {
            history.push(`/matches/${original._id}`)
        }
    }

    const handleModal = () => {
        addNewMatchModal()
    }

    const selectPlayers = (e) => {
        const { value, name } = e.target
        setPlayers({ ...players, [name]: value })
    }

    const handleAddPlayers = (e) => {
        e.preventDefault()
        addNewMatch(players)
    }

    const resetState = () => {
        setPlayers({
            ...players,
            player1: '',
            player2: '',
            winner: '',
            player1_points: 0,
            player2_points: 0
        })
    }

    const { player1, player2, winner } = players
    return (
        <Container>
            <Row className="header-button-row">
                <Col md={1} />
                <Col md={5} className="text-left"><Button>Matches</Button></Col>
                <Col md={5} className="text-right"><Button onClick={() => handleModal()}>New Game</Button></Col>
                <Col md={1} />
            </Row>
            <Row>
                <Col md={1} />
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
                <Col md={1} />
            </Row>
            <Modal show={addMatchModalValue} onHide={handleModal}
                aria-labelledby="contained-modal-title-vcenter"
                centered onExiting={resetState}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new player</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleAddPlayers}>
                    <Modal.Body>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formGridState">
                                    <Form.Label>Player1</Form.Label>
                                    <Form.Control required as="select" name={'player1'} value={player1} onChange={selectPlayers}>
                                        <option disabled value=''>Select player 1</option>
                                        {playersList.map((value, index) => {
                                            if (value._id !== player2) {
                                                return <option value={value._id} key={index + 1}>{value.name}</option>
                                            }
                                        })}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formGridState">
                                    <Form.Label>Player2</Form.Label>
                                    <Form.Control required as="select" name={'player2'} value={player2} onChange={selectPlayers}>
                                        <option disabled value=''>Select player 2</option>
                                        {playersList.map((value, index) => {
                                            if (value._id !== player1) {
                                                return <option value={value._id} key={index + 1}>{value.name}</option>
                                            }
                                        })}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formGridState" >
                            <Form.Label>Winner</Form.Label>
                            <Form.Control required as="select" name={'winner'} value={winner} onChange={selectPlayers} disabled={!player1 || !player2}>
                                <option disabled value=''>{'Please select winner'}</option>
                                {playersList.map((value, index) => {
                                    if (value._id === player1 || value._id === player2) {
                                        return <option value={value._id} key={index + 1}>{value.name}</option>
                                    }
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>player 1 points</Form.Label>
                                    <Form.Control min={0} type="number" name={'player1_points'} placeholder="player 1 points" required onChange={selectPlayers} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>player 2 points</Form.Label>
                                    <Form.Control min={0} type="number" name={'player2_points'} placeholder="player 2 points" required onChange={selectPlayers} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" type="button" onClick={handleModal}>
                            Close
                    </Button>
                        <Button variant="primary" type="submit">
                            Save
                    </Button>
                    </Modal.Footer>
                </Form>

            </Modal>
        </Container>
    )
}

export default Players


