import {useDispatch} from 'react-redux';
import SelectCoin from '../ListaMoedas';

import {converteMoedas} from '../../store/actions';
import {useState} from 'react';

const Form = () => {
  const dispatch = useDispatch();

  const [convertFrom, setConvertFrom] = useState(0);
  const [convertFor, setConvertFor] = useState(0);
  const [value, setValue] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(converteMoedas({de: convertFrom, para: convertFor, valor: value}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row justify-content-md-center'>
        <div className='input-group input-group-lg'>
          <input
            className='form-control'
            type='number'
            onChange={(e: any) => setValue(e.target.value)}
            value={value}
          />
        </div>
      </div>
      <div className='row form-group'>
        <div className='col-md-6'>
          <label>De:</label>
          <SelectCoin onChange={setConvertFrom} value={convertFrom} />
        </div>
        <div className='col-md-6'>
          <label>Para:</label>
          <SelectCoin onChange={setConvertFor} value={convertFor} />
        </div>
      </div>
      <div className='row justify-content-md-center'>
        <button type='submit' className='btn btn-primary btn-lg btn-block'>
          Converter
        </button>
      </div>
    </form>
  );
};

export default Form;
