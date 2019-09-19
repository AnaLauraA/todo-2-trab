import React from 'react'
import IconButton from '../template/iconButton'
export default props => {
    const renderRows = () => {
        const list = props.list || []
        console.log(list) 
        return list.map(car => (
            <tr key={car._id}>
                <td className={car.flex ? 'markedAsDone' : ''}>{car.marca}</td>
                <td className={car.flex ? 'markedAsDone' : ''}>{car.modelo}</td>
                <td className={car.flex ? 'markedAsDone' : ''}>{car.ano}</td>
                <td className={car.flex ? 'markedAsDone' : ''}>{car.flex ? 'Flex': 'Normal'}</td>

                <td>
                    <IconButton style='success' icon='check' hide={car.flex}
                        onClick={() =>
                            props.handleMarkAsDone(car)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!car.flex}
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
                    <th>Descrição da Marca</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Combustivel</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}