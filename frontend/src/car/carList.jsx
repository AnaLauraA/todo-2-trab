import React from 'react'
export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(car => (
            <tr key={car._id}>
                <td className={car.done ? 'markedAsDone' : ''}>{car.marca}</td>
                <td>
                    <IconButton style='success' icon='check' hide={car.done}
                        onClick={() =>
                            props.handleMarkAsDone(car)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!car.done}
                        onClick={() =>
                            props.handleMarkAsPending(car)}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(car)}></IconButton>
                </td>
                <td className={car.done ? 'markedAsDone' : ''}>{car.modelo}</td>
                <td>
                    <IconButton style='success' icon='check' hide={car.done}
                        onClick={() =>
                            props.handleMarkAsDone(car)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!car.done}
                        onClick={() =>
                            props.handleMarkAsPending(car)}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(car)}></IconButton>
                </td>
                <td className={car.done ? 'markedAsDone' : ''}>{car.ano}</td>
                <td>
                    <IconButton style='success' icon='check' hide={car.done}
                        onClick={() =>
                            props.handleMarkAsDone(car)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!car.done}
                        onClick={() =>
                            props.handleMarkAsPending(car)}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(car)}></IconButton>
                </td>
                <td className={car.done ? 'markedAsDone' : ''}>{car.flex}</td>
                <td>
                    <IconButton style='success' icon='check' hide={car.done}
                        onClick={() =>
                            props.handleMarkAsDone(car)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!car.done}
                        onClick={() =>
                            props.handleMarkAsPending(car)}></IconButton>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(car)}></IconButton>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição do Carro</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}