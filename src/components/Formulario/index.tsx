import SelectCoin from '../ListaMoedas';

const Form = () => {
  return (
    <form>
      <div className='row justify-content-md-center'>
        <div className='input-group input-group-lg'>
          <input className='form-control' type='number' />
        </div>
      </div>
      <div className='row form-group'>
        <div className='col-md-6'>
          <label>De:</label>
          <SelectCoin />
        </div>
        <div className='col-md-6'>
          <label>Para:</label>
          <SelectCoin />
        </div>
      </div>
      <div className='row justify-content-md-center'>
        <button type='button' className='btn btn-primary btn-lg btn-block'>
          Converter
        </button>
      </div>
    </form>
  );
};

export default Form;
