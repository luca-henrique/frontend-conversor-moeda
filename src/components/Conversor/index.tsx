import Form from '../Formulario';

const Conversor = () => {
  return (
    <div className='content'>
      <div className='row justify-content-md-center'>
        <div className='card text-center w-50'>
          <div className='card-header bg-info'>Conversor de moedas</div>
          <div className='card-body'>
            <Form />
          </div>
          <div className='card-footer text-light bg-dark'>00.00</div>
        </div>
      </div>
    </div>
  );
};

export default Conversor;
