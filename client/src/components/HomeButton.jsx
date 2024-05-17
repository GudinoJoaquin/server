export default function HomeButton({text, img, to}) {
  const [primerPalabra, segundaPalabra] = text.split(' ')

  return (
    <div className="btn-info" onClick={() => redirect({to})}>
      <img src={img} alt="" width="120px" />
      <p>
        {primerPalabra} <br />
        {segundaPalabra}
      </p>
    </div>
  );
}
