function RP1({ texto, imagem, bonus, preco }) {
  return (
    <>
      <div className="card">
        <h1> {texto} </h1>
        <figcaption>
          {' '}
          <h1>{bonus} </h1>{' '}
        </figcaption>
        <img src={imagem} />
        <figcaption>
          {' '}
          <h1>{preco} </h1>{' '}
        </figcaption>
      </div>
    </>
  );
}
export default RP1;
