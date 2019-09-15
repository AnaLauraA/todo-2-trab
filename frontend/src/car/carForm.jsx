/*import React from 'react'
export default props => (
    <div>
        <h1>Form</h1>
    </div>
)
*/
/*import React from 'react'
export default props => (
    <div role='form' className='todoForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'></input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    </div>
)*/
/*import React from 'react'
import Grid from '../template/grid'
export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'></input>
        </Grid>
        <Grid cols='12 3 2'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
        </Grid>
    </div>
)*/
/*import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
              onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)*/
import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
export default props => (
    <div role='form' className='carForm'>
        <Grid cols='12 9 10'>
            <input id='marca' className='form-control'
                placeholder='Adicione a marca do veiculo'
                onChange={props.handleChangeMarca}
                value={props.marca}></input>

            <input id='modelo' className='form-control'
                placeholder='Adicione o modelo do veiculo'
                onChange={props.handleChangeModelo}
                value={props.modelo}></input>

            <input id='ano' className='form-control' type='number'
                placeholder='Adicione o ano do veiculo'
                onChange={props.handleChangeAno}
                value={props.ano}></input>
            <div id='flex'>
                <label for="primeiro">Normal</label>
                <input id='primeiro' className='form-control'name='combustivel' type='radio'
                    placeholder='Combustivel'
                    onChange={props.handleChangeFlex}
                    value='false'></input>
                <label for="segundo">Flex</label>
                <input id='segundo'className='form-control' name='combustivel' type='radio'
                    placeholder='Combustivel'
                    onChange={props.handleChangeFlex}
                    value='true'></input>
            </div>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)